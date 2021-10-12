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
			{trickList.name.length ? (
				<div>
					<div className="chosen-tricklist">
						<div className="chosen-tricklist-header">
							{trickList.name}
						</div>
						{trickList.tricks.map((t) => (
							<div>{t}</div>
						))}
					</div>
					<div className="chosen-tricklist-buttons">
						<button onClick={() => setTrickList(defaultTrickList)}>
							Wait! I don't like this list
						</button>
						<button onClick={() => setStartGame(true)}>
							Start
						</button>
					</div>
				</div>
			) : (
				<div>
					<div className="presets">
						<div className="presets-header">Presets</div>
						{presetList.map((trickList) => (
							<div>
								<div
									className="presets-item"
									key={trickList.id}
									onClick={() => loadTrickList(trickList.id)}
									data-tip
									data-for={`${trickList.id}Tip`}
								>
									{trickList.name}
								</div>

								<ReactToolTip
									key={`${trickList.id}Tip`}
									id={`${trickList.id}Tip`}
									place="top"
								>
									{trickList.tricks.map((trick) => (
										<li key={`${trick}key`}>{trick}</li>
									))}
								</ReactToolTip>
							</div>
						))}
					</div>
					<div className="creation-form">
						<div className="creation-form-header">
							Don't like the presets? Create your own!
						</div>
						<form onSubmit={submitHandler}>
							<textarea
								className="creation-form-textarea"
								onChange={handleChange}
								placeholder="enter,tricks,separated,by,a,comma"
							></textarea>
							<button type="submit">Play Custom</button>
						</form>
					</div>
				</div>
			)}
		</StyledOpenTrickListPrep>
	);
};

export default TrickListPrep;
