import React from "react";
import "./style.css";
import { deleteListFb } from "../../firebaseFuncs.js";
import { Link } from "react-router-dom";

const MiniList = (props) => {
    
    const deleteList = () => {
        props.delete(props.index);
        deleteListFb(props.name, props.location)
    }

	const countTotalItems = () => {
		let done =0;
		let notDone = 0;
		if (props.points !== undefined) {
			props.points.forEach(element => {		
				if (element.done === true) {
					done++;
				} else {
					notDone++;
				}
			})
		}
		const msg = `${done}/${notDone + done} done!`;
		const total = notDone + done;	
		return [msg, total]
		// complete: msg,
		// total: total
		
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
				<span title="Open List"></span>
				<p className="footer" value={countTotalItems()[1]} title="Open List">{ countTotalItems()[0] }</p>
					{/* <div onClick={props.navegation}></div> */}
			</div>
		</div>
	);
}

export default MiniList;
