import React from "react";
import './tag_card.css';
import FeedContent from "./Feed/item/FeedContent.tsx";

export default function TagCard() {
  const colorCode: string = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

	const random01 = Math.random()*100;
	const random02 = Math.random()*100;
	const contentImg01 = "https://source.unsplash.com/random/300x1200, " + random01;
	const contentImg02 = "https://source.unsplash.com/random/300x1200, " + random02;


  return (
    <div className="tag_card_box" style={{ backgroundColor: colorCode }}>
			<div className="tag_card_content">
				<div className="tag_header">
					<span>{colorCode}</span>
				</div>
				<div className="tag_feed">
					<div>
						<img src={contentImg01} alt="태그이미지" />
					</div>
					<div>
						<img src={contentImg02} alt="태그이미지" />
					</div>
				</div>
				<div className="follow_btn" style={{color : colorCode}}>
					<span>팔로우</span>
				</div>
			</div>
    </div>
  );
}
