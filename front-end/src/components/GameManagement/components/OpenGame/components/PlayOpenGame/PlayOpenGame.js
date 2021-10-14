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
		if (playerOneScore < 2) {
			setPlayerOneScore(playerOneScore + 1);
		} else {
			if (window.confirm("Confirm Player One win")) {
				window.alert("Player One wins!");

				initialState();
			}
		}
	};

	const increasePlayerTwoScore = () => {
		if (playerTwoScore < 2) {
			setPlayerTwoScore(playerTwoScore + 1);
		} else {
			if (window.confirm("Confirm Player Two win")) {
				window.alert("Player Two wins!");

				initialState();
			}
		}
	};

	const reducePlayerOneScore = () => {
		if (playerOneScore > 0) {
			setPlayerOneScore(playerOneScore - 1);
		}
	};

	const reducePlayerTwoScore = () => {
		if (playerTwoScore > 0) {
			setPlayerTwoScore(playerTwoScore - 1);
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
			<div className="open-game-container">
				<div className="open-game-scores">
					<div className="open-game-scores-row">Player One</div>
					<div className="open-game-scores-row">{playerOneScore}</div>
				</div>
				<div className="open-game-scores">
					<div className="open-game-scores-row">Player Two</div>
					<div className="open-game-scores-row">{playerTwoScore}</div>
				</div>
			</div>
			<div className="open-game-remaining">
				<div className="open-game-remaining-row">
					Tricks until Reshuffle
				</div>

				<div className="open-game-remaining-row">
					{gameTrickList.length}
				</div>
			</div>
			<div className="open-game-current">
				<div className="open-game-current-row">Lace it!</div>
				<div className="open-game-current-row" id="current-trick">
					{currentTrick}
				</div>
			</div>

			<div className="open-game-controls">
				<div className="open-game-controls-col">
					<button onClick={reducePlayerOneScore}>P1 -</button>
					<button onClick={increasePlayerOneScore}>P1 +</button>
				</div>
				<div className="open-game-controls-col">
					<button onClick={nextTrick} id="next-button">
						{gameTrickList.length ? "Next Trick" : "Re-shuffle"}
					</button>
				</div>
				<div className="open-game-controls-col">
					<button onClick={reducePlayerTwoScore}>P2 -</button>
					<button onClick={increasePlayerTwoScore}>P2 +</button>
				</div>
			</div>
		</StyledPlayOpenGame>
	);
};

export default PlayOpenGame;
