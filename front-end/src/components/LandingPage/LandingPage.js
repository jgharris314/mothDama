import React from "react";
import ReactPlayer from "react-player";

import { StyledLandingPage } from "./landing-pages.styles";

const LandingPage = () => {
	return (
		<StyledLandingPage>
			<div className="landing-page-header">
				<h1>mothDama</h1>
				<h2>Step in to the light</h2>
			</div>
			<div className="video-player">
				<div className="video-player-col">
					{/* i need a responsive width for the video. i feel if i can detect screen size, then link to mobile youtube instead */}
					<ReactPlayer
						url="https://www.youtube.com/watch?v=0Kt8mY64zcg"
						width="1280px"
						height="720px"
					/>
				</div>
			</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
