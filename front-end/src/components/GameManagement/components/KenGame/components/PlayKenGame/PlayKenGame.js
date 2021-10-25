import React, { useState, useEffect } from "react";
import { StyledPlayKenGame } from "./play-ken-game.styles";

const PlayKenGame = ({ setStartGame, gameString }) => {
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
			window.alert(" Player One Prove It used");
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
			window.alert(" Player Two Prove It used");
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
			<div className="game-string-row">Playing to: {gameString}</div>
			<div className="players-section">
				<div className="player-section-player">
					Player One: {playerOneDisplay}
					{playerOneProveIt ? "Prove it" : "Prove It used"}
				</div>
				<div className="player-section-player">
					Player Two: {playerTwoDisplay}
					{playerTwoProveIt ? "Prove it" : "Prove It used"}
				</div>
			</div>
			<button onClick={() => increasePlayerOneScore()}>
				Player One Letter
			</button>
			<button onClick={() => increasePlayerTwoScore()}>
				Player Two Letter
			</button>
			<button onClick={() => reducePlayerOneScore()}>
				Remove Player One Letter
			</button>
			<button onClick={() => reducePlayerTwoScore()}>
				Remove Player Two Letter
			</button>
			<button onClick={() => setPlayerOneProveIt(true)}>
				Restore Player One Prove It
			</button>
			<button onClick={() => setPlayerTwoProveIt(true)}>
				Restore Player Two Prove It
			</button>
			<button onClick={() => setStartGame(false)}>Jack! Go Back!</button>{" "}
			This is clearly under construction.
		</StyledPlayKenGame>
	);
};

export default PlayKenGame;
