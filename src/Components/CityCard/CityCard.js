import React from "react";
import "./style.css";
import { deleteListFb } from "../../firebaseFuncs.js";
import { Link } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	LocationOnFontIcon,
	Button,
	CancelFontIcon,
	TextIconSpacing,
	Text,
	FormatListBulletedFontIcon,
} from "react-md";

const CityCard = (props) => {
	const deleteList = () => {
		props.delete(props.index);
		deleteListFb(props.id);
	};

	const countTotalItems = () => {
		let visited = 0;
		let notVisited = 0;
		if (props.city.tasks !== undefined) {
			props.city.tasks.forEach((element) => {
				if (element.visited === true) {
					visited++;
				} else {
					notVisited++;
				}
			});
		}
		const msg = `${visited}/${notVisited + visited} done!`;
		const total = notVisited + visited;
		return [msg, total];
	};

	return (
		<Card className="container-city-card">
			<CardHeader className="card-header-city-card">
				<div className="header-wrapper-city-card">
					<CardTitle className="title-city-card">{props.city.name}</CardTitle>
					<CancelFontIcon
						onClick={deleteList}
						title="Delete"
						className="delete-city-card"
					></CancelFontIcon>
				</div>
			</CardHeader>
			<CardContent className={"card-main"}>
				<div className="main-wrapper-city-card">
					<LocationOnFontIcon className="location-icon-city-card"></LocationOnFontIcon>
					<Text className="location-city-card">{props.city.location}</Text>
				</div>
			</CardContent>
			<CardContent className={"card-footer"}>
				<div className="footer-wrapper-city-card">
					<Link to={`/list/${props.city.id}`}>
						<Button
							id="go-to-city-tasks"
							value={countTotalItems()[1]}
							className="go-to-city-tasks"
							themeType="outlined"
						>
							<TextIconSpacing
								icon={
									<FormatListBulletedFontIcon className="list-icon"></FormatListBulletedFontIcon>
								}
							>
								{countTotalItems()[0]}
							</TextIconSpacing>
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default CityCard;
