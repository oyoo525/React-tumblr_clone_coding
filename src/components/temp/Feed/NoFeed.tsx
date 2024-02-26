import React from "react";
import './no_feed.css';

export default function NoFeed() {
	return (
		<div className="no_feed_box bg_color02 text_color01">
			<div className="no_feed_content">
				<div className="no_feed_icon">
					<span><i className="bi bi-file-earmark-x-fill"></i></span>
				</div>
				<div>
					<h4>포스트가 없습니다.</h4>
					<span>포스트 작성법 알아보기</span>
				</div>
			</div>
		</div>
	)
}

export function NoMesssage() {
	return (
		<div className="no_feed_box bg_color02 text_color01">
			<div className="no_feed_content">
				<div className="no_feed_icon">
					<span><i className="bi bi-file-earmark-x-fill"></i></span>
				</div>
				<div>
					<h4>메세지가 없습니다.</h4>
					<span>자세히</span>
				</div>
			</div>
		</div>
	)
}