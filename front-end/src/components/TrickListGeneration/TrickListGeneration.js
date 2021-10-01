import React, { useEffect, useState } from "react";
import { StyledTrickListGeneration } from "./trick-list-generation.styles";
import { listAllTricks } from "../../utilities/api";

const TrickListGeneration = () => {
	const [allTricks, setAllTricks] = useState([]);
	const [trickLine, setTrickLine] = useState("");

	const [selectedDifficulty, setSelectedDifficulty] = useState(1);
	const [numberOfTricks, setNumberOfTricks] = useState(1);
	const [tricksToConsider, setTricksToConsider] = useState([]);
	const [selectedTrickObjectState, setSelectedTrickObjectState] = useState([
		{
			trick_name: "little cup",
			trick_difficulty: 0,
			trick_grip: "candle",
			isEnder: false,
		},
		{
			trick_name: "base cup",
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
		console.log(selectedTrickObjectState);
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

		prepTricks();
	}, []);
	return (
		<StyledTrickListGeneration>
			<h2>All Trix</h2>
			<ul>
				{allTricks.map((trick) => (
					<li>
						{trick.trick_name} {trick.trick_grip}
					</li>
				))}
			</ul>
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
			<ul>
				{selectedTrickObjectState.map((trick) => (
					<li>
						{trick.trick_grip} {trick.trick_name}
					</li>
				))}
			</ul>
		</StyledTrickListGeneration>
	);
};

export default TrickListGeneration;
