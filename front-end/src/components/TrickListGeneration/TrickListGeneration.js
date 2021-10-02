import React, { useEffect, useState } from "react";
import { StyledTrickListGeneration } from "./trick-list-generation.styles";
import { listAllTricks } from "../../utilities/api";

const TrickListGeneration = () => {
	const [allTricks, setAllTricks] = useState([]);
	const [trickLine, setTrickLine] = useState("");

	const [selectedDifficulty, setSelectedDifficulty] = useState(0);
	const [numberOfTricks, setNumberOfTricks] = useState(1);
	const [tricksToConsider, setTricksToConsider] = useState(allTricks);
	const [selectedTrickObjectState, setSelectedTrickObjectState] = useState([
		{
			trick_name: "pick",
			trick_difficulty: 0,
			trick_grip: "candle",
			isEnder: false,
		},
		{
			trick_name: "trix",
			trick_difficulty: 0,
			trick_grip: "candle",
			isEnder: false,
		},
	]);
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const generateLine = () => {
		prepTricks();

		let preppedLine = "";
		let prevId = null;
		let prevGrip = null;

		for (let i = 0; i < selectedTrickObjectState.length; i++) {
			if (selectedTrickObjectState[i].trick_grip !== prevGrip && i > 0) {
				preppedLine += ` trade to ${selectedTrickObjectState[i].trick_grip} ${selectedTrickObjectState[i].trick_name}`;
			} else if (
				selectedTrickObjectState[i].trick_id === prevId &&
				selectedTrickObjectState[i].trick_name !== "spike"
			) {
				preppedLine += ` spike ${selectedTrickObjectState[i].trick_name}`;
			} else {
				preppedLine += `  ${selectedTrickObjectState[i].trick_name}`;
			}
			prevGrip = selectedTrickObjectState[i].trick_grip;
			prevId = selectedTrickObjectState[i].trick_id;
		}

		if (
			!selectedTrickObjectState[selectedTrickObjectState.length - 1]
				.isEnder
		) {
			preppedLine += ` spike`;
		}

		setTrickLine(preppedLine);
	};

	const prepTricks = () => {
		let selectedTrickObjects = [];
		setTricksToConsider(
			allTricks.filter(
				(trick) => trick.trick_difficulty <= selectedDifficulty
			)
		);

		for (let i = 0; i < numberOfTricks; i++) {
			selectedTrickObjects.push(
				tricksToConsider[getRandomInt(tricksToConsider.length)]
			);
		}

		setSelectedTrickObjectState(selectedTrickObjects);
	};

	const handleDifficultyChange = (event) => {
		const value = event.target.value;
		setSelectedDifficulty(value);
	};

	const handleNumberOfTricksChange = (event) => {
		const value = event.target.value;
		setNumberOfTricks(value);
	};

	useEffect(() => {
		const abortController = new AbortController();
		listAllTricks(abortController.signal)
			.then(setAllTricks)
			.catch((error) => error);
	}, [selectedDifficulty]);

	useEffect(() => {
		setTricksToConsider(
			allTricks.filter(
				(trick) => trick.trick_difficulty <= selectedDifficulty
			)
		);
	}, [allTricks]);
	return (
		<StyledTrickListGeneration>
			<h2>All Trix</h2>
			<p>Difficulty</p>
			<select onChange={(event) => handleDifficultyChange(event)}>
				<option value={0}>Easy</option>
				<option value={1}>Less Easy</option>
			</select>
			<p>Number of tricks</p>
			<select onChange={(event) => handleNumberOfTricksChange(event)}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
				<option value={6}>6</option>
			</select>
			<br></br>
			<button onClick={() => generateLine()}>Generate a line!</button>
			<h3>Trix Considered</h3>
			<ul>
				{tricksToConsider.map((trick) => (
					<li>
						{trick.trick_name} {trick.trick_grip}
					</li>
				))}
			</ul>
			<h3>Trick Line</h3>
			<p>{trickLine}</p>
		</StyledTrickListGeneration>
	);
};

export default TrickListGeneration;
