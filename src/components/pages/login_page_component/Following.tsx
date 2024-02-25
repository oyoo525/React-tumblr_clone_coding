import React from "react";
import './following.css';
import Feed from "../../temp/Feed/Feed.tsx";

export default function Following() {
	return (
		<div className="following_box">
			<div className="following_page_button">
				<h3 className="text_color01">발견</h3>
				<div className="button_box">
					<div className="button_style01">
						<span>Sumblr 업데이트</span>
					</div>
					<div className="button_style01">
						<span>스태프 추천</span>
					</div>
					<div className="button_style01">
						<span>요즘 뜨는 블로그</span>
					</div>
				</div>
			</div>
			<Feed />
			<Feed />
			<Feed />
			<Feed />
			<Feed />
		</div>
	)
}