import React from "react";
import './pop_up.css';

export default function PopUp() {
	return (
		<div className="container_fluid">
			<div className="member_under_bar">
				<div className="bar_text text_color01">
					Sumblr 사용자에 합류해 커뮤니티를 찾아보고 새 친구들을 만나세요.
				</div>
				<div className="member_buttons">
					<div className="member_join_btn">
						가입하기
					</div>
					<div className="member_login_btn">
						로그인
					</div>
				</div>
			</div>
		</div>
	)
}