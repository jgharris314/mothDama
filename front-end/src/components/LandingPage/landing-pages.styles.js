import styled from "styled-components";

import { outerBackgroundColor } from "../../App.variables";

export const StyledLandingPage = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${outerBackgroundColor};
	box-shadow: 0px 0px 200px inset #887777;
	height: 100vh;

	.video-player {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		margin-top: 5px;
	}
`;
