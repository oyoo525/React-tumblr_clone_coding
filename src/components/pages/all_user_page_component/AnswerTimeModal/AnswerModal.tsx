import React from "react";
import './answer_modal.css';

export default function AnswerModal({setIsOpen}) {

	const closeMdodal = () => {
		setIsOpen(false);
	}

	return (
		<div className="answer_modal_box">
			<div className="cumstomer_modal">
				<div className="modal_flex">
					<div className="modal_box">
						<div className="modal_header">
							<h4>질문 시간이란?</h4>
							<div className="modal_close_btn_box">
								<button onClick={closeMdodal}><i className="bi bi-x-lg"></i></button>
							</div>
						</div>
						<div className="modal_content">
							<span>전 세계 화제 인물들이 자신의 Tumblr 질문을 공개해 며칠간 모두의 질문을 받습니다. 궁금한 건 무엇이든. 그러면, 자신의 블로그에서 한 시간 동안 최대한 많은 질문에 실시간 답변합니다. 아 참! 질문은 조금 귀찮아도 영어로 해주세요.<br/><br/>
								어떤 질문을 할지 아직 못 정하셨어요? 이 페이지의 아카이브를 둘러보면 감이 오실 거예요. 질문 시간은 과감하고, 심오하고, 재밌고, 특이한 내용으로 채워진답니다. 과감히 물어보세요.<br/><br/>
								다시보기는 필수! 깨알 재미진 질문 시간이죠.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}