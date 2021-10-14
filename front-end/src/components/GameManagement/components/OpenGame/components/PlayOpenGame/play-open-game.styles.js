import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../../../../../App.variables";
export const StyledPlayOpenGame = styled.div`
	background-color: ${purp};
	box-shadow: 0px 0px 200px inset ${outerBackgroundColor};
	display: flex;
	flex-direction: column;
	height: 70vh;
	width: 85%;
	margin: 0 auto;
	border-radius: 5px;
	color: white;
	font-weight: bold;

	.open-game {
		&-container {
			display: flex;
			flex-direction: row;
			text-align: center;
		}
		&-scores {
			display: flex;
			flex-direction: column;

			align-items: center;
			width: 100%;

			&-row {
				display: flex;
				flex-direction: row;
				justify-content: center;
				text-align: center;
				width: 85%;
			}
		}

		&-remaining {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;

			&-row {
				display: flex;
				flex-direction: row;

				justify-content: center;
				width: 85%;
			}
		}

		&-current {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
			&-row {
				display: flex;
				flex-direction: row;
				margin: 0 auto;
				text-align: left;
				max-width: 85%;
				/* height: 60px; */
			}
		}

		&-controls {
			display: flex;
			flex-direction: row;
			margin: 200px auto 20px auto;
			width: 100%;
			justify-content: center;

			button {
				width: 100px;
				height: 75px;
				margin: 1px;
				background-color: lime;
				border: none;
				border-radius: 5px;
				box-shadow: 0px 0px 10px inset ${purp};
				font-weight: bold;
			}

			&-col {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 33%;
				margin: 0 auto;
			}
		}
	}

	#next-button {
		width: 100%;
		height: 150px;
	}

	#current-trick {
		font-size: 32px;
		/* max-height: 40px; */
		/* margin-bottom: 20%; */
		background-color: rgba(255, 255, 255, 0.18);
	}
`;
