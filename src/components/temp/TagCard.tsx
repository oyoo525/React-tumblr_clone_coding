import React from "react";
import './tag_card.css';
import FeedContent from "./Feed/item/FeedContent.tsx";

export default function TagCard() {
  const colorCode: string = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

  return (
    <div className="tag_card_box" style={{ backgroundColor: colorCode }}>
			<div className="tag_card_content">
				<div className="tag_header">
					<span>{colorCode}</span>
				</div>
				<div className="tag_feed">
					<div>
						<FeedContent />
					</div>
					<div>
						<FeedContent />
					</div>
				</div>
				<div className="follow_btn" style={{color : colorCode}}>
					<span>팔로우</span>
				</div>
			</div>
    </div>
  );
}
