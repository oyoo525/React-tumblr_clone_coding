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

	let numberData01 : number = 1;
	let numberData02 : number = 1900;
	let month : number[] = [];
	let day : number[] = [];
	let year : number[] = new Array();
	
	for(let index=1; index<=12; index++) {
		month.push(numberData01);
	}
	for(let index=1; index<=31; index++) {
		day.push(numberData01);
	}
	for(let index=1900; index<=2024; index++) {
		year.push(numberData02);
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
						<span>이 정보를 표시하거나 공유하지 않습니다. Sumblr 사용 연령 이상인지만 확인하면 돼요.</span>
					</div>
					<form className="email_login_birthday">
						<div className="email_input_box birthday_box">
							<select>
								<option>월</option>
								{month.map((month) => 
									<option>{month}</option>
								)}
							</select>
						</div>
						<div className="email_input_box birthday_box">
							<select>
								<option>일</option>
								{day.map((day) => 
									<option>{day}</option>
								)}
							</select>
						</div>
						<div className="email_input_box birthday_box">
							<select>
								<option>년도</option>
								{year.map((year) => 
									<option>{year}</option>
								)}
							</select>
						</div>
					</form>
					<div style={{
						display : "none"
					}}>
						<span>다음 생일까지 00일 남음!</span>
					</div>
					<div className="login_check_box">
						<span className="login_check_icon"><i className="bi bi-check-circle-fill"></i></span>&nbsp;
						<span className="login_check_text">Sumblr 서비스 약관에 동의하며 개인정보보호 정책을 읽었습니다.</span>
					</div>
					<div onClick={nextStep}>
						<span className="popup_text_white">다음 <i className="bi bi-arrow-right"></i></span>
					</div>
				</div>
			)}
			{step === 4 && (
				<div>
					<div className="login_text popup_text_white">
						<span>이름을 지어주세요.</span><br />
						<span>Sumblr에서 다른회원들에게 표시되는 이름이자 내 URL입니다. 나중에 바꿀 수 있어요.</span>
					</div>
					<form className="email_login_form">
						<div className="email_input_box nickname_input_box">
							<div className="at_icon">
								<span><i className="bi bi-at"></i></span>
							</div>
							<div className="nickname_input">
								<input type="text" className="nick_input" placeholder="블로그 이름"/>
							</div>
						</div>
						<div className="final_join_btn" onClick={nextStep}>
							<span>가입 <i className="bi bi-arrow-right"></i></span>
						</div>
					</form>
					<div className="join_notice">
						<span>이 웹사이트는 reCAPTCHA (자동등록방지) 보호를 사용하며, Google 서비스 약관 및 개인정보보호 정책을 따릅니다.</span>
					</div>
				</div>
			)}
		</div>
	)
}
