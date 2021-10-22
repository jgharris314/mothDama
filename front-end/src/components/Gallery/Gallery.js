import React from "react";
import { StyledGallery } from "./gallery.styles";
import Header from "../Header/Header";
const Gallery = () => {
	return (
		<StyledGallery>
			<Header headerMemo={"Words"} />
		</StyledGallery>
	);
};

export default Gallery;
