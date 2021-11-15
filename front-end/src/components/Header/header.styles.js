import styled from "styled-components";

export const StyledHeader = styled.div`
	width: 100%;
	justify-content: center;
	top: 0;
	background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
	background-size: contain;
	margin-bottom: 0px;

	h1 {
		font-size: 68px;
		color: lime;
		margin: 0px;
		padding: 0px;
	}

	h2 {
		font-size: 28px;
		margin: 0px;
		color: orange;
		padding: 0px;
	}

	select {
		height: 20px;
		box-shadow: 0px 0px 5px black;
		border: none;
		border-radius: 5px;
	}
`;
