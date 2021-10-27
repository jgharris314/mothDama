import styled from "styled-components";
import { whiteWindow } from "../../../../../../App.variables";

export const StyledTimer = styled.div`
	background-color: ${whiteWindow};
	border-radius: 5px;
	box-shadow: 0px 0px 5px black;
	padding: 2%;
	width: 95%;
	margin: 5px auto;
	font-size: 24px;
	.progress {
		margin: 15px auto;
		padding: 2px;
		width: 95%;
		max-width: 500px;
		border: 3px solid lime;
		height: 30px;
		border-radius: 5px;

		&__bar {
			height: 100%;
			border-radius: 5px;
			background-color: lime;
		}
	}
`;
