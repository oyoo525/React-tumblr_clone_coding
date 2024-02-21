import React from "react";
import './pop_up.css';
import Logo01 from "../Logo/Logo.tsx";

export default function PopUp() {
	return (
		<div className="container_fluid">
			<div className="member_under_bar">
				<div className="bar_text text_color01">
					Sumblr 사용자에 합류해 커뮤니티를 찾아보고 새 친구들을 만나세요.
				</div>
				<div className="member_buttons">
					<div className="member_join_btn" data-bs-toggle="modal" data-bs-target="#memberModal">
						<span>가입하기</span>
					</div>
					<div className="member_login_btn" data-bs-toggle="modal" data-bs-target="#memberModal">
						<span>로그인</span>
					</div>
				</div>
			</div>

			{/* 가입/로그인 모달 */}
			<div className="modal fade" tabIndex={-2} id="memberModal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<Logo01 />
						<div className="login_text text_color01">
							<span>안녕하세요, 회원님 취향 인터넷입니다. 심심할 틈이 어디!</span>
						</div>
						<div className="login_word text_color01">
							<span>가입 또는 로그인:</span>
						</div>
						<div className="login_btn_box">
							<div className="social_login_btn">
								<span>Guugle 계정으로 로그인</span>
							</div>
							<div className="social_login_btn">
								<span>Aplle 계정으로 로그인</span>
							</div>
							<div className="social_login_btn">
								 <span>이메일로 로그인</span>
							</div>
						</div>
					</div>
				</div>
			</div>



		</div>
	)
}