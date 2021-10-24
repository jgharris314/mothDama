import styled from "styled-components";
import { purp, outerBackgroundColor } from "../../App.variables";
export const StyledTrickListGeneration = styled.div`
	margin: 0;
	max-height: 90vh;
	overflow: hidden;

	button {
		width: 50%;
		height: 70px;
		margin: 5px auto 100px auto;
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
			background-color: rgba(119, 0, 166, 0.7);
			/* box-shadow: 0px 0px 100px inset ${outerBackgroundColor}; */
			display: flex;
			flex-direction: column;
			width: 90%;
			border-radius: 20px;
			color: lime;
			margin: 0 auto;
			padding-bottom: 10px;

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
		background-color: rgba(119, 0, 166, 0.7);
		/* box-shadow: 0px 0px 200px inset ${outerBackgroundColor}; */

		height: 325px;

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
			width: 90%;
			margin: 20px auto;
			padding: 2%;
		}

		width: 90%;
		margin: 0 auto 5px auto;
		border-radius: 20px;
	}
`;
