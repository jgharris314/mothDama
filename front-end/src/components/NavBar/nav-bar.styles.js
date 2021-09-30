import styled from "styled-components";
import { innerBackgroundColor, purp } from "../../App.variables";
export const StyledNavBar = styled.div`
	bottom: 0;
	width: 100%;
	background-color: ${innerBackgroundColor};
	box-shadow: 0px 0px 75px inset ${purp};
	position: fixed;

	.nav-bar-ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		min-height: 30px;
		justify-content: space-around;

		&-item {
			font-size: 14px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			color: orange;
			padding: 0;
			margin: 1%;
			:hover {
				color: lime;
				cursor: pointer;
			}
		}
	}
`;
