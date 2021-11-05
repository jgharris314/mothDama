import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Gallery/Gallery";
import GameManagement from "./components/GameManagement/GameManagement";
import TrickListGeneration from "./components/TrickListGeneration/TrickListGeneration";
import Shop from "./components/Shop/Shop";
import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";
import { colorStyles, defaultStyle } from "./colorStyles";
import Header from "./components/Header/Header";
function App() {
	const TRACKING_ID = "G-KFRY691PSC";
	ReactGA.initialize(TRACKING_ID);

	//change color scheme
	const [style, setStyle] = useState(defaultStyle);
	const styleArray = [defaultStyle, ...colorStyles];
	const [styleIndex, setStyleIndex] = useState(0);
	const changeColor = () => {
		if (styleIndex === styleArray.length - 1) {
			setStyleIndex(0);
		} else {
			setStyleIndex(styleIndex + 1);
		}
	};
	useEffect(() => {
		setStyle(styleArray[styleIndex]);
	}, [styleIndex]);
	//header memo
	const [headerMemo, setHeaderMemo] = useState("Step in to the Light");
	return (
		<div className="App">
			<Header
				headerMemo={headerMemo}
				changeColor={changeColor}
				setStyleIndex={setStyleIndex}
				styleIndex={styleIndex}
				styleArray={styleArray}
				styles={style.header}
				setStyle={setStyle}
			/>
			<NavBar styles={style.navBar} />

			<Switch>
				<Route exact={true} path="/">
					<Redirect to={"/home"} />
				</Route>
				<Route path="/home" exact>
					<LandingPage
						setHeaderMemo={setHeaderMemo}
						styles={style.landingPage}
					/>
				</Route>
				<Route path="/pretties" exact>
					<Gallery
						setHeaderMemo={setHeaderMemo}
						styles={style.gallery}
					/>
				</Route>
				<Route path="/games" exact>
					<GameManagement
						setHeaderMemo={setHeaderMemo}
						styles={style.games}
					/>
				</Route>
				<Route path="/lines" exact>
					<TrickListGeneration
						setHeaderMemo={setHeaderMemo}
						styles={style.trickGen}
					/>
				</Route>
				<Route path="/shop" exact>
					<Shop styles={style.shop} setHeaderMemo={setHeaderMemo} />
				</Route>
			</Switch>

			<RouteChangeTracker />
		</div>
	);
}

export default App;
