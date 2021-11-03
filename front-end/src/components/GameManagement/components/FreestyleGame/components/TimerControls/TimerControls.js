import React from "react";
import classNames from "../../utils/classNames";
import { StyledTimerControls } from "./timer-controls.styles";
const TimerControls = ({ values, setValues, initialState, styles }) => {
	function playPause({ target }) {
		target.children[0].className === "oi oi-media-play" &&
		!values.displayTimer
			? setValues({
					...values,
					isRunning: !values.isRunning,
					count: values.focusVal * 60,
					displayTimer: true,
			  })
			: setValues({ ...values, isRunning: !values.isRunning });
	}

	function stopTimer() {
		if (values.displayTimer) {
			setValues({ ...initialState });
		}
	}

	return (
		<StyledTimerControls>
			<div className="timer-controls-row">
				<div className="timer-controls-col">
					<div className="" role="group" aria-label="Timer controls">
						<button
							type="button"
							className={values.isRunning ? "stop-btn" : null}
							data-testid="play-pause"
							title="Start or pause timer"
							onClick={playPause}
							style={styles ? styles.btn : null}
						>
							{
								<span
									className={classNames({
										oi: true,
										"oi-media-play": !values.isRunning,
										"oi-media-pause": values.isRunning,
									})}
								/>
							}
							{values.isRunning ? "Pause" : "Play"}
						</button>
						<button
							type="button"
							className="stop-btn"
							title="Stop the session"
							onClick={stopTimer}
							style={styles ? styles.undoBtn : null}
						>
							Stop
						</button>
					</div>
				</div>
			</div>
		</StyledTimerControls>
	);
};

export default TimerControls;
