import React from "react";
import './tag_box.css';
import img05 from '../../assets/img/download05.png';

export default function TagBox(prop) {
	return (
		<div className="tag_box bg_color03">
			<div className="tag_box_info">
				<div className="circle_box">
					<span>0</span>
				</div>
				<div className="tab_box_content">
					<span className="content_title">photography</span><br />
					<span className="content_tag">#photographers on sumblr</span>
				</div>
				<div className="img_box70">
					<img src={img05} className="profile_img" alt="태그 이미지"/>
				</div>
			</div>
		</div>
	)
}