import React from "react";
import './pop_up.css';
import LoginModal from "../LoginModal/LoginModal.tsx";

export default function PopUp() {
	const [modalOpen, setModalOpen] = React.useState(false);
	const showModal = () => {
		setModalOpen(true);
	}

	return (
		<div className="container_fluid">
			<div className="member_under_bar">
				<div className="bar_text text_color01">
					Sumblr 사용자에 합류해 커뮤니티를 찾아보고 새 친구들을 만나세요.
				</div>
				<div className="member_buttons">
					<div className="member_join_btn" onClick={showModal} data-bs-toggle="modal" data-bs-target="#memberModal">
						<span>가입하기</span>
					</div>
					<div className="member_login_btn" onClick={showModal}  data-bs-toggle="modal" data-bs-target="#memberModal">
						<span>로그인</span>
					</div>
				</div>
				{modalOpen && <LoginModal modal={setModalOpen} />}
			</div>
		</div>
	)
}