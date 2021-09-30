import React, { useEffect, useState } from "react";
import { StyledTrickListGeneration } from "./trick-list-generation.styles";
import { listAllTricks } from "../../utilities/api";

const TrickListGeneration = () => {
	const [allTricks, setAllTricks] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();
		listAllTricks(abortController.signal)
			.then(setAllTricks)
			.catch((error) => error);
	}, []);
	return (
		<StyledTrickListGeneration>
			<ul>
				{allTricks.map((trick) => (
					<li>
						{trick.trick_name} {trick.trick_grip}
					</li>
				))}
			</ul>
		</StyledTrickListGeneration>
	);
};

export default TrickListGeneration;
