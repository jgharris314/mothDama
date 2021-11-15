import React, { useState } from "react";
import { StyledKenGame } from "./ken-game.styles";

import PlayKenGame from "./components/PlayKenGame/PlayKenGame";
const KenGame = ({ styles }) => {
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
	document.title = "mothDama - KEN";
	return (
		<StyledKenGame style={styles ? styles.background : null}>
			{startGame ? (
				<PlayKenGame
					setStartGame={setStartGame}
					gameString={gameString}
					styles={styles}
				/>
			) : (
				<div
					className="ken-game-form"
					style={styles ? styles.background : null}
				>
					<form onSubmit={submitHandler}>
						<textarea
							className=""
							onChange={handleChange}
							placeholder="Leave blank to play ken or input a word"
						></textarea>
						<button
							style={styles ? styles.btn : null}
							type="submit"
						>
							Play: {formGameString}
						</button>
					</form>
				</div>
			)}
		</StyledKenGame>
	);
};

export default KenGame;
