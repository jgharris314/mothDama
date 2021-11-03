import styled from "styled-components";
import headerBackground from "../../images/greenpurpTriangles.jpg";

export const StyledHeader = styled.div`
	width: 100%;
	justify-content: center;
	top: 0;
	/* max-height: 150px; */
	background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
		url(${headerBackground});
	background-size: contain;
	margin-bottom: 0px;
	/* overflow: hidden; */
	h1 {
		font-size: 68px;
		color: lime;
		margin: 0px;
		padding: 0px;
	}

	h2 {
		font-size: 32px;
		margin: 0px;
		color: orange;
		padding: 0px;
	}

	.colorBtn {
		border: none;

		box-shadow: 0px 0px 5px inset black, 0px 0px 5px black;
		font-weight: bold;
		font-size: 14px;
		background-color: lime;
		border-radius: 5px;
		margin-bottom: 5px;
	}
`;
