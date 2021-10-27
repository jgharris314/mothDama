import styled from "styled-components";
import { whiteWindow } from "../../../../../../App.variables";

export const StyledDurationAdjust = styled.div`
	background-color: ${whiteWindow};
	box-shadow: 0px 0px 5px black;
	border-radius: 5px;
	padding: 2%;
	display: flex;
	flex-direction: column;
	width: 95%;
	margin: 5px auto;

	button {
		margin: 0px 5px;
	}
	.duration-adjust-row {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;
		justify-content: center;
	}

	.duration-adjust-col {
		display: flex;
		flex-direction: column;
		width: 50%;
		/* justify-content: center; */
		/* justify-content: space-around; */
	}

	.minus {
		background-color: orange;
	}
`;
