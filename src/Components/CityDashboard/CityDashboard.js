import React from "react";
import CityCard from "../CityCard/CityCard.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteLists } from "../../Store/Actions";

const CityDashboard = () => {
	const dispatch = useDispatch();

	const cities = useSelector((state) => state.main.cities);

	const deleteOneList = (index) => {
		dispatch(deleteLists(index));
	};

	return (
		<>
			{cities.map((city, index) => (
				<CityCard
					key={index}
					index={index}
					location={city.location}
					name={city.name}
					tasks={city.tasks}
					delete={deleteOneList}
				/>
			))}
		</>
	);
};

export default CityDashboard;
