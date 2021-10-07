import React, { useState } from "react";
import { StyledGameManagement } from "./game-management.styles.js";
import OpenGame from "./components/OpenGame/OpenGame.js";
import KenGame from "./components/KenGame/KenGame.js";

const GameManagement = () => {
	const [gameState, setGameState] = useState("none");

	const handleGameChange = (event) => {
		const value = event.target.value;
		setGameState(value);
	};

	return (
		<StyledGameManagement>
			Game Management
			<div>
				<select onChange={(event) => handleGameChange(event)}>
					<option value={"none"}>None</option>
					<option value={"open"}>Open</option>
					<option value={"ken"}>K.E.N</option>
				</select>
			</div>
			{gameState === "open" && <OpenGame />}
			{gameState === "ken" && <KenGame />}
		</StyledGameManagement>
	);
};

export default GameManagement;
