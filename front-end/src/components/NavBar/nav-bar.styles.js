import styled from "styled-components";
import { outerBackgroundColor, purp } from "../../App.variables";
export const StyledNavBar = styled.div`
	bottom: 0;
	width: 100%;
	background-color: ${purp};
	box-shadow: 0px 0px 200px inset ${outerBackgroundColor};
	position: fixed;

	.nav-bar-ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		min-height: 30px;
		justify-content: space-around;
		padding-left: 0px;

		&-item {
			font-size: 14px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			color: lime;
			font-weight: bold;
			padding: 8px;
			/* margin: 1%; */
			box-shadow: 0px 0px 3px orange;
			border-radius: 5px;

			:hover {
				color: lime;
				cursor: pointer;
			}
		}
	}
`;
