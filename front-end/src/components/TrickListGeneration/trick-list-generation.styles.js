import styled from "styled-components";

export const StyledTrickListGeneration = styled.div`
	margin: 0;
	max-height: 90vh;
	overflow: hidden;

	.options {
		display: flex;
		flex-direction: row;
		margin: 0 auto 5px auto;
		font-weight: bold;
		width: 95%;
		justify-content: center;
		align-items: center;

		button {
			border: none;
			height: 90px;
			box-shadow: 0px 0px 5px orange;
			font-weight: bold;
			font-size: 16px;
		}
		&-settings {
			background-color: rgba(119, 0, 166, 0.7);
			box-shadow: 0px 0px 5px lime;
			display: flex;
			flex-direction: column;
			width: 45%;
			border-radius: 20px;
			color: lime;
			margin: 10px auto 0px auto;
			padding-bottom: 10px;
			justify-content: center;

			select {
				width: 50%;
				margin: 0 auto;
			}
			p {
				padding: 0;
				margin: 0px;
			}
		}
	}

	.line-display {
		color: white;
		background-color: rgba(119, 0, 166, 0.7);
		height: 380px;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}

		p {
			font-size: 26px;
			font-weight: bold;
			/* color: white; */
			background-color: rgba(255, 255, 255, 0.18);
			border-radius: 5px;
			width: 90%;
			margin: 20px auto;
			padding: 2%;
			box-shadow: 0px 0px 5px black;
		}

		width: 90%;
		margin: 0 auto 5px auto;
		border-radius: 20px;
	}
`;
