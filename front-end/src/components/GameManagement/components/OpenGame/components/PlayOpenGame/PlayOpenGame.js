import React, { useState } from "react";
import { StyledPlayOpenGame } from "./play-open-game.styles";

const PlayOpenGame = ({ trickList }) => {
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
		<StyledPlayOpenGame>
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
		</StyledPlayOpenGame>
	);
};

export default PlayOpenGame;
