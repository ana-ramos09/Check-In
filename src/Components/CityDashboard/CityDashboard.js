import React from "react";
import CityCard from "../CityCard/CityCard.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteLists } from "../../Store/Actions";
import { loadList } from "../../Store/Actions";

const CityDashboard = () => {
	const dispatch = useDispatch();

	const cities = useSelector((state) => state.main.cities);

	const deleteOneList = (index) => {
		dispatch(deleteLists(index));
	};
	
	const loadSelectedList = (city) => {
		dispatch(loadList(city));
	};

	return (
		<>
			{cities.map((city, index) => (
				<CityCard
					key={index}
					index={index}
					city={city}
					delete={deleteOneList}
					openList={loadSelectedList}
				/>
			))}
		</>
	);
};

export default CityDashboard;
