import React from "react";
import './user_info_nav.css';
import UserProfile from "../User/UserProfile.tsx";

export default function UserInfoNav({setIsLogin}) {
	const loginMember = {
		id : "oyoo525",
		name : "세화짱짱"
	}
	
	const isLogout = () => {
		setIsLogin(false);
	}

	return (
		<div className="user_info_nav_box border_top">
			<div className='nav_contents nav_profile'>
				<div className="user_blog_box user_blog_box01">
					<div className="user_blog_content">
						<UserProfile member={loginMember} />
					</div>
				</div>
			</div>
			<div className='nav_contents'>
				<div>
					<span className='nav_text nav_list text_color01'> 좋아요</span>
				</div>
			</div>
			<div className='nav_contents'>
				<div>
					<span className='nav_text nav_list text_color01'> 팔로잉</span>
				</div>
			</div>
			<div className='nav_contents' onClick={isLogout}>
				<div>
					<span className='nav_text nav_list text_color01'> 로그아웃</span>
				</div>
			</div>
			<div className='nav_blog_contents'>
				<div className="user_blog_box user_blog_box02">
					<div className="user_blog_header border_bottom">
						<div>
							<span className='nav_text nav_list text_color01'>블로그</span>
						</div>
						<div className="add_blog_btn">
							<span className='nav_text nav_list text_color01'><i className="bi bi-plus-lg"></i>새 블로그</span>
						</div>
					</div>
					<div className="user_blog_content">
						<UserProfile member={loginMember} />
					</div>
				</div>
			</div>
		</div>
	)
}