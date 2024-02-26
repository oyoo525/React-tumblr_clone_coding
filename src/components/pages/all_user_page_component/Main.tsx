import React, { useRef } from "react";
import './main.css';
import TagBox from "./TagBox.tsx";
import Feed from "../../temp/Feed/Feed.tsx";

export default function Main({isLogin}) {
	const data = [
		{no : "1", title : "photography", tag : "#photographers on sumblr"},
		{no : "2", title : "goth", tag : "#mental health"},
		{no : "3", title : "david tennanat", tag : "#bafta #michael sheen #baftas"},
		{no : "4", title : "book quotes", tag : ""},
		{no : "5", title : "illustration", tag : ""},
		{no : "6", title : "batman", tag : "#dc comics"}
];

	return (
		<div className="trending_box">
			<div className="slide_box">
				<div className="carousel_box">
					<div className="speed_box">
						{data.map((data) => <TagBox key={data.no} data={data} /> )}
					</div>					
				</div>
			</div>
			<div className="feed_box">				
				<Feed />
				<Feed />
				<Feed />
				<Feed />
				<Feed />
			</div>
		</div>
)
}