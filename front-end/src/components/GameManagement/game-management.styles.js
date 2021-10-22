import styled from "styled-components";
import { purp } from "../../App.variables";

export const StyledGameManagement = styled.div`
	.game-modes {
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		width: 85%;
		margin: 0 auto 10px auto;
		justify-content: space-between;

		button {
			width: 25%;
			height: 50px;
			background-color: lime;
			box-shadow: 0px 0px 10px inset ${purp};
			border-radius: 10px;
			border: none;
			font-weight: bold;
		}
	}
`;
