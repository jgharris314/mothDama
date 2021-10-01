import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Gallery/Gallery";
import GameManagement from "./components/GameManagement/GameManagement";
import TrickListGeneration from "./components/TrickListGeneration/TrickListGeneration";
import Shop from "./components/Shop/Shop";

function App() {
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
		</div>
	);
}

export default App;
