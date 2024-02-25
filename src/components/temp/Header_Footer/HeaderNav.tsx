import React from "react";
import './header_nav.css';
import UserInfoNav from "./UserInfoNav.tsx";

export default function HeaderNav() {
	const [theme, setTheme] = React.useState("basic");
	function applyTheme() {
		const t = theme;
		t === "basic" ? setTheme("light") : setTheme("basic");
		console.log(theme);
		document.documentElement.className = theme;
	}

	const [isOpenUserInfo, setIsOpenUserInfo] = React.useState(false);
	const toggleUserInfo = () => {
		if(isOpenUserInfo === false) {
			setIsOpenUserInfo(true);
		} else {
			setIsOpenUserInfo(false);
		}
	}

	return (
		<nav className="header_nav_box">
			<div className="all_user">
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-compass"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 둘러보기</span>
					</div>
				</div>
				<div className='nav_contents' onClick={applyTheme}>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-palette-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 팔레트 바꾸기</span>
					</div>
				</div>
			</div>
			<div className="login_user">
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-lightning-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 활동</span>
					</div>
				</div>
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-chat-dots-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 메세지</span>
					</div>
				</div>
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-envelope-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 수신함</span>
					</div>
				</div>
				<div className='nav_contents' onClick={toggleUserInfo}>
					<div className="accordion_box">
						<div className="accordion_title">
							<div>
								<span className='nav_list text_color01'><i className="bi bi-person-fill"></i></span>
							</div>
							<div>
								<span className='nav_text nav_list text_color01'> 계정</span>
							</div>
						</div>
						<div className="accordion_icon">
							{!isOpenUserInfo && (<span className="accordion_icon_down nav_list text_color01"><i className="bi bi-caret-down-fill"></i></span>)}
							{isOpenUserInfo && (<span className="accordion_icon_up nav_list text_color01"><i className="bi bi-caret-up-fill"></i></span>)}
						</div>
					</div>
				</div>
				<div className='accordion_content_user_info'>
					{isOpenUserInfo && <UserInfoNav />}
				</div>
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-gear-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 설정</span>
					</div>
				</div>
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-basket2-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> SumblrMarket</span>
					</div>
				</div>
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-threads"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 도메인 사용하기</span>
					</div>
				</div>
			</div>
		</nav>
	)
}