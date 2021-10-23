import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { getCLS, getFID, getLCP } from "web-vitals";
function sendToGoogleAnalytics({ name, delta, value, id }) {
	// Assumes the global `gtag()` function exists, see:
	// https://developers.google.com/analytics/devguides/collection/ga4
	gtag("event", name, {
		// Built-in params:
		value: delta, // Use `delta` so the value can be summed.
		// Custom params:
		metric_id: id, // Needed to aggregate events.
		metric_value: value, // Optional.
		metric_delta: delta, // Optional.

		// OPTIONAL: any additional params or debug info here.
		// See: https://web.dev/debug-web-vitals-in-the-field/
		// metric_rating: 'good' | 'ni' | 'poor',
		// debug_info: '...',
		// ...
	});
}

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(sendToGoogleAnalytics);

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);
