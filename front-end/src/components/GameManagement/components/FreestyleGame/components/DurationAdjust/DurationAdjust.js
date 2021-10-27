import React from "react";
import { minutesToDuration } from "../../utils/duration.js";
import { StyledDurationAdjust } from "./duration-adjust.styles";
const DurationAdjust = ({ values, setValues }) => {
	const boundaryCheck = (dur, min, max) =>
		dur > max ? max : dur < min ? min : dur;

	const focusHandler = ({ target }) => {
		if (target.id === "minus" && !values.displayTimer) {
			const newValue = boundaryCheck(
				values.focusVal - values.focusInc,
				values.focusMin,
				values.focusMax
			);
			setValues({ ...values, focusVal: newValue });
		}
		if (target.id === "plus" && !values.displayTimer) {
			const newValue = boundaryCheck(
				values.focusVal + values.focusInc,
				values.focusMin,
				values.focusMax
			);
			setValues({ ...values, focusVal: newValue });
		}
	};

	const breakHandler = ({ target }) => {
		if (target.id === "minus" && !values.displayTimer) {
			const newValue = boundaryCheck(
				values.breakVal - values.breakInc,
				values.breakMin,
				values.breakMax
			);
			setValues({ ...values, breakVal: newValue });
		}
		if (target.id === "plus" && !values.displayTimer) {
			const newValue = boundaryCheck(
				values.breakVal + values.breakInc,
				values.breakMin,
				values.breakMax
			);
			setValues({ ...values, breakVal: newValue });
		}
	};

	return (
		<StyledDurationAdjust>
			<div className="duration-adjust-row">
				<div className="duration-adjust-col">
					Session Duration: {minutesToDuration(values.focusVal)}
					<div className="">
						<button
							type="button"
							data-testid="decrease-focus"
							id="minus"
							onClick={focusHandler}
							className="minus"
						>
							-
						</button>
						<button
							type="button"
							data-testid="increase-focus"
							id="plus"
							onClick={focusHandler}
							className="plus"
						>
							+
						</button>
					</div>
				</div>

				<div className="duration-adjust-col">
					Break Duration: {minutesToDuration(values.breakVal)}
					<div className="">
						<button
							type="button"
							className="minus"
							data-testid="decrease-break"
							id="minus"
							onClick={breakHandler}
						>
							-
						</button>
						<button
							type="button"
							className="plus"
							data-testid="increase-break"
							id="plus"
							onClick={breakHandler}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</StyledDurationAdjust>
	);
};

export default DurationAdjust;
