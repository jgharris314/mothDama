import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../App.variables";

export const StyledGameManagement = styled.div`
	.game-header {
		width: 100%;
		justify-content: center;
		background-color: black;
		color: white;
		top: 0;
		background-color: ${purp};
		box-shadow: 0px 0px 300px inset ${outerBackgroundColor};

		h1 {
			margin-bottom: 0;
			font-size: 72px;
			background: -webkit-linear-gradient(#93e506, lime);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-top: 0px;
		}

		h2 {
			font-size: 32px;
			margin-top: 0;
			background: -webkit-linear-gradient(#e5a506, orange);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-bottom: 5px;
		}
	}

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
