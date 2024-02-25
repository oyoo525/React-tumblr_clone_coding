import React from "react";
import Nav from "../../temp/Nav.tsx";
import Feed from "../../temp/Feed/Feed.tsx";
import AnswerCard from "./AnswerCard.tsx";

export default function AnswerTime() {
	return (
		<div className="answer_time_box">
			<AnswerCard />
			<Feed />
			<Feed />
			<Feed />
			<Feed />
			<Feed />
		</div>
	)
}