import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../App.variables";
export const StyledTrickListGeneration = styled.div`
	margin: 0;
	max-height: 95vh;
	overflow: scroll;

	button {
		width: 50%;
		height: 70px;
		margin: 1% auto 100px auto;
		font-size: 16px;
		color: lime;
		font-weight: bold;
		border: none;
		border-radius: 5px;
		background-color: ${purp};
		box-shadow: 0px 0px 100px inset ${outerBackgroundColor};
	}
	.options {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
		font-weight: bold;
		&-settings {
			background-color: ${purp};
			box-shadow: 0px 0px 100px inset ${outerBackgroundColor};
			display: flex;
			flex-direction: column;
			width: 85%;
			border-radius: 20px;
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
		min-height: 300px;
		/* max-height: 250px; */

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
			border-radius: 5px;
			width: 85%;
			margin: 20px auto;
			padding: 2%;
		}

		width: 85%;
		margin: 0 auto 5px auto;
		border-radius: 20px;
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
