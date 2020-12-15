import React, { useState } from "react";
import "./style.css";
import {
	InputToggle,
	CheckBoxSVGIcon,
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	TextIconSpacing,
	Button,
	LayersSVGIcon,
	CancelFontIcon,
	useToggle,
} from "react-md";
import { useDispatch } from "react-redux";
import { selectBasemap } from "../../Store/Actions/index";

const ToggleMapLayers = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const dispatch = useDispatch();

	const changeMapType = (mapType) => {
		dispatch(selectBasemap(mapType));
	};
	const [visible, enable, disable] = useToggle(false);
	return (
		<div>
			<Button
				id="basemap-dialog-toggle"
				onClick={enable}
				title="Pick a Basemap"
				// buttonType="icon"
			>
				<TextIconSpacing
					icon={<LayersSVGIcon className="basemap-symbol"></LayersSVGIcon>}
				></TextIconSpacing>
				Pick a Basemap
			</Button>

			<Dialog
				id="dialog-basemaps"
				visible={visible}
				onRequestClose={disable}
				aria-labelledby="dialog-title"
			>
				<DialogHeader className="dialog-header">
					<DialogTitle id="dialog-title-basemap">Select a Basemap</DialogTitle>
					<CancelFontIcon
						id="dialog-close-basemap"
						onClick={disable}
						title="Close"
					>
						Close
					</CancelFontIcon>
				</DialogHeader>
				<DialogContent className="dialog-content-basemap">
					<InputToggle
						id="checkbox-1"
						name="checkboxes"
						type="radio"
						icon={<CheckBoxSVGIcon />}
						label="Standard Map"
						onClick={() => changeMapType("OSMStandard")}
					></InputToggle>
					<InputToggle
						id="checkbox-2"
						name="checkboxes"
						type="radio"
						icon={<CheckBoxSVGIcon />}
						label="Humanitarian Map"
						onClick={() => changeMapType("OSMHumanitarian")}
					></InputToggle>
					<InputToggle
						id="checkbox-3"
						name="checkboxes"
						type="radio"
						icon={<CheckBoxSVGIcon />}
						label="Terrain Map"
						onClick={() => changeMapType("StamenTerrain")}
					></InputToggle>
					<InputToggle
						id="checkbox-4"
						name="checkboxes"
						type="radio"
						icon={<CheckBoxSVGIcon />}
						label="Watercolor Map"
						onClick={() => changeMapType("StamentWatercolor")}
					></InputToggle>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ToggleMapLayers;
