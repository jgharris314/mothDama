import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../../../../../App.variables";

export const StyledOpenTrickListPrep = styled.div`
	background-color: ${purp};
	box-shadow: 0px 0px 100px inset ${outerBackgroundColor};
	width: 85%;
	margin: 0 auto;
	border-radius: 5px;
	height: 505px;
	padding-top: 10px;
	.hover-tricks {
		height: 40px;
	}

	.presets {
		margin-bottom: 20px;

		&-header {
			font-size: 26px;
			font-weight: bold;
			color: white;
		}

		&-item {
			width: 75%;
			margin: 5px auto;
			background-color: lime;
			border-radius: 15px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			box-shadow: 0px 0px 10px inset ${purp};
		}
	}

	.creation-form {
		width: 85%;
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.18);
		border-radius: 5px;
		color: white;

		&-header {
			padding-top: 5px;
		}
		&-textarea {
			width: 90%;
			height: 50px;
			margin-bottom: 10px;
		}

		button {
			height: 50px;
			margin-bottom: 5px;
			background-color: lime;
			box-shadow: 0px 0px 10px inset ${purp};
			border: none;
			border-radius: 5px;
			font-weight: bold;
		}
	}

	.chosen-tricklist {
		background-color: rgba(255, 255, 255, 0.18);
		font-weight: bold;
		padding-bottom: 10px;
		width: 85%;
		margin: 0 auto;
		color: white;
		overflow-y: scroll;
		max-height: 450px;
		border-radius: 5px;

		&-header {
			font-weight: bold;
			font-size: 24px;
		}

		&-buttons {
			margin-top: 7px;
			display: flex;
			justify-content: space-evenly;

			button {
				height: 30px;
				min-width: 50px;
				background-color: lime;
				box-shadow: 0px 0px 10px inset ${purp};
				border-radius: 5px;
				border: none;
				font-weight: bold;
			}
		}
	}
`;
