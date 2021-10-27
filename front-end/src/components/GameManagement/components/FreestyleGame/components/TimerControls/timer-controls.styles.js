import styled from "styled-components";
import { whiteWindow } from "../../../../../../App.variables";

export const StyledTimerControls = styled.div`
	margin: 10px auto;
	background-color: ${whiteWindow};
	width: 95%;
	box-shadow: 0px 0px 5px black;
	border-radius: 5px;
	padding: 2%;
	display: flex;
	flex-direction: column;

	button {
		margin: 0 5px;
		height: 50px;
	}
	.timer-controls-row {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-evenly;
	}

	.timer-controls-col {
		display: flex;
		flex-direction: column;
		width: 100%;
		/* justify-content: space-around; */
	}

	.stop-btn {
		background-color: orange;
	}
`;
