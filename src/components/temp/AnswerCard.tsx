import React from "react";
import './answer_card.css';
import img08 from '../../assets/img/download08.png';
import { Link } from "react-router-dom";

export default function AnswerCard() {
	return (
		<div className="answer_card">
			<div className="card_top">
				<div className="card_title text_color01">
					<div className="dead_line">
						<span>2월 23일 오전 5:00 GMT+9</span>
					</div>
					<div className="answer_subject">
						<span className="">Pokemon GO</span>
					</div>
					<div className="answer_btn">
						<div className="">
							질문하기
						</div>
						<div className="">
							팔로우
						</div>
					</div>
				</div>
			</div>
			<div className="card_content">
				<Link to="">
					<img src={img08} className="profile_img" alt="answer_img" />
				</Link>
				<div className="what_answertime"data-bs-toggle="modal" data-bs-target="#answerModal">
					<span className="text_color01">질문 시간이란?</span>
				</div>
			</div>

			{/* What Is Answer Modal */}
			<div className="modal fade" id="answerModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header" style={{
							padding : "24px",
							border : "none",
							fontSize : "20px",
							fontWeight : "bolder"
						}}>
							<span className="modal-title" id="exampleModalLabel">질문 시간이란?</span>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body" style={{
							padding : "0 24px 24px 24px",
							fontSize : "16px",
							textAlign : "center"
						}}>
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