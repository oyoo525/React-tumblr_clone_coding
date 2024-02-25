import React from "react";
import { Link } from "react-router-dom";
import './feed.css';
import Follow from "../Button/Follow.tsx";
import FeedContent from "./item/FeedContent.tsx";
import { UserProfileName } from "../User/UserProfile.tsx";


export default function Feed(props) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/" + random01;

	return (
		<div className="feed_box">
			<div className="feed_title bg_color02">
				<div className="name_box">
					<UserProfileName />
				</div>	
				<div className="icon_box text_color01">
					<span><i className="bi bi-three-dots"></i></span>
				</div>
			</div>
			<FeedContent />
			<div className="feed_footer bg_color02 text_color01">
				<div className="tag_list">
					<span>#tictok</span>
				</div>
				<div className="feed_info">
					<div className="feed_like">
						<span>반응 <strong>13,264</strong>개</span>
					</div>
					<div className="feed_info_icon">
						<i className="bi bi-cursor"></i>&nbsp;
						<i className="bi bi-bookmark"></i>&nbsp;
						<i className="bi bi-heart"></i>
					</div>
				</div>
			</div>
		</div>
	)
}