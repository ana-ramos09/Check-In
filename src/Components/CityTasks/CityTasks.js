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
	uploadCoordenates,
} from "../../Store/Actions";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	ArrowBackFontIcon,
	Button,
	FontIcon,
	LocationOnFontIcon,
	Text,
	TextIconSpacing,
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

	const teste = () => {
		console.log(JSON.stringify(cityDetail.tasks[0]));
	};

	const callSaveList = () => {
		getAddress();

		saveList(
			cityDetail.name,
			cityDetail.location,
			cityDetail.tasks,
			cityDetail.id
		);

		dispatch(
			refreshList({
				name: cityDetail.name,
				location: cityDetail.location,
				tasks: cityDetail.tasks,
				id: cityDetail.id,
			})
		);
	};

	// async function callSaveList() {
	// 	let myPromise = new Promise(function (myResolve, myReject) {
	// 		setTimeout(function () {
	// 			myResolve(getAddress());
	// 		}, 4000);
	// 	});
	// }

	// callSaveList();

	const loadLists = (id) => {
		firestore
			.collection("lists")
			.doc(id)
			.get()
			.then((resp) => {
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

	// Function that receives a string and returns a formated string

	const formatAddress = (string) => {
		let newString = "";
		newString = string.replaceAll(" ", "%20");
		return newString;
	};

	// API Fetch and Dispatch the coordenates

	const getAddress = () => {
		const tasksArray = cityDetail.tasks;
		const key = "pk.34265ea85c729b9303893e6c617ac9d0";
		let address = "";
		let url = "";
		tasksArray.forEach((element, index) => {
			address = formatAddress(element.description);
			url = `https://us1.locationiq.com/v1/search.php?key=${key}&street=${address}&city=Sao%20Paulo&limit=50&format=json`;
			fetch(url)
				.then((resp) => resp.json())
				.then((resp) => console.log(resp))
				.then((resp) => [resp[0].lat, resp[0].lon])
				.then((resp) => {
					dispatch(uploadCoordenates({ coordinates: resp, index: index }));
				})
				.catch((error) => error);
		});
	};

	const getCoordinates = (newUrl, index) => {
		let addressObject = "";
		fetch(newUrl)
			.then((resp) => resp.json())
			.then((resp) => {
				resp.forEach((element, index) => {
					if (element.display_name.includes(cityDetail.location)) {
						addressObject = element;
					}
				});
				console.log(addressObject);
				return addressObject;
			})
			.then((resp) => {
				dispatch(
					uploadCoordenates({ coordinates: [resp.lat, resp.lon], index: index })
				);
			})
			.catch((error) => error);
	};

	const getAddressTest = () => {
		const newTasksArray = cityDetail.tasks;
		const newKey = "pk.34265ea85c729b9303893e6c617ac9d0";
		let newAddress = "";
		let newUrl = "";
		newTasksArray.forEach((element, index) => {
			setTimeout(() => {
				newAddress = formatAddress(element.description);
				newUrl = `https://us1.locationiq.com/v1/search.php?key=${newKey}&street=${newAddress}&city=Sao%20Paulo&limit=50&format=json`;
				getCoordinates(newUrl, index);
			}, index * 4000);
		});
	};

	return (
		<Card className="card-component">
			<CardHeader className="card-header">
				<div className="header-wrapper">
					<CardTitle className="card-title">{cityDetail.name}</CardTitle>
					<Link to="/">
						<ArrowBackFontIcon
							className="card-back"
							title="Go Back"
						></ArrowBackFontIcon>
					</Link>
				</div>
			</CardHeader>
			<button onClick={getAddressTest}>wwwwwwwwwwwwwwwwwwwwwwww</button>
			<CardContent className="card-subheader">
				<div className="location-wrapper">
					<div className="location-container">
						<LocationOnFontIcon
							className="card-location-icon"
							title="Location"
						/>
						<Text className="card-location">{cityDetail.location}</Text>
					</div>
					<div className="location-button-container">
						<Button
							id="add-task-button"
							theme="primary"
							className="add-task-button"
							onClick={addPoint}
							title="Add Task"
						>
							<TextIconSpacing icon={<FontIcon>add</FontIcon>}>
								Task
							</TextIconSpacing>
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
