import React, { useState } from "react";
import List from "../List/List";

const ListContainer = () => {
    
    const [listName, setListName] = useState("Parques");
    const [listLocation, setListlocation] = useState("São Paulo");
    
    return (
		<List
			listName={listName}
			setListName={setListName}
			listLocation={listLocation}
			setListlocation={setListlocation}
		/>
	);
};

export default ListContainer;
