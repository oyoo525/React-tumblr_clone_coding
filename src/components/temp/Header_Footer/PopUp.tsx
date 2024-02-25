import React from "react";
import './pop_up.css';
import LoginModal from "../LoginModal/LoginModal.tsx";

export default function PopUp({setIsLogin}) {

	const [modalOpen, setModalOpen] = React.useState(false);
	const showModal = () => {
		setModalOpen(true);
		console.log("showModal", modalOpen);
	}
	const hideModal = () => {
		setModalOpen(false);
		console.log("closeModal", modalOpen);
	}

	return (
		<>
			<div className="container_fluid">
				<div className="member_under_bar">
					<div className="bar_text text_color01">
						Sumblr 사용자에 합류해 커뮤니티를 찾아보고 새 친구들을 만나세요.
					</div>
					<div className="member_buttons">
						<div className="member_join_btn" onClick={showModal}>
							<span>가입하기</span>
						</div>
						<div className="member_login_btn" onClick={showModal}>
							<span>로그인</span>
						</div>
					</div>
				</div>
			</div>
			{modalOpen && <LoginModal isOpen={setModalOpen} isClose={hideModal} setIsLogin={setIsLogin} />}
		</>
	)
}