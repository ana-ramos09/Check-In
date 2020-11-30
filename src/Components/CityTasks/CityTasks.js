import React, { useEffect } from "react";
import { firestore } from "../../firebaseUtils";
import "./style.css";
import Task from "../Task/Task.js";
import { saveList } from "../../firebaseFuncs.js";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	deleteTask,
	addTask,
	editTask,
	refreshList,
	loadList,
} from "../../Store/Actions";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Fieldset,
	ArrowBackFontIcon,
	Button,
	FontIcon,
	LocationOnFontIcon,
	Text,
	TextIconSpacing
} from "react-md";

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
		dispatch(
			refreshList({
				name: cityDetail.name,
				location: cityDetail.location,
				tasks: cityDetail.tasks,
				id: cityDetail.id,
			})
		);
		saveList(
			cityDetail.name,
			cityDetail.location,
			cityDetail.tasks,
			cityDetail.id
		);
	};

	const loadLists = (id) => {
		firestore
			.collection("lists")
			.doc(id)
			.get()
			.then((resp) => {
				// console.log(resp.data());
				dispatch(
					loadList({
						...resp.data(),
						id,
					})
				);
			});
	};

	const { id } = useParams();

	useEffect(() => {
		loadLists(id);
	}, []);

	return (
		<Card className="card-component">
			<CardHeader className="card-header">
				<div className="header-wrapper">
					<CardTitle className="card-title">{cityDetail.name}</CardTitle>
					<Link to="/">
						<ArrowBackFontIcon className="card-back" title="Go Back"></ArrowBackFontIcon>
					</Link>
				</div>
			</CardHeader>
			<CardContent className="card-subheader">
				<div className="location-wrapper">
					<div className="location-container">
						<LocationOnFontIcon className="card-location-icon" title="Location" />
						<Text className="card-location" >{cityDetail.location}</Text>
					</div>
					<div className="location-button-container">
						<Button
							id="add-task-button"
							theme="primary"
							className="add-task-button"
							onClick={addPoint}
							title="Add Task"
						><TextIconSpacing icon={<FontIcon>add</FontIcon>}>Task</TextIconSpacing>
						</Button>
					</div>
				</div>
			</CardContent>
			<CardContent className="card-main">
				<div className="tasks-container-city-tasks">
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
			</CardContent>
			<CardContent className="card-footer">
				<div className="save-wrapper">
					<Button
						id="save-list-button"
						// theme="error"
						// themeType="outline"
						className="city-tasks-save"
						onClick={callSaveList}
						title="Save List"
					>
						<Link to="/">SAVE</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default CityTasks;
