import React, { useState } from "react";
import CityTasks from "../CityTasks/CityTasks";

const CityTasksContainer = () => {
	const [listName, setListName] = useState("Dogs");
	const [listLocation, setListLocation] = useState("Dogland");

	return (
		<CityTasks
			listName={listName}
			setListName={setListName}
			listLocation={listLocation}
			setListlocation={setListLocation}
		/>
	);
};

export default CityTasksContainer;
