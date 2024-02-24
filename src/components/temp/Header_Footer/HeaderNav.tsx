import React from "react";
import './header_nav.css';

export default function HeaderNav() {
	const [theme, setTheme] = React.useState("basic");

	function applyTheme() {
		const t = theme;
		t === "basic" ? setTheme("light") : setTheme("basic");
		console.log(theme);
		document.documentElement.className = theme;
	}

	return (
		<nav>
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
				<div className='nav_contents'>
					<div>
						<span className='nav_list text_color01'><i className="bi bi-person-fill"></i></span>
					</div>
					<div>
						<span className='nav_text nav_list text_color01'> 계정</span>
					</div>
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