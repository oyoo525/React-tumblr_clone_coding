import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.json';
import { Link } from "react-router-dom";
import './footer.css';
import profile_img from '../../assets/img/download.png';

export default function Footer() {
	return (
		<div className="container_footer">
			<div className="search_box">
				<div className="search_icon">
					<span><i className="bi bi-search"></i></span>
				</div>
				<form className="search_form">
					<input type="text" placeholder="Sumblr 검색" className="search_input"/>
				</form>
			</div>

			<div className="popular_box">
				<div className="popular_title">
					<span className="text_color01">요즘 뜨는 블로그</span>
				</div>
				{/* 블로그 반복~~ */}
				<div className="popular_contents">
					<div className="profile_box">
						<img src={profile_img} className="profile_img" />
					</div>
					<div className="blog_info text_color01">
						<div className="blog_info_title">
							블로그 이름
						</div>
						<div className="blog_info_nickname">
							활동명
						</div>
					</div>
					<div className="follow_box">
						<Link to="" className="link_text">
							<span className="follow_btn text_color02">팔로우</span>
						</Link>
					</div>
				</div>
				{/* 블로그 반복~~ */}
				<div className="popular_contents">
					<div className="profile_box">
						<img src={profile_img} className="profile_img" />
					</div>
					<div className="blog_info text_color01">
						<div className="blog_info_title">
							블로그 이름
						</div>
						<div className="blog_info_nickname">
							활동명
						</div>
					</div>
					<div className="follow_box">
						<Link to="" className="link_text">
							<span className="follow_btn text_color02">팔로우</span>
						</Link>
					</div>
				</div>
				<div className="more_blog">
					<Link to="" className="link_text">
						<span className="more_btn text_color02">블로그 더 보기</span>
					</Link>
				</div>
			</div>


		</div>
	)
}