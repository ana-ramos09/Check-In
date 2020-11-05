import React from "react";
import "./style.css";

const MiniList = (props) => {
	return (
		<div className="miniList-container">
			<div className="miniList-header">
				<input value={props.title} placeholder="Nome da Lista"></input>
				<span onClick={props.options} title="Options"></span>
			</div>
			<div className="miniList-main">
				<span></span>
				<p>{props.location}</p>
			</div>
			<div className="miniList-footer">
				<span></span>
				<p value={props.points.length}>3/5 done!</p>
			</div>
		</div>
	);
};

export default MiniList;
