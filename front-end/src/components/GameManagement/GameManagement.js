import React, { useState } from "react";
import { StyledGameManagement } from "./game-management.styles.js";
import OpenGame from "./components/OpenGame/OpenGame.js";
import KenGame from "./components/KenGame/KenGame.js";
import FreestyleGame from "./components/FreestyleGame/FreestyleGame.js";

const GameManagement = ({ setHeaderMemo, styles }) => {
	const gameModes = ["Open", "KEN", "Freestyle"];
	const [gameState, setGameState] = useState("none");
	document.title = "mothDama - Games";
	setHeaderMemo("Dare to Believe");
	return (
		<StyledGameManagement>
			<div className="game-modes">
				{gameModes.map((mode) => (
					<button
						style={styles ? styles.gameLandingPage.btn : null}
						onClick={() => setGameState(mode.toLowerCase())}
					>
						{mode}
					</button>
				))}
			</div>
			{gameState === "open" && <OpenGame styles={styles.open} />}
			{gameState === "ken" && <KenGame styles={styles.ken} />}
			{gameState === "freestyle" && (
				<FreestyleGame styles={styles.freeStyle} />
			)}
		</StyledGameManagement>
	);
};

export default GameManagement;
