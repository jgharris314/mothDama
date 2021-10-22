import React, { useState } from "react";
import { StyledGameManagement } from "./game-management.styles.js";
import OpenGame from "./components/OpenGame/OpenGame.js";
import KenGame from "./components/KenGame/KenGame.js";
import Header from "../Header/Header.js";
const GameManagement = () => {
	const gameModes = ["Open", "KEN", "Freestyle"];
	const [gameState, setGameState] = useState("none");

	return (
		<StyledGameManagement>
			<Header headerMemo={"Dare to believe"} />
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
