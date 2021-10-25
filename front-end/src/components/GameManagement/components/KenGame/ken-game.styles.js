import styled from "styled-components";
// import { purp } from "../../../../App.variables";
export const StyledKenGame = styled.div`
	margin: 0 auto;
	background-color: rgba(119, 0, 166, 0.7);
	width: 90%;
	border-radius: 5px;
	padding: 2%;
	justify-content: center;

	.ken-game-form {
		padding: 2%;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;
		textarea {
			background-color: rgba(255, 255, 255, 0.1);
			color: white;
			font-size: 24px;
			font-weight: bold;
			border: none;
			border-radius: 5px;
		}
		button {
			margin-top: 10px;
			height: 50px;
			width: 80px;
			border: none;
			background-color: lime;
			font-weight: bold;
			box-shadow: 0px 0px 5px orange;
			border-radius: 5px;
		}
	}
`;
