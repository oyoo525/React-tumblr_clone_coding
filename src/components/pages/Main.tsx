import React from "react";
import './main.css';
import Nav from "../temp/Nav.tsx";
import TagBox from "../temp/TagBox.tsx";
import Feed from "../temp/Feed.tsx";

export default function Main() {
	const data = [
		{no : "1", title : "photography", tag : "#photographers on sumblr"},
		{no : "2", title : "goth", tag : "#mental health"},
		{no : "3", title : "david tennanat", tag : "#bafta #michael sheen #baftas"},
		{no : "4", title : "book quotes", tag : ""},
		{no : "5", title : "illustration", tag : ""},
		{no : "6", title : "batman", tag : "#dc comics"}
];


	return (
		<>
			<div className="">
				<Nav />
				<div className="container_page">
					<div className="carousel slide">
						<div className="speed_box">
							{data.map((data) => <TagBox key={data.no} props={data} /> )}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
					<div className="feed_box">				
						<Feed />
						<Feed />
					</div>
				</div>
			</div>
		</>
	)
}