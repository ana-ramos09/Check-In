import React from "react";
import { useState } from "react";
import "./style.css";
import { createList } from "../../firebaseFuncs.js";
import { ExpansionPanel, TextField, Button, FontIcon } from "react-md";

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

	const [expanded, setExpanded] = useState(false);

	return (
		<div className="expansion-panel-container">
			<ExpansionPanel
				header="Create a List"
				id="city-card-creation"
				className="expansion-panel"
				expanded={expanded}
				onExpandClick={() => setExpanded(!expanded)}
			>
				<div className="add-city-card-container">
					<div className="textfield-container">
						<TextField
							id="new-city-card-name"
							label="Name"
							onChange={inputNameHandler}
						></TextField>

						<TextField
							id="new-city-card-location"
							label="City"
							onChange={inputLocationHandler}
						></TextField>
					</div>
					<div className="button-container">
						<Button
							id="add-city-card-button"
							buttonType="icon"
							theme="warning"
							themeType="outline"	
							onClick={callFunctions}
							title="Add a List!"
						>
							<FontIcon>add</FontIcon>
						</Button>
					</div>
				</div>
			</ExpansionPanel>
		</div>
	);
};

export default AddCityCard;
