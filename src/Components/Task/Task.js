import React from "react";
import "./style.css";

const Task = (props) => {
	return (
		<div className="task-container">
			<div className="checklist-container">
				<input
					className="check"
					type="checkbox"
					checked={props.visited}
					onChange={(e) =>
						props.onUpdate(props.index, e.target.checked, props.description)
					}
				></input>
				<input
					className="task"
					type="text"
					value={props.description}
					onChange={(e) =>
						props.onUpdate(props.index, props.visited, e.target.value)
					}
				></input>
			</div>
			<div className="button-container-task">
				<button
					title="Delete this task"
					onClick={() => props.onDelete(props.index)}
				></button>
			</div>
		</div>
	);
};

export default Task;
