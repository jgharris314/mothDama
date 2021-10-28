import React from "react";
import Header from "../Header/Header";
import { StyledShop } from "./shop.styles";
const Shop = () => {
	return (
		<StyledShop>
			<Header headerMemo={"Give me all your money"} />
			<div className="shop">coming soon</div>
		</StyledShop>
	);
};

export default Shop;
