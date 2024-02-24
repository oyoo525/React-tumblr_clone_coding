import React from "react";
import Logo01 from "../Logo/Logo.tsx";
import './login_modal.css';
import EmailLogin from "./EmailLogin.tsx";
import { relative } from "path";

export default function LoginModal({isOpen, isClose}) {

	const [loginPage, setLoginPage] = React.useState("base");
	const [baseVisible, setBaseVisible] = React.useState(true);

	// 이메일로 로그인 클릭시
	const emailLogin = () => {
		setLoginPage("emailLogin");
		setBaseVisible(false);
	}
	
	return (
			<div className="cumstomer_modal">
				<div className="modal_flex">
					<div className="modal_box login_modal_box">
						<div className="modal_header">
							<div className="modal_header_box_blank"></div>
							<div className="modal_logo_box">
								<Logo01 />
							</div>
							<div className="modal_close_btn_box">
								<button onClick={isClose}><i className="bi bi-x-lg"></i></button>
							</div>
						</div>
						{baseVisible && (
							<div className="base">
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
									<div className="social_login_btn" onClick={emailLogin}>
										<span>이메일로 로그인</span>
									</div>
								</div>
							</div>
						)}
						{loginPage === "emailLogin" && <EmailLogin isClose={isClose} />}
					</div>
				</div>
			</div>
	)
}