import styled from "styled-components";

export const StyledPlayKenGame = styled.div`
	width: 95%;
	margin: 0 auto;
	border-radius: 5px;
	box-shadow: 0px 0px 5px black;
	display: flex;
	flex-direction: column;
	height: 95%;

	button {
		display: flex;
		flex-direction: row;
		height: 50px;
		width: 45%;
		border: none;
		background-color: lime;
		font-weight: bold;
		box-shadow: 0px 0px 5px black;
		border-radius: 5px;
		align-items: center;
		justify-content: center;
		margin: 5px auto;
	}

	.game-string-col {
		display: flex;
		flex-direction: column;
		margin: 5px auto;
		background-color: rgba(255, 255, 255, 0.18);
		font-weight: bold;
		color: white;
		width: 95%;
		align-items: center;
		font-size: 28px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px black;
		&-details {
			display: flex;
			flex-direction: row;
		}
	}

	.players-section {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		margin: 0 auto;
		&-player {
			display: flex;
			flex-direction: column;
			border-radius: 5px;
			background-color: rgba(255, 255, 255, 0.18);
			margin: 5px auto;
			width: 45%;
			box-shadow: 0px 0px 5px black;
			&-details {
				display: flex;
				flex-direction: row;

				font-size: 16px;
				color: white;
				font-weight: bold;
				min-height: 20px;
				justify-content: center;
			}
		}
	}

	.last {
		background-color: orange;
	}

	.button-section {
		display: flex;
		flex-direction: column;
	}

	.increasing-buttons {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;

		button {
			height: 100px;
			margin-top: 10px;
		}
	}

	.restoring-buttons {
		display: flex;
		flex-direction: row;
		width: 100%;

		button {
			height: 30px;
			background-color: orange;
			margin: 4px auto;
		}
	}
`;
