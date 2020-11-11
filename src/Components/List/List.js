import React from "react";
import "./style.css";
import Task from "../Task/Task.js";
import { useEffect } from "react";
import { saveList } from "../../firebaseFuncs.js";
import { useSelector, useDispatch } from "react-redux";
import { loadList, deleteTask, addTask, editTask } from "../../Store/Actions";
import { firestore } from "../../firebaseUtils";
import { Link } from "react-router-dom";

const List = (props) => {
	const dispatch = useDispatch();

	const cityDetail = useSelector((state) => state.app.cityDetail);
	const pointsList = cityDetail.points;

	const onUpdate = (index, done, value) => {
		dispatch(editTask({ index: index, done: done, value: value }));
	};

	const onDelete = (index) => {
		dispatch(deleteTask(index));
	};

	const addPoint = () => {
		dispatch(addTask());
	};

	const loadFirestoreList = (listName, listLocation) => {
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
		loadFirestoreList("Parques", "São Paulo");
	}, []);

	const callSaveList = () => {
		saveList(props.listName, props.listLocation, pointsList);
	};

	return (
		<div className="list" id={props.listId}>
			<div className="list-header-container">
				<p id={props.titleId} value={props.titleContent}>
					{props.listName}
				</p>
				<button className="list-close" id={props.listClose} title="Back">
					<Link to="/" className="link-rule">.</Link>
				</button>
			</div>
			<div className="location-container">
				<figure alt="Location Symbol"></figure>
				<p>{props.listLocation}</p>
				<button onClick={addPoint} title="Add Task">
					Add Task
				</button>
			</div>
			<div className="list-checklist-container" id={props.checklistContainer}>
				{pointsList.map((point, index) => (
					<Task
						key={index}
						index={index}
						done={point.done}
						value={point.value}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				))}
			</div>
			<button
				className="list-save"
				id={props.saveList}
				onClick={callSaveList}
				title="Save List"
			>
				SAVE
			</button>
		</div>
	);
};

export default List;
