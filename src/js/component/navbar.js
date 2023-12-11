import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">LA MEJOR AGENDA</span>
			</Link>
			<div className="ml-auto">
				<Link className="addContactButton" to="/form">
					<button className="btn btn-success">Add new Contact</button>
				</Link>
			</div>
		</nav>
	);
};