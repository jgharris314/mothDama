import styled from "styled-components";
import {
	innerBackgroundColor,
	purp,
	outerBackgroundColor,
} from "../../App.variables";
export const StyledTrickListGeneration = styled.div`
	background-color: black;
	margin: 0;
	height: 95vh;
	overflow: hidden;

	button {
		width: 50%;
		height: 70px;
		margin: 1% auto 100px auto;
		font-size: 16px;
		color: lime;

		border: none;
		border-radius: 5px;
		background-color: ${purp};
		box-shadow: 0px 0px 100px inset ${outerBackgroundColor};
	}
	.options {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
		&-settings {
			background-color: ${purp};
			box-shadow: 0px 0px 100px inset ${outerBackgroundColor};
			display: flex;
			flex-direction: column;
			width: 85%;
			border-radius: 20px;
			/* border: 5px solid ${purp}; */
			color: lime;
			margin: 0 auto;
			padding-bottom: 2%;

			select {
				width: 30%;
				margin: 0 auto;
			}
			p {
				padding: 0;
				margin: 8px;
			}
		}
	}

	.line-display {
		background-color: ${purp};
		box-shadow: 0px 0px 200px inset ${outerBackgroundColor};
		min-height: 400px;
		max-height: 400px;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}

		p {
			font-size: 26px;
			font-weight: bold;
			color: white;
			background-color: rgba(255, 255, 255, 0.18);
			border-radius: 25px;
		}

		width: 85%;
		margin: 0 auto 5px auto;
		border-radius: 20px;
		/* border: 5px solid green; */
		margin-top: 0px;
	}

	.line-header {
		width: 100%;
		justify-content: center;
		color: white;
		top: 0;
		background-color: ${purp};
		box-shadow: 0px 0px 300px inset ${outerBackgroundColor};
		margin-bottom: 10px;
		h1 {
			margin-bottom: 0px;
			font-size: 72px;
			background: -webkit-linear-gradient(#93e506, lime);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			padding-bottom: 0;
			/* margin-top: 10px; */
			/* background: ; */
			margin-top: 0px;
		}

		h2 {
			font-size: 32px;
			margin: 0px;
			padding-top: 0;
			background: -webkit-linear-gradient(#e5a506, orange);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;
