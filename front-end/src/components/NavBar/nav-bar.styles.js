import styled from "styled-components";

export const StyledNavBar = styled.div`
	background-color: green;
	bottom: 0;
	width: 100%;
	/* bottom: 0; */
	position: fixed;

	.nav-bar-ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		min-height: 30px;
		justify-content: space-around;

		&-item {
			font-size: 18px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			:hover {
				color: yellow;
				cursor: pointer;
			}
		}
	}
`;
