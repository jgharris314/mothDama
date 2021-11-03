import React, { useState, useEffect } from "react";
import { StyledPlayKenGame } from "./play-ken-game.styles";

const PlayKenGame = ({ setStartGame, gameString, styles }) => {
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0);

	const [playerOneProveIt, setPlayerOneProveIt] = useState(true);
	const [playerTwoProveIt, setPlayerTwoProveIt] = useState(true);

	const [playerOneDisplay, setPlayerOneDisplay] = useState("");
	const [playerTwoDisplay, setPlayerTwoDisplay] = useState("");

	const scoreLimit = gameString.length;

	const initialState = () => {
		setPlayerOneScore(0);
		setPlayerTwoScore(0);
		setPlayerOneProveIt(true);
		setPlayerTwoProveIt(true);
		setPlayerOneDisplay("");
		setPlayerTwoDisplay("");
	};

	const increasePlayerOneScore = () => {
		if (playerOneScore < scoreLimit - 1) {
			setPlayerOneScore(playerOneScore + 1);
		} else if (playerOneScore === scoreLimit - 1 && playerOneProveIt) {
			setPlayerOneProveIt(false);
		} else {
			if (window.confirm("Confirm Player Two win")) {
				window.alert("Player Two Wins");
				initialState();
			}
		}
	};

	const increasePlayerTwoScore = () => {
		if (playerTwoScore < scoreLimit - 1) {
			setPlayerTwoScore(playerTwoScore + 1);
		} else if (playerTwoScore === scoreLimit - 1 && playerTwoProveIt) {
			setPlayerTwoProveIt(false);
		} else {
			if (window.confirm("Confirm Player One win")) {
				window.alert("Player One Wins");
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
	const renderPlayerOne = () => {
		let prepString = "";

		for (let i = 0; i < playerOneScore; i++) {
			prepString += gameString[i];
		}

		setPlayerOneDisplay(prepString);
	};

	const renderPlayerTwo = () => {
		let prepString = "";

		for (let i = 0; i < playerTwoScore; i++) {
			prepString += gameString[i];
		}

		setPlayerTwoDisplay(prepString);
	};
	useEffect(() => {
		renderPlayerOne();
		renderPlayerTwo();
	}, [playerOneScore, playerTwoScore]);

	return (
		<StyledPlayKenGame>
			<div className="game-string-col">
				<div className="game-string-col-details">Playing to </div>{" "}
				<div className="game-string-col-details">{gameString}</div>
			</div>
			<div className="players-section">
				<div className="players-section-player">
					<div className="players-section-player-details">
						Player One
					</div>
					<div className="players-section-player-details">
						{playerOneDisplay}
					</div>
					<div className="players-section-player-details">
						{playerOneProveIt ? "Prove it" : "Prove It used"}
					</div>
				</div>
				<div className="players-section-player">
					<div className="players-section-player-details">
						Player Two
					</div>
					<div className="players-section-player-details">
						{playerTwoDisplay}
					</div>
					<div className="players-section-player-details">
						{playerTwoProveIt ? "Prove it" : "Prove It used"}
					</div>
				</div>
			</div>
			<div className="button-section">
				<div className="increasing-buttons">
					<button
						style={styles && playerOneProveIt ? styles.btn : null}
						className={playerOneProveIt ? null : "last"}
						onClick={() => increasePlayerOneScore()}
					>
						Player One Letter
					</button>
					<button
						style={styles && playerTwoProveIt ? styles.btn : null}
						className={playerTwoProveIt ? null : "last"}
						onClick={() => increasePlayerTwoScore()}
					>
						Player Two Letter
					</button>
				</div>
				<div className="restoring-buttons">
					<button
						onClick={() => reducePlayerOneScore()}
						style={styles ? styles.undoBtn : null}
					>
						Remove Player One Letter
					</button>
					<button
						onClick={() => reducePlayerTwoScore()}
						style={styles ? styles.undoBtn : null}
					>
						Remove Player Two Letter
					</button>
				</div>
				<div className="restoring-buttons">
					<button
						onClick={() => setPlayerOneProveIt(true)}
						style={styles ? styles.undoBtn : null}
					>
						Restore Player One Prove It
					</button>
					<button
						onClick={() => setPlayerTwoProveIt(true)}
						style={styles ? styles.undoBtn : null}
					>
						Restore Player Two Prove It
					</button>
				</div>
				<button
					onClick={() => setStartGame(false)}
					style={styles ? styles.btn : null}
				>
					Jack! Go Back!
				</button>{" "}
			</div>
		</StyledPlayKenGame>
	);
};

export default PlayKenGame;
