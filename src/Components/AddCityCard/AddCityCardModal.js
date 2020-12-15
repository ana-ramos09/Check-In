import React from "react";
import { useState } from "react";
import "./style.css";
import { createList } from "../../firebaseFuncs.js";
import {
	Button,
	FontIcon,
	TextField,
	CancelFontIcon,
	TextIconSpacing,
	AddCircleSVGIcon,
} from "react-md";
import {
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	DialogFooter,
} from "react-md";
import { useToggle } from "react-md";

const AddCityCardModal = (props) => {
	const inputNameHandler = (e) => {
		props.setListName(e.target.value);
	};

	const inputLocationHandler = (e) => {
		props.setListlocation(e.target.value);
	};

	const callFunctions = () => {
		callCreateList();
		props.updateLists();
	};

	const callCreateList = () => {
		createList(props.listName, props.listLocation);
	};

	const [visible, enable, disable] = useToggle(false);

	return (
		<>
			<Button
				className="dialog-toggle"
				onClick={enable}
				title="Add a New List"
				// buttonType="icon"
			>
				<TextIconSpacing
					icon={
						<AddCircleSVGIcon className="add-list-symbol"></AddCircleSVGIcon>
					}
				>
					LIST
				</TextIconSpacing>
			</Button>
			<Dialog
				id="simple-dialog"
				visible={visible}
				onRequestClose={disable}
				aria-labelledby="dialog-title"
			>
				<DialogHeader>
					<DialogTitle id="dialog-title">
						Create a New List
						<CancelFontIcon id="dialog-close" onClick={disable} title="Close">
							Close
						</CancelFontIcon>
					</DialogTitle>
				</DialogHeader>
				<DialogContent className="create-a-list-container">
					<div className="textfield-container">
						<TextField
							id="new-city-card-name"
							label="Name"
							onChange={inputNameHandler}
						></TextField>

						<TextField
							id="new-city-card-location"
							label="City"
							onChange={inputLocationHandler}
						></TextField>
					</div>
					<div className="button-container-modal">
						<Button
							id="add-city-card-button"
							buttonType="icon"
							theme="warning"
							themeType="outline"
							onClick={callFunctions}
							title="Add a List!"
						>
							<FontIcon>add</FontIcon>
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default AddCityCardModal;
