import React, { useState } from "react";
import "./style.css";
import {
	ExpansionPanel,
	Checkbox,
	InputToggle,
	CheckBoxSVGIcon,
} from "react-md";

const ToggleMapLayers = () => {
	const [isExpanded, setIsExpanded] = useState(false);

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
					type="checkbox"
					icon={<CheckBoxSVGIcon />}
					label="Standard Map"
				></InputToggle>
				<InputToggle
					id="checkbox-2"
					name="checkboxes"
					type="checkbox"
					icon={<CheckBoxSVGIcon />}
					label="Humanitarian Map"
				></InputToggle>
				<InputToggle
					id="checkbox-3"
					name="checkboxes"
					type="checkbox"
					icon={<CheckBoxSVGIcon />}
					label="Terrain Map"
				></InputToggle>
			</ExpansionPanel>
		</div>
	);
};

export default ToggleMapLayers;
