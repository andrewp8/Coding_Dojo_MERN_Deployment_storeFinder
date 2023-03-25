import React from "react";
import tanjiro from "../images/tanjiro.png";

const Navbar = () => {
	return (
		<div className="navBar">
			<h1>Store Finder</h1>
			<img src={tanjiro} alt="tanjiro" />
		</div>
	);
};

export default Navbar;
