import React from "react";
import MiniList from "../miniList/miniList";
import {useDispatch, useSelector } from "react-redux";
import { deleteLists } from "../../Store/Actions";

const ListContainer = () => {
    
    const dispatch = useDispatch();

    const cities = useSelector((state) => state.main.cities);

    const deleteOneList = (index) => {
		dispatch(deleteLists(index));
    };
    
	return (
		<>
			{cities.map((city, index) => (
				<MiniList
					key={index}
					index={index}
					location={city.location}
					name={city.name}
					points={city.points}
					delete={deleteOneList}
				/>
			))}
		</>
	);
};

export default ListContainer;
