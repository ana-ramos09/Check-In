import React, { useRef, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { set } from "ol/transform";

const Map = () => {
	const olState = useSelector((state) => state.ol.mapType);

	const mapRef = useRef();

	const [hu, setHu] = useState();
	const [st, setSt] = useState();
	const [te, setTe] = useState();
	const [wa, setWa] = useState();

	const initialMap = () => {
		const initialMap = new olMap({
			interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
			layers: [
				new olTile({
					source: new olSource(),
				}),
			],
			view: new olView({
				center: [-5206689.0, -2615674.0],
				zoom: 6,
				minZoom: 4,
				rotation: 0,
			}),
		});

		const openStreetMapHumanitarian = new olTile({
			source: new olSource({
				url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
			}),
			visible: olState === "OSMHumanitarian",
			title: "OSMHumanitarian",
		});

		const openStreetMapStandard = new olTile({
			source: new olSource(),
			visible: olState === "OSMStandard",
			title: "OSMStandard",
		});

		const stamentTerrain = new olTile({
			source: new olSource({
				url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
				attribuition: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.`,
			}),
			visible: olState === "StamenTerrain",
			title: "StamenTerrain",
		});

		const stamentWatercolor = new olTile({
			source: new olSource({
				url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
				attribuition: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.`,
			}),
			visible: olState === "StamentWatercolor",
			title: "StamentWatercolor",
		});

		setHu(openStreetMapHumanitarian);
		setSt(openStreetMapStandard);
		setTe(stamentTerrain);
		setWa(stamentWatercolor);

		initialMap.addLayer(openStreetMapHumanitarian);
		initialMap.addLayer(openStreetMapStandard);
		initialMap.addLayer(stamentTerrain);
		initialMap.addLayer(stamentWatercolor);

		// On Method - Listen for a certain type of element/object
		initialMap.on("click", function (e) {
			console.log(e.coordinate);
		});

		initialMap.setTarget(mapRef.current);
	};

	const refresh = () => {
		hu.setVisible(olState === "OSMHumanitarian");
		st.setVisible(olState === "OSMStandard");
		te.setVisible(olState === "StamenTerrain");
		wa.setVisible(olState === "StamentWatercolor");
	};

	useEffect(() => {
		initialMap();
	}, []);

	useEffect(() => {
		if (
			hu !== undefined &&
			st !== undefined &&
			te !== undefined &&
			wa !== undefined
		) {
			refresh();
		}
	}, [olState]);

	return <div className="map-container" ref={mapRef}></div>;
};

export default Map;
