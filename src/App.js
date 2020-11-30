import React, { useState, useEffect } from "react";
import "./App.css";
// import HomeHeader from "./Components/HomeHeader/HomeHeader.js";
import AddCityCard from "./Components/AddCityCard/AddCityCard.js";
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

			{/* <HomeHeader /> */}
			<AddCityCard
				listName={listName}
				setListName={setListName}
				listLocation={listLocation}
				setListlocation={setListlocation}
				updateLists={loadAllLists}
			/>
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
				<div id="map" className="map-container"></div>
			</div>
		</div>
	);
}

export default App;
