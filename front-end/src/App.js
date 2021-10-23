import React from "react";
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
function App() {
	const TRACKING_ID = "G-KFRY691PSC";
	ReactGA.initialize(TRACKING_ID);
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact={true} path="/">
					<Redirect to={"/home"} />
				</Route>
				<Route path="/home" exact>
					<LandingPage />
				</Route>
				<Route path="/pretties" exact>
					<Gallery />
				</Route>
				<Route path="/games" exact>
					<GameManagement />
				</Route>
				<Route path="/lines" exact>
					<TrickListGeneration />
				</Route>
				<Route path="/shop" exact>
					<Shop />
				</Route>
			</Switch>
			<RouteChangeTracker />
		</div>
	);
}

export default App;
