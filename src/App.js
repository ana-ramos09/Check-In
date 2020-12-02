import React, { useState, useEffect } from "react";
import "./App.css";
import AddCityCard from "./Components/AddCityCard/AddCityCard.js";
import Map from "./Components/Map/Map.js";
import AddLayers from "./Components/ToggleMapLayers/ToggleMapLayers.js";
import { useDispatch } from "react-redux";
import { firestore } from "./firebaseUtils.js";
import { loadLists } from "./Store/Actions/index.js";
import { routes } from "./Routes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, AppBarNav, AppBarTitle, MenuSVGIcon } from "react-md";

function App() {
	const dispatch = useDispatch();

	const [listName, setListName] = useState("Dogs");
	const [listLocation, setListlocation] = useState("Dogland");

	useEffect(() => {
		loadAllLists();
	}, []);

	const loadAllLists = () => {
		firestore
			.collection("lists")
			.get()
			.then((resp) =>
				resp.docs.map((item) => ({ ...item.data(), id: item.id }))
			)
			.then((citiesArray) => dispatch(loadLists(citiesArray)));
	};

	return (
		<div className="App">
			<AppBar
				className="AppBar-header">
				<AppBarNav>
					<MenuSVGIcon></MenuSVGIcon>	
				</AppBarNav>
				<AppBarTitle>Check In</AppBarTitle>
			</AppBar>

			<div className="options-container">
				<AddCityCard
					listName={listName}
					setListName={setListName}
					listLocation={listLocation}
					setListlocation={setListlocation}
					updateLists={loadAllLists}
				/>
				<AddLayers></AddLayers>
			</div>
			<div className="main-container">
				<Router>
					<div className="lists-container">
						<Switch>
							{routes.map((route, index) => (
								<Route
									exact
									path={route.path}
									component={route.component}
									key={index}
								/>
							))}
						</Switch>
					</div>
				</Router>
				<Map></Map>
			</div>
		</div>
	);
}

export default App;
