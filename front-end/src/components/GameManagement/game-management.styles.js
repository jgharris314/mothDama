import styled from "styled-components";

export const StyledGameManagement = styled.div`
	.game-modes {
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		width: 85%;
		margin: 0 auto 10px auto;
		justify-content: space-between;

		button {
			width: 25%;
			height: 30px;
			background-color: lime;
			box-shadow: 0px 0px 5px inset black, 0px 0px 5px black;
			border-radius: 5px;
			border: none;
			font-weight: bold;
			margin-top: 5px;
		}
	}
`;
