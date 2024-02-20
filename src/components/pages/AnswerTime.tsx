import React from "react";
import Nav from "../temp/Nav.tsx";
import Feed from "../temp/Feed.tsx";
import AnswerCard from "../temp/AnswerCard.tsx";

export default function AnswerTime() {
	return (
		<>
		<div className="">
			<Nav />
			<div className="container_page">
				<AnswerCard />
				<div className="feed_box">				
					<Feed />
					<Feed />
				</div>


			</div>
		</div>
		</>
	)
}