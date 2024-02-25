import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.json';
import { Link } from "react-router-dom";
import axios from 'axios';
import './footer.css';
import profile_img from '../../../assets/img/download.png';
import img09 from '../../../assets/img/download09.png';
import WebNav from "./WebNav.tsx";
import Follow from "../Button/Follow.tsx";
import UserProfile from "../User/UserProfile.tsx";

export default function Footer() {
	const [member, setMember] = React.useState([]);

	const getMember = async () => {
		const res = await axios.get("http://localhost:8080/member");
		setMember(res.data);
		console.log(res.data);
	}

	React.useEffect(() => {
		getMember();
	}, []);

	return (
		<div className="container_footer border_left">
			<div className="search_box bg_color01">
				<div className="search_icon">
					<span className="text_color01"><i className="bi bi-search"></i></span>
				</div>
				<form className="search_form">
					<input type="text" placeholder="Sumblr 검색" className="search_input"/>
				</form>
			</div>

			<div className="popular_box bg_color02">
				<div className="popular_title">
					<span className="text_color01">요즘 뜨는 블로그</span>
				</div>
				{/* 블로그 반복~~ */}
				{member.map((member, index, array) => 
					<div className="popular_contents">
						<UserProfile member={member} />
						<Follow />
					</div>
				)}

				


				<div className="more_blog">
					<Link to="" className="link_text">
						<span className="more_btn text_color02">블로그 더 보기</span>
					</Link>
				</div>
			</div>

			<div className="sponsor_box">
				<div className="sponsor_header">
					<div className="sponsor_title">
						<span className="text_color01">스폰서</span>
					</div>
					<div className="sponsor_remove_icon">
						<span className="text_color01"><i className="bi bi-three-dots"></i></span>
					</div>
				</div>
				<div className="sponsor_content">
					<Link to="">
						<img src={img09} alt="sponsor_img" className="profile_img" />
					</Link>
				</div>
			</div>
			<WebNav />
		</div>
	)
}