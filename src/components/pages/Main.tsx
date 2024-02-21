import React from "react";
import './main.css';
import Nav from "../temp/Nav.tsx";
import TagBox from "../temp/TagBox.tsx";
import Feed from "../temp/Feed.tsx";
import PopUp from "../temp/Header_Footer/PopUp.tsx";

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
				<div className="speed_box">
					{data.map((data) => <TagBox key={data.no} props={data} /> )}
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