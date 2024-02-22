import React from "react";
import './emaillogin.css';
import { useNavigate } from "react-router-dom";

export default function EmailLogin() {

	const navigate = useNavigate();

	const [step, setStep] = React.useState(1);
	const nextStep = () => {
		if(step === 1) {
			setStep(2);
		} else if(step === 2) {
			setStep(3);
		} else if(step === 3) {
			setStep(4);
		} else if(step === 4) {
			navigate("/answertime", {replace: true});
		}
	}
	return (
		<div>
			{step === 1 && (
				<div>
					<div className="login_text popup_text_white">
						<span>이메일을 입력해 로그인 또는 가입하세요.</span>
					</div>
					<form className="email_login_form">
						<div className="email_input_box">
							<input type="text" className="email_input" placeholder="이메일"/>
						</div>
						<div onClick={nextStep}>
							<span className="popup_text_white">다음 <i className="bi bi-arrow-right"></i></span>
						</div>
					</form>
				</div>
			)}
			{step === 2 && (
				<div>
					<div className="login_text popup_text_white">
						<span>반가워요. 회원님 취향 인터넷에 오셨습니다.</span>
					</div>
					<form className="email_login_form">
						<div className="email_input_box">
							<input type="text" className="email_input" placeholder="비밀번호 설정"/>
						</div>
						<div className="email_input_box">
							<input type="text" className="email_input" placeholder="비밀번호 다시 입력"/>
						</div>
						<div onClick={nextStep}>
							<span className="popup_text_white">다음 <i className="bi bi-arrow-right"></i></span>
						</div>
					</form>
				</div>
			)}
			{step === 3 && (
				<div>
					<div className="login_text popup_text_white">
						<span>생일이 언제인가요?</span><br />
						<span>이 벙보를 표시하거나 공유하지 않습니다. Sumblr 사용 연령 이상인지만 확인하면 돼요.</span>
					</div>
					<form className="email_login_form">
						<div className="email_input_box">
							<select>
								<option>월</option>
							</select>
							<select>
								<option>일</option>
							</select>
							<select>
								<option>연도</option>
							</select>
						</div>
						<div>
							<span>다음 생일까지 00일 남음!</span>
						</div>
						<div>
							<span><i className="bi bi-check-circle-fill"></i></span>
							<span>Sumblr 서비스 약관에 동의하며 개인정보보호 정책을 읽었습니다.</span>
						</div>
						<div onClick={nextStep}>
							<span className="popup_text_white">다음 <i className="bi bi-arrow-right"></i></span>
						</div>
					</form>
				</div>
			)}
			{step === 4 && (
				<div>
					<div className="login_text popup_text_white">
						<span>이름을 지어주세요.</span><br />
						<span>Sumblr에서 다른회원들에게 표시되는 이름이자 내 URL입니다. 나중에 바꿀 수 있어요.</span>
					</div>
					<form className="email_login_form">
						<div className="email_input_box">
							<div>
								<span><i className="bi bi-at"></i></span>
							</div>
							<div>
								<input type="text" className="email_input" placeholder="블로그 이름"/>
							</div>
						</div>
						<div onClick={nextStep}>
							<span className="popup_text_white">가입 <i className="bi bi-arrow-right"></i></span>
						</div>
					</form>
					<div>
						<span>이 웹사이트는 reCAPTCHA (자동등록방지) 보호를 사용하며, Google 서비스 약관 및 개인정보보호 정책을 따릅니다.</span>
					</div>
				</div>
			)}
		</div>
	)
}
