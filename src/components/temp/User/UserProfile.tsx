import React from "react";
import './user_profile.css';

export default function UserProfile() {
	return (
		<div className="user_profile_box">
			<div className="profile_box">
				<img src="https://source.unsplash.com/random" className="profile_img" alt="프로필 이미지"/>
			</div>
			<div className="blog_info text_color01">
				<div className="blog_info_title">
					블로그 이름
				</div>
				<div className="blog_info_nickname">
					활동명
				</div>
			</div>
		</div>
	)
}