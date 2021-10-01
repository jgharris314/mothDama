import React from "react";
import { StyledNavBar } from "./nav-bar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
	const navOptions = ["Home", "Shop", "Pretties", "Lines", "Games"];

	return (
		<StyledNavBar>
			<ul className="nav-bar-ul">
				{navOptions.map((option) => (
					<Link
						className="nav-bar-ul-item"
						to={`/${option.replace(/\s/g, "-").toLowerCase()}`}
						key={`/${option.toLowerCase()}`}
					>
						{option}
					</Link>
				))}
			</ul>
		</StyledNavBar>
	);
};

export default NavBar;
