import React, { useState } from "react";
import { StyledGameManagement } from "./game-management.styles.js";
import OpenGame from "./components/OpenGame/OpenGame.js";
import KenGame from "./components/KenGame/KenGame.js";

const GameManagement = () => {
	const gameModes = ["Open", "KEN", "Freestyle"];
	const [gameState, setGameState] = useState("none");

	return (
		<StyledGameManagement>
			<div className="game-header">
				<h1>mothDama</h1>
				<h2>Dare to Believe</h2>
			</div>
			<div className="game-modes">
				{gameModes.map((mode) => (
					<button onClick={() => setGameState(mode.toLowerCase())}>
						{mode}
					</button>
				))}
			</div>
			{gameState === "open" && <OpenGame />}
			{gameState === "ken" && <KenGame />}
		</StyledGameManagement>
	);
};

export default GameManagement;
