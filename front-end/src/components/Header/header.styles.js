import styled from "styled-components";
import headerBackground from "../../images/greenpurpTriangles.jpg";

export const StyledHeader = styled.div`
	width: 100%;
	justify-content: center;
	color: white;
	top: 0;

	max-height: 500px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
		url(${headerBackground});
	background-size: contain;
	margin-bottom: 15px;
	h1 {
		margin-bottom: 0;
		font-size: 72px;
		background: -webkit-linear-gradient(#93e506, lime);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 0px;
	}

	h2 {
		font-size: 32px;
		margin: 0px;
		background: -webkit-linear-gradient(#e5a506, orange);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		padding: 0;
	}
`;
