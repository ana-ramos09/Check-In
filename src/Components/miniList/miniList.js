import React from "react";
import "./style.css";
import { deleteListFb } from "../../firebaseFuncs.js";

const MiniList = (props) => {
    
    const deleteList = () => {
        props.delete(props.index);
        deleteListFb(props.name, props.location)
    }

	const countDoneItems = () => {
		let done =0;
		let notDone = 0;
		if (props.points === undefined) {
			done = 0;
			notDone = 0;
			console.log(done)
		} else {
			props.points.forEach(element => {	
				console.log(element)		
				if (element.done === true) {
					done++;
				} else {
					notDone++;
				}
			})
		}		
		return `   ${done}/${notDone} done!`
	}

	return (
		<div className="miniList-container">
			<div className="miniList-header">
				<input value={props.name} placeholder="Nome da Lista"></input>
				<span onClick={ deleteList } title="Delete"></span>
			</div>
			<div className="miniList-main">
				<span></span>
				<p>{props.location}</p>
                {props.comp}
			</div>
			<div className="miniList-footer">
				<span></span>
	<p value={props.points.length}>{ countDoneItems() }</p>
			</div>
		</div>
	);
};

export default MiniList;
