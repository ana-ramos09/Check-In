import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import AddList from "./Components/Add/AddList.js";
import { useDispatch } from "react-redux";
import { firestore } from "./firebaseUtils.js";
import { loadLists } from "./Store/Actions/index.js";
import { routes } from "./Routes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const dispatch = useDispatch();

	const [listName, setListName] = useState("Parques");
	const [listLocation, setListlocation] = useState("São Paulo");

	useEffect(() => {
		loadAllLists();
	}, []);

	const loadAllLists = () => {
		firestore
			.collection("lists")
			.get()
			.then((resp) => resp.docs.map((item) => item.data()))
			.then((citiesArray) => dispatch(loadLists(citiesArray)));
	};

	return (
		<div className="App">
			<Header />
			<AddList
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
								<Route exact path={route.path} component={route.component} key={index}/>
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
