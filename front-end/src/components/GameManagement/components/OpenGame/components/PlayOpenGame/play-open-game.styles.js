import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../../../../../App.variables";
export const StyledPlayOpenGame = styled.div`
	background-color: rgba(119, 0, 166, 0.7);
	/* box-shadow: 0px 0px 200px inset ${outerBackgroundColor}; */
	display: flex;
	flex-direction: column;
	height: 65vh;
	width: 90%;
	margin: 0 auto;
	border-radius: 5px;
	color: white;
	font-weight: bold;
	font-size: 26px;

	h3 {
		font-size: 32px;
	}
	.open-game {
		&-container {
			display: flex;
			flex-direction: row;
			text-align: center;
		}
		&-scores {
			display: flex;
			flex-direction: column;
			margin-bottom: 5px;
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
			margin-top: 5px;
			&-row {
				display: flex;
				flex-direction: row;
				margin: 0 auto;
				text-align: left;
				max-width: 85%;
				font-size: 36px;
			}
		}

		&-controls {
			display: flex;
			flex-direction: row;
			width: 90%;
			margin: 15px auto;

			button {
				width: 75px;
				height: 50px;
				margin: 1px;
				background-color: lime;
				border: none;
				border-radius: 5px;
				box-shadow: 0px 0px 5px inset ${purp}, 0px 0px 5px black;
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
		height: 100px;
		background-color: orange;
	}

	#current-trick {
		font-size: 28px;
		width: 85%;
		height: 150px;
		justify-content: center;
		/* margin-bottom: 20%; */
		border-radius: 5px;
		background-color: rgba(255, 255, 255, 0.18);
		padding: 2%;
		overflow: scroll;
		box-shadow: 0px 0px 5px black;
	}
`;
