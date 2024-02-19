import React from "react";
import { Link } from "react-router-dom";
import img02 from '../../assets/img/download02.png';
import img06 from '../../assets/img/download06.png';
import './feed.css';


export default function Feed(props) {
	return (
		<div className="feed">
			<div className="feed_title">
				<div className="profile_box">
					<img src={img02} className="profile_img" />
				</div>
				<div className="name_box">
					<span>닉네임테스트</span> &nbsp;
					<Link to="" className="link_text">
						<span className="follow_btn text_color02">팔로우</span>
					</Link>
				</div>
				<div className="icon_box">
					<span><i className="bi bi-three-dots"></i></span>
				</div>
			</div>
			<div className="feed_content">
				<img src={img06} className="profile_img"/>
			</div>
			<div className="feed_footer">
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