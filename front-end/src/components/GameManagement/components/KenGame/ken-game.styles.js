import styled from "styled-components";

export const StyledKenGame = styled.div`
	margin: 0 auto;
	background-color: rgba(119, 0, 166, 0.7);
	width: 90%;
	border-radius: 5px;
	padding: 2%;
	justify-content: center;

	.ken-game-form {
		display: flex;
		padding: 4%;
		border-radius: 5px;
		box-shadow: 0px 0px 5px black;
		flex-direction: column;
		align-items: center;
		textarea {
			display: flex;
			flex-direction: row;
			background-color: rgba(255, 255, 255, 0.1);
			box-shadow: 0px 0px 5px black;
			color: white;
			font-size: 24px;
			font-weight: bold;
			border: none;
			border-radius: 5px;
		}
		button {
			display: flex;
			flex-direction: row;
			margin-top: 10px;
			height: 50px;
			width: 100%;
			border: none;
			background-color: lime;
			font-weight: bold;
			box-shadow: 0px 0px 5px black;
			border-radius: 5px;
			align-items: center;
			justify-content: center;
		}
	}
`;
