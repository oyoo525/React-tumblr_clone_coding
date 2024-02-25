import React from "react";
import './feed_content.css';

export default function FeedContent() {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/" + random01;

	return (
		<div className="feed_content_box">
			<div className="feed_content">
				<img src={contentImg} className="profile_img" alt="컨텐츠 이미지"/>
			</div>
		</div>
	)
}