import React, { useState } from "react";
import { StyledPlayOpenGame } from "./play-open-game.styles";

const PlayOpenGame = ({
	trickList,
	setTrickList,
	setStartGame,
	defaultTricklist,
	styles,
}) => {
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

	const returnToPresets = () => {
		setTrickList(defaultTricklist);
		setStartGame(false);
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
		<StyledPlayOpenGame style={styles ? styles.background : null}>
			<div className="open-game-container">
				<div className="open-game-scores">
					<div className="open-game-scores-row">
						Player One
						<br />
						{playerOneScore}
					</div>
				</div>
				<div className="open-game-scores">
					<div className="open-game-scores-row">
						Player Two
						<br />
						{playerTwoScore}
					</div>
				</div>
			</div>

			<div className="open-game-remaining">
				Tricks remaining: {gameTrickList.length}
			</div>

			<div className="open-game-current">
				<div className="open-game-current-row">Lace it!</div>
				<div className="open-game-current-row" id="current-trick">
					{currentTrick}
				</div>
			</div>

			<div className="open-game-controls">
				<div className="open-game-controls-col">
					<button
						style={styles ? styles.otherButtons : null}
						onClick={increasePlayerOneScore}
					>
						P1 +
					</button>
					<button
						style={styles ? styles.otherButtons : null}
						onClick={reducePlayerOneScore}
					>
						P1 -
					</button>
				</div>
				<div className="open-game-controls-col">
					<button
						style={styles ? styles.nextBtn : null}
						onClick={nextTrick}
						id="next-button"
					>
						{gameTrickList.length ? "Next Trick" : "Re-shuffle"}
					</button>
				</div>
				<div className="open-game-controls-col">
					<button
						style={styles ? styles.otherButtons : null}
						onClick={increasePlayerTwoScore}
					>
						P2 +
					</button>
					<button
						style={styles ? styles.otherButtons : null}
						onClick={reducePlayerTwoScore}
					>
						P2 -
					</button>
				</div>
				<div className="open-game-controls-col">
					<button
						style={styles ? styles.otherButtons : null}
						onClick={() =>
							window.confirm("End game?")
								? setStartGame(false)
								: null
						}
					>
						Return to trick list
					</button>
					<button
						style={styles ? styles.otherButtons : null}
						onClick={() =>
							window.confirm("End game?")
								? returnToPresets()
								: null
						}
					>
						Return to preset list
					</button>
				</div>
			</div>
		</StyledPlayOpenGame>
	);
};

export default PlayOpenGame;
