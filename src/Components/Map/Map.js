import React, { useRef, useEffect, useState } from "react";
import olMap from "ol/Map";
import olView from "ol/View";
import olTile from "ol/layer/Tile";
import olSource from "ol/source/OSM";
import {
	DragRotateAndZoom,
	defaults as defaultInteractions,
} from "ol/interaction";
import { Vector as VectorSource } from "ol/source";
// import VectorLayer from "ol/layer/Vector";
import { Feature } from "ol";
import { Icon, Circle, Fill, Style } from "ol/style";
import Point from "ol/geom/Point";
import "ol/ol.css";
import "./style.css";
import { toLonLat, fromLonLat } from "ol/proj";
import { useSelector } from "react-redux";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import TileJSON from "ol/source/TileJSON";
import pointIcon from "../../images/locationFinal.png";
import MultiPoint from "ol/geom/MultiPoint";

const Map = () => {
	const olState = useSelector((state) => state.ol.mapType);
	const cityDetail = useSelector((state) => state.app.cityDetail);

	const mapRef = useRef();

	const [hu, setHu] = useState();
	const [st, setSt] = useState();
	const [te, setTe] = useState();
	const [wa, setWa] = useState();
	const [pointslayer, setPointslayer] = useState();

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

		// Basemaps
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

		// Points
		// to add only one point

		const taskPoints = new VectorLayer({
			source: new VectorSource({
				features: cityDetail.tasks.map((item, index) => {
					return new Feature(
						new Point(fromLonLat([item.latitude, item.longitude]))
					);
				}),
			}),
			style: new Style({
				image: new Icon({
					anchor: [0.5, 46],
					anchorXUnits: "fraction",
					anchorYUnits: "pixels",
					src: pointIcon,
				}),
			}),
			visible: true,
			title: "TasksPoints",
		});

		// Refresh the point when the state refreshes

		const refreshTaskPoints = () => {};

		initialMap.addLayer(openStreetMapHumanitarian);
		initialMap.addLayer(openStreetMapStandard);
		initialMap.addLayer(stamentTerrain);
		initialMap.addLayer(stamentWatercolor);
		initialMap.addLayer(taskPoints);

		setHu(openStreetMapHumanitarian);
		setSt(openStreetMapStandard);
		setTe(stamentTerrain);
		setWa(stamentWatercolor);
		setPointslayer(taskPoints);

		// On Method - Listen for a certain type of element/object
		initialMap.on("click", function (e) {
			console.log(e.coordinate);
		});

		initialMap.on("click", function (e) {
			console.log(e.coordinate);
			let geogCoord = toLonLat(e.coordinate);
			console.log(geogCoord);
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
		if (hu !== undefined && te !== undefined && wa !== undefined) {
			refresh();
		}
	}, [olState]);

	useEffect(() => {}, [cityDetail]);

	return <div className="map-container" ref={mapRef}></div>;
};

export default Map;
