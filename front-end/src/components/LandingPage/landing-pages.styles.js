import styled from "styled-components";
import {
	outerBackgroundColor,
	innerBackgroundColor,
	purp,
} from "../../App.variables";

export const StyledLandingPage = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${outerBackgroundColor};
	box-shadow: 0px 0px 200px inset #887777;
	height: 100vh;
	.landing-page-header {
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
			/* background: ; */
		}

		h2 {
			font-size: 32px;
			margin-top: 0;
			background: -webkit-linear-gradient(#e5a506, orange);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	.video-player {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		margin-top: 5px;
	}
`;
