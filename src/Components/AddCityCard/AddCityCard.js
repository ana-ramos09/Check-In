import React from "react";
import "./style.css";
import { createList } from "../../firebaseFuncs.js";

const AddCityCard = (props) => {
	const inputNameHandler = (e) => {
		props.setListName(e.target.value);
	};

	const inputLocationHandler = (e) => {
		props.setListlocation(e.target.value);
	};

	const callFunctions = () => {
		callCreateList();
		props.updateLists();
	};

	const callCreateList = () => {
		createList(props.listName, props.listLocation);
	};

	return (
		<div className="add-city-card-container">
			<br></br>
			<p>Create a New List</p>
			<div className="create-city-card-container">
				<div className="new-city-card">
					<input
						className="city-card-name"
						onChange={inputNameHandler}
						placeholder="Name"
					></input>
					<input
						className="city-card-location"
						onChange={inputLocationHandler}
						placeholder="City"
					></input>
				</div>
				<div className="button-container">
					<button onClick={callFunctions} title="Create a New List"></button>
				</div>
			</div>
		</div>
	);
};

export default AddCityCard;
