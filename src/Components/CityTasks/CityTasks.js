import React from "react";
import "./style.css";
import Task from "../Task/Task.js";
import { useEffect } from "react";
import { saveList } from "../../firebaseFuncs.js";
import { useSelector, useDispatch } from "react-redux";
import { loadList, deleteTask, addTask, editTask } from "../../Store/Actions";
import { firestore } from "../../firebaseUtils";
import { Link } from "react-router-dom";

const CityTasks = (props) => {
	const dispatch = useDispatch();

	const cityDetail = useSelector((state) => state.app.cityDetail);
	const tasksPoints = cityDetail.tasks;

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

	const loadFirestoreList = (listName, listLocation) => {
		console.log(listName, listLocation);
		firestore
			.collection("lists")
			.doc(listName + " - " + listLocation)
			.get()
			.then((resp) => {
				dispatch(loadList(resp.data()));
			})
			.catch(() => dispatch(loadList(undefined)));
	};

	useEffect(() => {
		loadFirestoreList(cityDetail.name, cityDetail.location);
	}, []);

	const callSaveList = () => {
		saveList(cityDetail.name, cityDetail.location, tasksPoints);
	};

	return (
		<div className="city-tasks">
			<div className="city-tasks-header-container">
				<p>{props.listName}</p>
				<button className="city-tasks-close" title="Back">
					<Link to="/" className="link-rule">
						.
					</Link>
				</button>
			</div>
			<div className="city-tasks-location-container">
				<figure alt="Location Symbol"></figure>
				<p>{props.listLocation}</p>
				<button onClick={addPoint} title="Add Task">
					Add Task
				</button>
			</div>
			<div className="city-tasks-checklist-container">
				{tasksPoints.map((task, index) => (
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
				SAVE
			</button>
		</div>
	);
};

export default CityTasks;
