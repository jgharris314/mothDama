import React, { useState, useEffect } from "react";
import { StyledKenGame } from "./ken-game.styles";

import PlayKenGame from "./components/PlayKenGame/PlayKenGame";
const KenGame = () => {
	const [startGame, setStartGame] = useState(false);
	const defaultGameString = "KEN";
	const [gameString, setGameString] = useState(defaultGameString);
	const [formGameString, setFormGameString] = useState(defaultGameString);
	const handleChange = (event) => {
		setFormGameString(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("pog");
		if (formGameString.length) {
			setGameString(formGameString);
		}
		setStartGame(true);
	};

	// const renderGameString = () => {
	// 	setDisplayGameString(gameString);
	// };

	// useEffect(() => {
	// 	renderGameString();
	// }, [formGameString]);

	return (
		<StyledKenGame>
			{startGame ? (
				<PlayKenGame
					setStartGame={setStartGame}
					gameString={gameString}
				/>
			) : (
				<div className="ken-game-form">
					<form onSubmit={submitHandler}>
						<textarea
							className=""
							onChange={handleChange}
							placeholder="Leave blank to play ken or input a word"
						></textarea>
						<button type="submit">Play: {formGameString}</button>
					</form>
				</div>
			)}
		</StyledKenGame>
	);
};

export default KenGame;
