import React, { useState } from "react";
import List from "../List/List";

const ListContainer = () => {
    
    const [listName, setListName] = useState("Dogs");
    const [listLocation, setListlocation] = useState("Dogland");
    
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
