import styled from "styled-components";
import { innerBackgroundColor, purp } from "../../App.variables";
export const StyledTrickListGeneration = styled.div`
	background-color: black;
	margin: 0;
	min-height: 100vh;
	overflow: hidden;

	button {
		width: 50%;
		height: 70px;
		margin: 1% auto 100px auto;
		font-size: 16px;
		color: lime;
		background-color: ${innerBackgroundColor};
		border: none;
		border-radius: 5px;
		box-shadow: 0px 0px 70px ${purp} inset;
	}
	.options {
		display: flex;
		flex-direction: row;
		margin-bottom: 1%;
		&-settings {
			background-color: green;
			display: flex;
			flex-direction: column;
			width: 85%;
			border-radius: 20px;
			border: 5px solid ${purp};
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
		background-color: darkgray;
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
		}

		width: 85%;
		margin: 1% auto;
		border-radius: 20px;
		border: 5px solid green;
	}

	.line-header {
		width: 100%;
		background-color: peachpuff;
		margin: 0 auto 20px auto;
		font-size: 24px;

		h1 {
			margin: 0 auto;
		}

		&-p {
			padding-top: 0;
			margin-top: 0;
		}
	}
`;
