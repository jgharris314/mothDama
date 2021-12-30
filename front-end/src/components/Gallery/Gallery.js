import React, { useState } from "react";
import { StyledGallery } from "./gallery.styles";

import img1 from "./galleryimg/greenpurptriangles.jpg";
import img2 from "./galleryimg/short.jpg";
import img3 from "./galleryimg/sundial.jpg";
const Gallery = ({ setHeaderMemo, styles }) => {
	const [count, setCount] = useState(0);
	const imgArray = [img1, img2, img3];

	const handleNextImg = () => {
		if (count < imgArray.length - 1) {
			setCount(count + 1);
		} else {
			setCount(0);
		}
	};

	const handlePrevImg = () => {
		if (count === 0) {
			setCount(imgArray.length - 1);
		} else {
			setCount(count - 1);
		}
	};
	document.title = "mothDama - Pretties";
	setHeaderMemo("1000 words");
	return (
		<StyledGallery>
			<div className="gallery" style={styles ? styles.background : null}>
				{/* <div
					className="gallery-img"
					style={{
						objectFit: "contain",
						backgroundRepeat: "no-repeat",
						background: `url(${imgArray[count]})`,
						backgroundPosition: "center",
					}}
				></div> */}
				<img src={imgArray[count]} alt="filler" />
				<br />

				<button
					className="prev"
					style={styles ? styles.prevBtn : null}
					onClick={() => handlePrevImg()}
				>
					Prev
				</button>
				<button
					className="next"
					style={styles ? styles.nextBtn : null}
					onClick={() => handleNextImg()}
				>
					Next
				</button>
			</div>
		</StyledGallery>
	);
};

export default Gallery;
