import React from "react";
import './user_profile.css';
import Follow from "../Button/Follow.tsx";
import { useNavigate } from "react-router-dom";

export default function UserProfile({member}) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/user," + random01;

	const navi = useNavigate();
	const navigator = (id) => {
		navi(`/blog/${id}`)
	}

	return (
		<div className="user_profile_box">
			<div className="profile_box" onClick={() => navigator(`${member.id}`)}>
				<img src={contentImg} className="profile_img" alt="프로필 이미지"/>
			</div>
			<div className="blog_info text_color01">
				<div className="blog_info_title" onClick={() => navigator(`${member.id}`)}>
					{member.id}
				</div>
				<div className="blog_info_nickname">
					{member.name}
				</div>
			</div>
		</div>
	)
}

export function UserProfileName({member}) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/user," + random01;
	
	const navi = useNavigate();
	const navigator = (id) => {
		navi(`/blog/${id}`)
	}

	return (
		<div className="user_profile_box">
			<div className="profile_box" onClick={() => navigator(`${member.id}`)}>
				<img src={contentImg} className="profile_img" alt="프로필 이미지"/>
			</div>
			<div className="user_info text_color01">
				<div className="blog_info_title">
					<span>{member == null ? '테스트닉네임' : member}</span>&nbsp;
				</div>
				<Follow />
			</div>
		</div>
	)
}