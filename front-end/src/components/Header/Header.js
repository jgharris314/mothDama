import React from "react";
import { StyledHeader } from "./header.styles";

const Header = ({ headerMemo, changeColor, styles }) => {
	return (
		<StyledHeader>
			<h1 style={styles ? styles.h1 : null}>mothDama</h1>
			<h2 style={styles ? styles.h2 : null}>{headerMemo}</h2>
			<button
				className="colorBtn"
				onClick={() => changeColor()}
				style={styles.btn}
			>
				Color Switch
			</button>
		</StyledHeader>
	);
};

export default Header;
