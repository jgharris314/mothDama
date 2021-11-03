import React from "react";

import { StyledShop } from "./shop.styles";
const Shop = ({ setHeaderMemo, styles }) => {
	setHeaderMemo("Give me your money");
	return (
		<StyledShop>
			<div className="shop" style={styles}>
				coming soon
			</div>
		</StyledShop>
	);
};

export default Shop;
