import styled from "styled-components";

export const StyledTrickListGeneration = styled.div`
	background-color: orange;
	margin: 0;
	/* z-index: 99; */
	/* overflow: scroll; */
	min-height: 100vh;
	overflow: hidden;

	button {
		width: 50%;
		height: 70px;
		margin: 1% auto;
		font-size: 16px;
		color: lime;
		background-color: purple;
		border: none;
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
			border: 5px solid black;
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
		background-color: white;
		min-height: 400px;
		max-height: 400px;
		overflow-y: scroll;

		p {
			font-size: 26px;
		}

		width: 85%;
		margin: 1% auto;
		border-radius: 20px;
		border: 5px solid black;
	}

	.line-header {
		width: 100%;
		background-color: gray;
		margin: 0 auto 20px auto;
		font-size: 24px;

		h1 {
			margin: 0 auto;
		}
	}
`;
