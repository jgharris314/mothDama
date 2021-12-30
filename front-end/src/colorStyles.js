export const colorStyles = [
	//style 1
	{
		header: {
			background: { "background-color": "black" },
			h1: {
				color: "yellow",
			},
			h2: { color: "pink" },
			btn: { "background-color": "pink" },
		},
		landingPage: {
			"background-color": "black",
		},
		shop: {
			"background-color": "pink",
		},
		gallery: {
			background: { "background-color": "black" },
			nextBtn: { "background-color": "pink" },
			prevBtn: { "background-color": "yellow" },
		},
		trickGen: {
			settings: {
				"background-color": "black",
				color: "yellow",
				"box-shadow": "0px 0px 5px pink",
			},
			line: { "background-color": "black", color: "white" },
			btn: {
				"background-color": "black",
				color: "yellow",
				"box-shadow": "0px 0px 5px pink",
			},
		},

		games: {
			gameLandingPage: { btn: { "background-color": "pink" } },
			open: {
				play: {
					background: { "background-color": "black" },
					nextBtn: { "background-color": "yellow" },
					otherButtons: { "background-color": "pink" },
				},
				prep: {
					background: { "background-color": "black" },
					presets: { "background-color": "pink" },
					btn: { "background-color": "yellow" },
				},
			},
			ken: {
				background: { "background-color": "black" },
				btn: { "background-color": "yellow" },
				undoBtn: { "background-color": "pink" },
			},
			freeStyle: {
				background: { "background-color": "black" },
				buttons: {
					btn: { "background-color": "yellow" },
					undoBtn: { "background-color": "pink" },
				},
				timerBorder: { border: "3px solid pink" },
				timerProgress: { backgroundColor: "pink" },
			},
		},
		navBar: {
			background: { "background-color": "black" },
			item: {
				"background-color": "pink",
				color: "black",
				"box-shadow": "0px 0px 5px inset black",
			},
		},
	},
	//style 2
	{
		header: {
			background: { "background-color": "black" },
			h1: {
				color: "cyan",
			},
			h2: { color: "red" },
			btn: { "background-color": "cyan" },
		},
		landingPage: {
			"background-color": "black",
		},
		shop: {
			"background-color": "black",
		},
		gallery: {
			background: { "background-color": "black" },
			nextBtn: { "background-color": "cyan" },
			prevBtn: { "background-color": "grey" },
		},
		trickGen: {
			settings: {
				"background-color": "black",
				color: "cyan",
				"box-shadow": "0px 0px 5px grey",
			},
			line: { "background-color": "black", color: "white" },
			btn: {
				"background-color": "black",
				color: "cyan",
				"box-shadow": "0px 0px 5px grey",
			},
		},

		games: {
			gameLandingPage: { btn: { "background-color": "cyan" } },
			open: {
				play: {
					background: { "background-color": "black" },
					nextBtn: { "background-color": "cyan" },
					otherButtons: {
						"background-color": "red",
						"box-shadow": "0px 0px 5px inset black",
					},
				},
				prep: {
					background: { "background-color": "black" },
					presets: { "background-color": "cyan" },
					btn: { "background-color": "cyan" },
				},
			},
			ken: {
				background: { "background-color": "black" },
				btn: { "background-color": "cyan" },
				undoBtn: { "background-color": "red" },
			},
			freeStyle: {
				background: { "background-color": "black" },
				buttons: {
					btn: { "background-color": "cyan" },
					undoBtn: { "background-color": "red" },
				},
				timerBorder: { border: "3px solid cyan" },
				timerProgress: { backgroundColor: "cyan" },
			},
		},
		navBar: {
			background: { "background-color": "black" },
			item: {
				"background-color": "cyan",
				color: "black",
				"box-shadow": "0px 0px 5px inset black",
			},
		},
	},
];

export const defaultStyle = {
	header: {
		background: {},
		h1: {},
		h2: {},
		btn: {},
	},
	landingPage: {},
	shop: {},
	gallery: {},
	games: {
		gameLandingPage: { btn: { "background-color": "" } },
		open: { play: {}, prep: { background: {} } },
		ken: { play: {}, prep: {} },
		freeStyle: {},
	},
};
