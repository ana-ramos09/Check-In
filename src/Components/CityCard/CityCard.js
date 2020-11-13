import React from "react";
import "./style.css";
import { deleteListFb } from "../../firebaseFuncs.js";

const CityCard = (props) => {
	const deleteList = () => {
		props.delete(props.index);
		deleteListFb(props.name, props.location);
	};

	const countTotalItems = () => {
		let visited = 0;
		let notVisited = 0;
		if (props.tasks !== undefined) {
			props.tasks.forEach((element) => {
				if (element.visited === true) {
					visited++;
				} else {
					notVisited++;
				}
			});
		}
		const msg = `${visited}/${notVisited + visited} done!`;
		const total = notVisited + visited;
		return [msg, total];
	};

	return (
		<div className="city-card-container">
			<div className="city-card-header">
				<input value={props.name} placeholder="List`s Name"></input>
				<span onClick={deleteList} title="Delete"></span>
			</div>
			<div className="city-card-main">
				<span></span>
				<p>{props.location}</p>
				{props.comp}
			</div>
			<div className="city-card-footer">
				<span title="Open List"></span>
				<p className="footer" value={countTotalItems()[1]} title="Open List">
					{countTotalItems()[0]}
				</p>
			</div>
		</div>
	);
};

export default CityCard;
