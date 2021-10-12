import styled from "styled-components";

export const StyledPlayOpenGame = styled.div`
	background-color: yellowgreen;
	display: flex;
	flex-direction: column;
	height: 90vh;
	/* justify-content: center; */

	.open-game {
		&-scores {
			display: flex;
			flex-direction: row;
			/* width: 100%; */
			justify-content: center;

			&-player {
				display: flex;
				flex-direction: column;
				margin: 0 auto;
				/* justify-content: space-around; */
				text-align: left;
			}
		}

		&-remaining {
			display: flex;
			flex-direction: row;
			justify-content: center;
			&-col {
				display: flex;
				flex-direction: column;
				margin: 0 auto;
				text-align: left;
			}
		}

		&-current {
			display: flex;
			flex-direction: row;

			&-col {
				display: flex;
				flex-direction: column;
				margin: 0 auto;
				text-align: left;
			}
		}

		&-controls {
			display: flex;
			flex-direction: row;
			margin: 0 auto;

			button {
				width: 100px;
			}
		}
	}
`;
