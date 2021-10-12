import React, { useState } from "react";
import { StyledOpenTrickListPrep } from "./open-trick-list-prep.styles";
import { presetList } from "../../../../../../data/presetTricks";
import ReactToolTip from "react-tooltip";
const TrickListPrep = ({
	trickList,
	setTrickList,
	setStartGame,
	defaultTrickList,
}) => {
	const [formTricks, setFormTricks] = useState([]);

	const prepData = (data) => {
		const tricks = data.split(",");
		return { id: Infinity, tricks: tricks, name: "custom" };
	};

	const handleChange = (event) => {
		setFormTricks(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("pog");
		if (formTricks.length) {
			const newData = prepData(formTricks);
			setTrickList(newData);
			setFormTricks([]);
		}
	};

	const loadTrickList = (id) => {
		if (id === 0) {
			setTrickList({ id: 0, tricks: [], name: "" });
		} else {
			setTrickList(presetList.find((t) => t.id === id));
		}
	};

	return (
		<StyledOpenTrickListPrep>
			<div>
				Presets
				{trickList.name.length ? (
					<div>
						<h6>{trickList.name}</h6>
						{trickList.tricks.map((t) => (
							<li>{t}</li>
						))}
						<button onClick={() => setStartGame(true)}>
							Start
						</button>
						<button onClick={() => setTrickList(defaultTrickList)}>
							Wait! I don't like this list
						</button>
					</div>
				) : (
					<div>
						<div>
							{presetList.map((trickList) => (
								<div>
									<li
										key={trickList.id}
										onClick={() =>
											loadTrickList(trickList.id)
										}
										data-tip
										data-for={`${trickList.id}Tip`}
									>
										{trickList.name}
									</li>

									<ReactToolTip
										key={`${trickList.id}Tip`}
										id={`${trickList.id}Tip`}
										place="top"
									>
										{trickList.tricks.map((trick) => (
											<li key={`${trickList.trick}key`}>
												{trick}
											</li>
										))}
									</ReactToolTip>
								</div>
							))}
						</div>
						Trick List Creation Form
						<form onSubmit={submitHandler}>
							<textarea
								onChange={handleChange}
								defaultValue="enter,tricks,separated,by,a,comma"
							></textarea>
							<button type="submit">GoGoGo</button>
						</form>
					</div>
				)}
			</div>
		</StyledOpenTrickListPrep>
	);
};

export default TrickListPrep;
