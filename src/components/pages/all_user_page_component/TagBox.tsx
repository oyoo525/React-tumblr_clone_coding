import React from "react";
import './tag_box.css';

export default function TagBox(props) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/user," + random01;
	
	return (
		<div className="tag_box bg_color03">
			<div className="tag_box_info">
				<div className="circle_box">
					<span>{props.data.no}</span>
				</div>
				<div className="tab_box_content">
					<span className="content_title">{props.data.title}</span><br />
					<span className="content_tag">{props.data.tag}</span>
				</div>
				<div className="img_box70">
					<img src={contentImg} className="profile_img" alt="태그 이미지"/>
				</div>
			</div>
		</div>
	)
}