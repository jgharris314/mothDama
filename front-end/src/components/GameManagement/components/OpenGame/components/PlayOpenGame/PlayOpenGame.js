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
			<h3>{trickList.name}</h3>
			<div className="open-game-scores">
				<div className="open-game-scores-player">
					Player One: {playerOneScore}
				</div>
				<div className="open-game-scores-player">
					Player Two: {playerTwoScore}
				</div>
			</div>
			<div className="open-game-remaining">
				<div className="open-game-remaining-col">
					Tricks until Reshuffle
				</div>

				<div className="open-game-remaining-col">
					{gameTrickList.length}
				</div>
			</div>
			<div className="open-game-current">
				<div className="open-game-current-col">Lace it!</div>
				<div className="open-game-current-col">{currentTrick}</div>
			</div>

			<div className="open-game-controls">
				<button onClick={nextTrick}>
					{gameTrickList.length ? "Go" : "Re-shuffle"}
				</button>
				<button onClick={increasePlayerOneScore}>P1</button>
				<button onClick={increasePlayerTwoScore}>P2</button>
			</div>
			{/* <div>
					<h4>Been there done that!</h4>
					{
						<ul>
							{" "}
							{usedTrickList.map((t) => (
								<li>{t}</li>
							))}
						</ul>
					}
				</div> */}
		</StyledPlayOpenGame>
	);
};

export default PlayOpenGame;
