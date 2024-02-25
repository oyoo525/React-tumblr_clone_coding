import React from "react";
import './create_feed.css';
import CreateIcon from "../Popup/CreateIcon.tsx";

export default function CreateFeed() {
	const [createIcon, setCreateIcon] = React.useState(false);

	const showCreateIcon = () => {
		setCreateIcon(true);
	}
	const hideCreateIcon = () => {
		setCreateIcon(false);
	}

	return (
		<>
			<div className="create_feed_btn_box btn01" onClick={showCreateIcon}>
				<span className="create_feed_btn_icon text_color01"><i className="bi bi-pencil-fill"></i></span>&nbsp;
				<span className="create_feed_btn_text text_color01">만들기</span>
			</div>
			<div className="create_popup">
				{createIcon && <CreateIcon hideCreateIcon={hideCreateIcon} />}
			</div>
		</>
	)
}