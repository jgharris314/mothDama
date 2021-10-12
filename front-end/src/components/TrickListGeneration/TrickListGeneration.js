import React, { useEffect, useState } from "react";
import { StyledTrickListGeneration } from "./trick-list-generation.styles";
import { listAllTricks } from "../../utilities/api";
const TrickListGeneration = () => {
	const defaultObjectState = [
		{
			trick_name: "pick",
			trick_difficulty: 0,
			trick_grip: "candle",
			isEnder: false,
			trick_id: "def",
		},
		{
			trick_name: "trix",
			trick_difficulty: 0,
			trick_grip: "candle",
			isEnder: true,
			trick_id: "fed",
		},
	];

	const [allTricks, setAllTricks] = useState([]);
	const [trickLine, setTrickLine] = useState("");
	const [startingGrip, setStartingGrip] = useState("");
	const [selectedDifficulty, setSelectedDifficulty] = useState(0);
	const [numberOfTricks, setNumberOfTricks] = useState(1);
	const [tricksToConsider, setTricksToConsider] = useState(allTricks);
	const [selectedTrickObjectState, setSelectedTrickObjectState] =
		useState(defaultObjectState);

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const generateLine = () => {
		prepTricks();

		let preppedLine = "";
		let prevId = null;
		let prevGrip = null;
		setStartingGrip(
			selectedTrickObjectState[0].trick_grip[0].toUpperCase() +
				selectedTrickObjectState[0].trick_grip.slice(1)
		);
		for (let i = 0; i < selectedTrickObjectState.length; i++) {
			if (selectedTrickObjectState[i].trick_grip !== prevGrip && i > 0) {
				preppedLine += `  ➤ ${
					selectedTrickObjectState[i].trick_grip[0].toUpperCase() +
					selectedTrickObjectState[i].trick_grip.slice(1)
				} grip ${
					selectedTrickObjectState[i].trick_name[0].toUpperCase() +
					selectedTrickObjectState[i].trick_name.slice(1)
				}`;
			} else if (
				selectedTrickObjectState[i].trick_id === prevId &&
				selectedTrickObjectState[i].trick_name !== "spike"
			) {
				preppedLine += ` ${getRandomInt(3) + 1}x ${
					selectedTrickObjectState[i].trick_name[0].toUpperCase() +
					selectedTrickObjectState[i].trick_name.slice(1)
				}`;
			} else {
				preppedLine += `  ${
					selectedTrickObjectState[i].trick_name[0].toUpperCase() +
					selectedTrickObjectState[i].trick_name.slice(1)
				}`;
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

		for (let i = 0; i < numberOfTricks; i++) {
			selectedTrickObjects.push(
				tricksToConsider[getRandomInt(tricksToConsider.length)]
			);
		}

		selectedTrickObjects[0] !== undefined
			? setSelectedTrickObjectState(selectedTrickObjects)
			: setSelectedTrickObjectState(defaultObjectState);
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
	}, []);

	useEffect(() => {
		setTricksToConsider(
			allTricks.filter(
				(trick) => trick.trick_difficulty <= selectedDifficulty
			)
		);
		prepTricks();
	}, [allTricks, numberOfTricks, selectedDifficulty]);

	return (
		<StyledTrickListGeneration>
			<div className="line-header">
				<h1>mothDama</h1>
				<h2 className="line-header-p">There is no easy</h2>
			</div>
			<div className="line-display">
				<p>Starting Grip: {startingGrip}</p>
				<p>{trickLine}</p>
			</div>

			<div className="options">
				<div className="options-settings">
					<p>Difficulty</p>
					<select onChange={(event) => handleDifficultyChange(event)}>
						<option value={0}>Easy</option>
						<option value={1}>Less Easy</option>
					</select>
					<p>Number of tricks</p>
					<select
						onChange={(event) => handleNumberOfTricksChange(event)}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
						<option value={8}>8</option>
						<option value={9}>9</option>
						<option value={10}>10</option>
					</select>
					<br />
				</div>
			</div>
			<button onClick={() => generateLine()}>Generate a line!</button>
		</StyledTrickListGeneration>
	);
};

export default TrickListGeneration;
