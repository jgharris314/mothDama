import React, { useState } from "react";
import { StyledGallery } from "./gallery.styles";
import Header from "../Header/Header";
import img1 from "./galleryimg/greenpurptriangles.jpg";
import img2 from "./galleryimg/short.jpg";
import img3 from "./galleryimg/sundial.jpg";
const Gallery = () => {
	const [count, setCount] = useState(0);
	const imgArray = [img1, img2, img3];

	const handleNextImg = () => {
		if (count < imgArray.length - 1) {
			setCount(count + 1);
		} else {
			setCount(0);
		}
	};
	document.title = "mothDama - Pretties";
	return (
		<StyledGallery>
			<Header headerMemo={"1000 words"} />
			<div className="gallery">
				<div
					className="gallery-img"
					style={{
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						background: `url(${imgArray[count]})`,
						backgroundPosition: "center",
					}}
				></div>
				<div className="gallery-list">
					{imgArray.map((img, index) => {
						return (
							<div
								className="gallery-list-item"
								onClick={() => setCount(index)}
							>
								{index}
							</div>
						);
					})}
				</div>
				<button onClick={() => handleNextImg(count)}>Next</button>
			</div>
		</StyledGallery>
	);
};

export default Gallery;
