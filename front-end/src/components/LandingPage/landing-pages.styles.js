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
	box-shadow: 0px 0px 200px inset silver;
	height: 100vh;
	.landing-page-header {
		width: 100%;
		justify-content: center;
		background-color: black;
		color: white;
		top: 0;
		background-color: ${innerBackgroundColor};
		box-shadow: 0px 0px 150px inset ${purp};

		h1 {
			font-size: 72px;
			margin-bottom: 0;
			color: lime;
		}

		h2 {
			font-size: 32px;
			margin-top: 0;
			color: orange;
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
