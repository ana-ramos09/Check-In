import React from "react";
import "./style.css";
import Task from "../Task/Task.js";
import { saveList } from "../../firebaseFuncs.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, addTask, editTask } from "../../Store/Actions";
import { Link } from "react-router-dom";

const CityTasks = (props) => {
	const dispatch = useDispatch();

	const cityDetail = useSelector((state) => state.app.cityDetail);

	const onUpdate = (index, visited, description) => {
		dispatch(
			editTask({ index: index, visited: visited, description: description })
		);
	};

	const onDelete = (index) => {
		dispatch(deleteTask(index));
	};

	const addPoint = () => {
		dispatch(addTask());
	};

	const callSaveList = () => {
		saveList(cityDetail.name, cityDetail.location, cityDetail.tasks);
	};

	return (
		<div className="city-tasks">
			<div className="city-tasks-header-container">
				<p>{cityDetail.name}</p>
				<button className="city-tasks-close" title="Back">
					<Link to="/" className="link-rule">
						.
					</Link>
				</button>
			</div>
			<div className="city-tasks-location-container">
				<figure alt="Location Symbol"></figure>
				<p>{cityDetail.location}</p>
				<button onClick={addPoint} title="Add Task">
					Add Task
				</button>
			</div>
			<div className="city-tasks-checklist-container">
				{cityDetail.tasks.map((task, index) => (
					<Task
						key={index}
						index={index}
						visited={task.visited}
						description={task.description}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				))}
			</div>
			<button
				className="city-tasks-save"
				onClick={callSaveList}
				title="Save List"
			>
				{/* <Link to="/"> */}
					SAVE
				{/* </Link> */}
			</button>
		</div>
	);
};

export default CityTasks;
