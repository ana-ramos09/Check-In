import React, { useRef, useEffect } from "react";
import olMap from "ol/Map";
import olView from "ol/View";
import olTile from "ol/layer/Tile";
import olSource from "ol/source/OSM";
import olGroup from "ol/layer/Group";
import {
	DragRotateAndZoom,
	defaults as defaultInteractions,
} from "ol/interaction";
import "ol/ol.css";
import "./style.css";

const Map = () => {
	const mapRef = useRef();

	useEffect(() => {
		const map = new olMap({
			interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
			layers: [
				new olTile({
					source: new olSource(),
				}),
			],
			view: new olView({
				center: [-5206689.487652164, -2615674.854082493],
				zoom: 6,
				minZoom: 4,
				rotation: 0.5,
			}),
		});

		//Basemaps Layers

		//Humanitarian
		const openStreetMapHumanitarian = new olTile({
			source: new olSource({
				url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
			}),
			visible: false,
			title: "OSMHumanitarian",
		});

		//Standard
		const openStreetMapStandard = new olTile({
			source: new olSource(),
			visible: true,
			title: "OSMStandard",
		});

		//Terrain
		const stamentTerrain = new olTile({
			source: new olSource({
				url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
				attribuition: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.`,
			}),
			visible: false,
			title: "StamenTerrain",
		});

		//Layer Group
		const baseLayerGroup = new olGroup({
			layers: [
				openStreetMapHumanitarian,
				openStreetMapStandard,
				stamentTerrain,
			],
		});
		// AddLayer Method - Add the layer to the top of the map
		map.addLayer(baseLayerGroup);

		// On Method - Listen for a certain type of element/object
		map.on("click", function (e) {
			console.log(e.coordinate);
		});

		map.setTarget(mapRef.current);
	}, []);

	return <div className="map-container" ref={mapRef}></div>;
};

export default Map;
