import React from "react";
import { StyledHeader } from "./header.styles";

const Header = ({
	headerMemo,

	styles,
	styleArray,
	setStyleIndex,
}) => {
	const styleSwitchOnClick = (event) => {
		setStyleIndex(event.target.value);
	};
	return (
		<StyledHeader style={styles ? styles.background : null}>
			<h1 style={styles ? styles.h1 : null}>mothDama</h1>
			<h2 style={styles ? styles.h2 : null}>{headerMemo}</h2>
			<select
				name="color_option"
				id="color_option"
				onChange={styleSwitchOnClick}
			>
				{styleArray.map((x, index) => (
					<option key={index} value={index}>{`Style ${
						index + 1
					}`}</option>
				))}
			</select>
		</StyledHeader>
	);
};

export default Header;
