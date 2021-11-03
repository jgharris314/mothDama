import { outerBackgroundColor, translucentPurp } from "./App.variables";

export const colorStyles = [
	//style 1
	{
		header: {
			h1: {
				color: "blue",
			},
			h2: { color: "yellow" },
			btn: { "background-color": "pink" },
		},
		landingPage: {
			"background-color": "pink",
		},
		shop: {
			"background-color": "pink",
		},
		gallery: {
			background: { "background-color": "pink" },
			nextBtn: { "background-color": "blue" },
			prevBtn: { "background-color": "yellow" },
		},
		trickGen: {
			settings: { "background-color": "pink", color: "yellow" },
			line: { "background-color": "pink", color: "black" },
			btn: { "background-color": "pink", color: "yellow" },
		},

		games: {
			gameLandingPage: { btn: { "background-color": "pink" } },
			open: {
				play: {
					background: { "background-color": "blue" },
					nextBtn: { "background-color": "yellow" },
					otherButtons: { "background-color": "pink" },
				},
				prep: {
					background: { "background-color": "blue" },
					presets: { "background-color": "pink" },
					btn: { "background-color": "yellow" },
				},
			},
			ken: {
				background: { "background-color": "blue" },
				btn: { "background-color": "yellow" },
				undoBtn: { "background-color": "pink" },
			},
			freeStyle: {
				background: { "background-color": "blue" },
				buttons: {
					btn: { "background-color": "yellow" },
					undoBtn: { "background-color": "pink" },
				},
				timerBorder: { border: "3px solid pink" },
				timerProgress: { backgroundColor: "pink" },
			},
		},
		navBar: {
			background: { "background-color": "blue" },
			item: {
				"background-color": "pink",
				color: "black",
				"box-shadow": "0px 0px 5px inset black",
			},
		},
	},
];

export const defaultStyle = {
	header: {
		h1: {
			color: "lime",
		},
		h2: { color: "orange" },
		btn: { "background-color": "lime" },
	},
	landingPage: {
		"background-color": outerBackgroundColor,
	},
	shop: {
		"background-color": translucentPurp,
	},
	gallery: {
		background: { "background-color": translucentPurp },
		nextBtn: { "background-color": "lime" },
		prevBtn: { "background-color": "orange" },
	},
	games: {
		gameLandingPage: { btn: { "background-color": "lime" } },
		open: { play: {}, prep: { background: {} } },
		ken: { play: {}, prep: {} },
		freeStyle: {},
	},
};
