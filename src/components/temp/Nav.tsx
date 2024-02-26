import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css';

export default function Nav({isLogin, setNav}) {
	const navigator = useNavigate();

	const moveNav01 = (type) => {
		setNav(type);
		navigator("/explore");
	}

	const moveNav02 = (type) => {
		setNav(type);
		navigator("/dashboard");
	}

	return (
		<div className="container_nav border_bottom">
			<div className="text_color01 top_menu_nav">
				<div className="navbar_flex_box">
					{!isLogin && (
						<>
							<div className="nav-item nav_menu" onClick={() => moveNav01('trending')}>
								<span className="text_color01">요즘 뜨는</span>
							</div>
							<div className="nav-item nav_menu" onClick={() => moveNav01('staff_picks')}>
								<span className="text_color01">스태프 추천</span>
							</div>
							<div className="nav-item nav_menu" onClick={() => moveNav01('answertime')}>
								<span className="text_color01">질문시간</span>
							</div>
							{/* <div className="nav-item nav_menu more_btn">
								<span className="nav-link text_color01">더보기 <i className="bi bi-arrow-down-circle-fill"></i></span>
							</div>
							<div className="more_box">
								<span>텍스트</span><br />
								<span>사진</span><br />
								<span>GIF</span><br />
								<span>인용구</span><br />
								<span>채팅</span><br />
								<span>오디오</span><br />
								<span>동영상</span><br />
								<span>질문</span>
							</div> */}
						</>
					)}
					{isLogin && (
						<>
							<div className="nav-item nav_menu" onClick={() => moveNav02('stuff_for_you')}>
								<span className="text_color01">내 취향</span>
							</div>
							<div className="nav-item nav_menu" onClick={() => moveNav02('following')}>
								<span className="text_color01">팔로잉</span>
							</div>
							<div className="nav-item nav_menu" onClick={() => moveNav02('hubs')}>
								<span className="text_color01">팔로그한 태그</span>
							</div>
						</>
					)}
				</div>
			</div>
			<div className="grid_icon">
				<span className="text_color01"><i className="bi bi-grid-1x2"></i></span>
				<span className="text_color01"><i className="bi bi-view-stacked"></i></span>
			</div>
		</div>
	)
}