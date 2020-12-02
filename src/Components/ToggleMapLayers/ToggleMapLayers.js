import React, { useState } from "react";
import "./style.css";
import { ExpansionPanel, InputToggle, CheckBoxSVGIcon } from "react-md";
import { useDispatch } from "react-redux";
import { selectBasemap } from "../../Store/Actions/index";

const ToggleMapLayers = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const dispatch = useDispatch();

	const changeMapType = (mapType) => {
		dispatch(selectBasemap(mapType));
	};

	return (
		<div>
			<ExpansionPanel
				header="Pick a Basemap"
				className="layers-selection-container"
				expanded={isExpanded}
				onExpandClick={() => setIsExpanded(!isExpanded)}
			>
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
			</ExpansionPanel>
		</div>
	);
};

export default ToggleMapLayers;
