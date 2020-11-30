import React from "react";
import "./style.css";
import { TextField, Checkbox, Button, DeleteSVGIcon } from "react-md";

const Task = (props) => {

	console.log(Checkbox);

	return (
		<div class="tasks-container">
			<div className="checklist-container">
				<Checkbox
					checked={props.visited}
					onChange={(e) =>
						props.onUpdate(props.index, e.target.checked, props.description)
					}
					title='Mark as done!'
				></Checkbox>
				<TextField
					className="input-task"
					themeType="outline"
					value={props.description}
					onChange={(e) =>
						props.onUpdate(props.index, props.visited, e.target.value)
					}
				></TextField>
			</div>
			<div className="button-container">
				<Button
					id="delete-task"
					buttonType="icon"
					theme="error"
					className="button-delete-task"
					themeType="flat"
					onClick={() => props.onDelete(props.index)}
					title="Delete this task"
				>
					<DeleteSVGIcon />
				</Button>
			</div>
		</div>
	);
};

export default Task;
