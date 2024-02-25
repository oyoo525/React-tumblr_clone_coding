import React from "react";
import './create_icon.css';

export default function CreateIcon({hideCreateIcon}) {

	return (
		<div className="popup_background">
			<div className="popup_layout" onClick={hideCreateIcon}>
				<div className="create_icon_box" onClick={(e) => e.stopPropagation()}>
					<div className="create_icon">
						<div className="icon_image_box create_icon_01">
							<span><i className="bi bi-alphabet"></i></span>
						</div>
						<div className="icon_text_box">
							<span>텍스트</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_02">
							<span><i className="bi bi-camera2"></i></span>
						</div>
						<div className="icon_text_box">
							<span>사진</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_03">
							<span><i className="bi bi-quote"></i></span>
						</div>
						<div className="icon_text_box">
							<span>인용구</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_04">
							<span><i className="bi bi-browser-chrome"></i></span>
						</div>
						<div className="icon_text_box">
							<span>링크</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_05">
							<span><i className="bi bi-chat-left-dots-fill"></i></span>
						</div>
						<div className="icon_text_box">
							<span>채팅</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_06">
							<span><i className="bi bi-volume-up-fill"></i></span>
						</div>
						<div className="icon_text_box">
							<span>오디오</span>
						</div>
					</div>
					<div className="create_icon">
						<div className="icon_image_box create_icon_07">
							<span><i className="bi bi-camera-reels-fill"></i></span>
						</div>
						<div className="icon_text_box">
							<span>동영상</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}