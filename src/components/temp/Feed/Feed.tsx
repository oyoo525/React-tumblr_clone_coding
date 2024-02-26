import React from "react";
import { Link } from "react-router-dom";
import './feed.css';
import Follow from "../Button/Follow.tsx";
import FeedContent from "./item/FeedContent.tsx";
import { UserProfileName } from "../User/UserProfile.tsx";


export default function Feed({member}) {
	const random01 = Math.random()*100;
	const contentImg = "https://source.unsplash.com/random/" + random01;

	const [isInfoOpen, setIsInfoOpen] = React.useState(false);
	const infoOpen = () => {
		setIsInfoOpen(true);
	}
	const infoClose = () => {
		if(isInfoOpen) setIsInfoOpen(false);
	}

	return (
		<div className="feed_box" onClick={infoClose}>
			<div className="feed_title bg_color02">
				<div className="name_box">
					<UserProfileName member={member} />
				</div>	
				<div className="icon_box feed_info_dot_btn_box" onClick={(e) => e.stopPropagation()}>
					<div onClick={infoOpen}>
						<span className="text_color01 feed_info_dot_icon"><i className="bi bi-three-dots"></i></span>
					</div>
					{isInfoOpen && (
						<div className="feed_info_dot_btn">
							<div className="div_tail_box">
								<div className="feed_date_box">일요일 오후 1:56</div>
								<div>링크 복사</div>
								<div>내 관심사가 아님</div>
								<div>포스트 팔로우</div>
								<div>커뮤니케이션 레이블 제안</div>
								<div className="text_danger">포스트 신고</div>
								<div className="text_danger">@테스트닉네임 차단</div>
							</div>
						</div>
					)}
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