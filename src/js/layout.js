import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Contact } from "./views/contact";
import { AddContact } from "./views/addContact";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="wrapper mx-auto">
			<BrowserRouter basename={basename}>
				<Routes>
					<Route exact path="/" element={<Contact />} />
					<Route exact path="/addcontact" element={<AddContact />} />
					<Route path="/edit/:index" element={<AddContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);