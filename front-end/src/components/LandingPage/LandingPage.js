import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import { useMediaQuery } from "react-responsive";

import { StyledLandingPage } from "./landing-pages.styles";

const LandingPage = ({ setHeaderMemo, styles }) => {
	const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });

	document.title = "mothDama - Step in to the Light";
	setHeaderMemo("Step in to the Light");
	return (
		<StyledLandingPage style={styles ? styles : null}>
			<div className="video-player">
				<div className="video-player-col">
					{/* i need a responsive width for the video. i feel if i can detect screen size, then link to mobile youtube instead */}
					<ReactPlayer
						url="https://www.youtube.com/watch?v=0Kt8mY64zcg"
						width="95vw"
						height={isBigScreen ? "720px" : "500px"}
						controls
					/>
				</div>
			</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
