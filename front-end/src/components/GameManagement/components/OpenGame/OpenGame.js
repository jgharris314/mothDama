import React, { useState } from "react";
import { StyledOpenGame } from "./open-game.styles";
import OpenTrickListPrep from "./components/OpenTrickListPrep/OpenTrickListPrep";
import PlayOpenGame from "./components/PlayOpenGame/PlayOpenGame";

const OpenGame = () => {
	const defaultTrickList = { id: 0, tricks: [], name: "" };
	const [trickList, setTrickList] = useState(defaultTrickList);
	const [startGame, setStartGame] = useState(false);

	return (
		<StyledOpenGame>
			{startGame ? (
				<PlayOpenGame
					trickList={trickList}
					setStartGame={setStartGame}
				/>
			) : (
				<OpenTrickListPrep
					trickList={trickList}
					setTrickList={setTrickList}
					setStartGame={setStartGame}
					defaultTrickList={defaultTrickList}
				/>
			)}
		</StyledOpenGame>
	);
};

export default OpenGame;
