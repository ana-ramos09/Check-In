import React, { useState } from "react";
import CityTasks from "../CityTasks/CityTasks";

const CityTasksContainer = () => {

	const [listName, setListName] = useState("Compras");
	const [listLocation, setListLocation] = useState("Goiânia");

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
