import React from "react";
import "./style.css";
import { deleteListFb } from "../../firebaseFuncs.js";
import { Link } from "react-router-dom";

const CityCard = (props) => {
	const deleteList = () => {
		props.delete(props.index);
		deleteListFb(props.city.name, props.city.location);
	};

	const countTotalItems = () => {
		let visited = 0;
		let notVisited = 0;
		if (props.city.tasks !== undefined) {
			props.city.tasks.forEach((element) => {
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

	const clickToOpen = () => {
		props.openList(props.city);
	}

	return (
		<div className="city-card-container">
			<div className="city-card-header">
				<input value={props.city.name} placeholder="List`s Name"></input>
				<span onClick={deleteList} title="Delete"></span>
			</div>
			<div className="city-card-main">
				<span></span>
				<p>{props.city.location}</p>
			</div>
			<div className="city-card-footer">
				<span title="Open List"></span>
				<Link to="/list">
					<p onClick={clickToOpen} className="footer" value={countTotalItems()[1]} title="Open List">
						{countTotalItems()[0]}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default CityCard;
