import React from "react";
import './user_profile.css';
import Follow from "../Button/Follow.tsx";

export default function UserProfile({member}) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/user," + random01;

	return (
		<div className="user_profile_box">
			<div className="profile_box">
				<img src={contentImg} className="profile_img" alt="프로필 이미지"/>
			</div>
			<div className="blog_info text_color01">
				<div className="blog_info_title">
					{member.id}
				</div>
				<div className="blog_info_nickname">
					{member.name}
				</div>
			</div>
		</div>
	)
}

export function UserProfileName() {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/user," + random01;

	return (
		<div className="user_profile_box">
			<div className="profile_box">
				<img src={contentImg} className="profile_img" alt="프로필 이미지"/>
			</div>
			<div className="user_info text_color01">
				<div className="blog_info_title">
					<span>테스트닉네임</span>&nbsp;
				</div>
				<Follow />
			</div>
		</div>
	)
}