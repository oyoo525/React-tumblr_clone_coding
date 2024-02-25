import React from "react";
import './answer_card.css';
import img08 from '../../../assets/img/download08.png';
import AnswerModal from "./AnswerTimeModal/AnswerModal.tsx";

export default function AnswerCard() {
	const [isOpen, setIsOpen] = React.useState(false);
	const openModal = () => {
		setIsOpen(true);
	}

	return (
		<div className="answer_card">
			<div className="card_top bg_color02">
				<div className="card_title text_color01">
					<div className="dead_line">
						<span>2월 23일 오전 5:00 GMT+9</span>
					</div>
					<div className="answer_subject">
						<span className="">Pokemon GO</span>
					</div>
					<div className="answer_btn">
						<div className="btn01">
							질문하기
						</div>
						<div className="btn01">
							팔로우
						</div>
					</div>
				</div>
			</div>
			<div className="card_content">
				<img src={img08} className="profile_img" alt="answer_img" />
				<div className="what_answertime" onClick={openModal}>
					<span style={{color : "#FFF"}}>질문 시간이란?</span>
				</div>
			</div>
			{isOpen && <AnswerModal setIsOpen={setIsOpen} />}
		</div>




	)
}