import React, { useState } from "react";
import { StyledOpenGame } from "./open-game.styles";

const OpenGame = () => {
	//making of trick list
	const [trickList, setTrickList] = useState({ id: 0, tricks: [], name: "" });
	const [formTricks, setFormTricks] = useState([]);
	const [startGame, setStartGame] = useState(false);

	const prepData = (data) => {
		const tricks = data.split(",");
		return { id: Infinity, tricks: tricks, name: "custom" };
	};

	const handleChange = (event) => {
		setFormTricks(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("pog");
		if (formTricks.length) {
			const newData = prepData(formTricks);
			setTrickList(newData);
			setFormTricks([]);
		}
	};

	//Game functionality
	const [gameTrickList, setGameTrickList] = useState(trickList.tricks);
	const [usedTrickList, setUsedTrickList] = useState([]);
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0);
	const [currentTrick, setCurrentTrick] = useState("");

	const initialState = () => {
		setGameTrickList(trickList.tricks);
		setUsedTrickList([]);
		setPlayerOneScore(0);
		setPlayerTwoScore(0);
		setCurrentTrick("");
	};

	const increasePlayerOneScore = () => {
		if (playerOneScore < 3) {
			setPlayerOneScore(playerOneScore + 1);
		} else {
			initialState();
		}
	};

	const increasePlayerTwoScore = () => {
		if (playerTwoScore < 3) {
			setPlayerTwoScore(playerTwoScore + 1);
		} else {
			initialState();
		}
	};

	const nextTrick = () => {
		if (gameTrickList.length) {
			const chosenTrick =
				gameTrickList[Math.floor(Math.random() * gameTrickList.length)];
			setCurrentTrick(chosenTrick);
			setUsedTrickList([...usedTrickList, chosenTrick]);
			setGameTrickList([
				...gameTrickList.filter((t) => t !== chosenTrick),
			]);
		} else {
			setGameTrickList(trickList.tricks);
			setUsedTrickList([]);
			setCurrentTrick("");
		}
	};

	return (
		<StyledOpenGame>
			{!startGame && (
				<div>
					Display Trick List
					{trickList.name.length ? (
						<div>
							<h6>{trickList.name}</h6>
							{trickList.tricks.map((t) => (
								<li>{t}</li>
							))}
							<button onClick={() => setStartGame(true)}>
								Start
							</button>
						</div>
					) : (
						<div>
							Trick List Creation Form
							<form onSubmit={submitHandler}>
								<textarea
									onChange={handleChange}
									defaultValue="enter,tricks,separated,by,a,comma"
								></textarea>
								<button type="submit">GoGoGo</button>
							</form>
						</div>
					)}
				</div>
			)}
			{startGame && (
				<div>
					<div>
						<h4>Tricks Remaining</h4>
						{
							<ul>
								{" "}
								{gameTrickList.map((t) => (
									<li>{t}</li>
								))}
							</ul>
						}
					</div>
					<div>
						<h4>Lace it!</h4>
						{<h5>{currentTrick}</h5>}
					</div>
					<div>
						<h4>Been there done that!</h4>
						{
							<ul>
								{" "}
								{usedTrickList.map((t) => (
									<li>{t}</li>
								))}
							</ul>
						}
					</div>
					<div>
						<h6>Player One: {playerOneScore}</h6>
						<h6>Player Two: {playerTwoScore}</h6>
						<button onClick={nextTrick}>Go!</button>
						<button onClick={increasePlayerOneScore}>P1</button>
						<button onClick={increasePlayerTwoScore}>P2</button>
					</div>
				</div>
			)}
		</StyledOpenGame>
	);
};

export default OpenGame;
