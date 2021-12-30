import styled from "styled-components";
import { translucentPurp } from "../../App.variables";

export const StyledGallery = styled.div`
	margin: 0;

	.gallery {
		background-color: ${translucentPurp};
		border-radius: 5px;
		box-shadow: 0px 0px 5px black;
		width: 95%;
		margin: 0 auto;
		padding-top: 2%;
		padding-bottom: 2%;

		&-img {
			min-height: 250px;
			width: 95%;
			margin: 0 auto;
			box-shadow: 0px 0px 5px black;
		}

		img {
			object-fit: contain;
			object-position: center;
			box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
			border-radius: 5px;
			max-height: 300px;
			max-width: 90%;
		}

		@media screen and (min-width: 720px) {
			img {
				max-height: 400px;
			}
		}

		button {
			width: 75px;
			height: 50px;
			margin: 10px 5px;
			border: none;
			border-radius: 5px;
			box-shadow: 0px 0px 5px inset black, 0px 0px 5px black;
			font-weight: bold;
		}

		.next {
			background-color: lime;
		}

		.prev {
			background-color: orange;
		}
	}
`;
