import React from "react";
import ReactPlayer from "react-player";
import Header from "../Header/Header";
import { useMediaQuery } from "react-responsive";

import { StyledLandingPage } from "./landing-pages.styles";

const LandingPage = () => {
	const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	document.title = "mothDama - Step in to the Light";
	return (
		<StyledLandingPage>
			{(isBigScreen || isPortrait) && (
				<Header headerMemo={"Step in to the light"} />
			)}
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
