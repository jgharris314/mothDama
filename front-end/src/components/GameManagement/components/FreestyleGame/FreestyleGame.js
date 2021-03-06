import React, { useState } from "react";
import { StyledFreestyleGame } from "./freestyle-game.styles";
import useInterval from "./utils/useInterval.js";
import DurationAdjust from "./components/DurationAdjust/DurationAdjust";
import Timer from "./components/Timer/Timer";
import TimerControls from "./components/TimerControls/TimerControls";
const FreestyleGame = ({ styles }) => {
	const initialState = {
		displayTimer: false,
		focusVal: 5,
		focusInc: 1,
		focusMin: 1,
		focusMax: 60,
		count: 1,
		breakVal: 5,
		breakInc: 1,
		breakMin: 1,
		breakMax: 15,
		isRunning: false,
		focusing: true,
	};

	const [values, setValues] = useState({ ...initialState });

	useInterval(
		() => {
			if (values.isRunning) {
				setValues({ ...values, count: values.count - 1 });

				if (values.count === 0 && values.focusing) {
					setValues({
						...values,
						count: values.breakVal * 60,
						focusing: !values.focusing,
					});
					new Audio(
						`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`
					).play();
				}
				if (values.count === 0 && !values.focusing) {
					setValues({
						...values,
						count: values.focusVal * 60,
						focusing: !values.focusing,
					});
					new Audio(
						`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`
					).play();
				}
			}
		},
		values.isRunning ? 1000 : null
	);

	document.title = "mothDama - Freestyle";
	return (
		<StyledFreestyleGame style={styles ? styles.background : null}>
			<DurationAdjust
				values={values}
				setValues={setValues}
				styles={styles.buttons}
			/>
			<TimerControls
				values={values}
				setValues={setValues}
				initialState={initialState}
				styles={styles.buttons}
			/>
			<Timer values={values} styles={styles} />
		</StyledFreestyleGame>
	);
};

export default FreestyleGame;
