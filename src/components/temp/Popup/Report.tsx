import React, { useRef } from "react";
import './report.css';

export default function Report({closeReport}) {

	const textarea = useRef<HTMLTextAreaElement>(null);

	const handlResizeHeight = () => {
		if(textarea.current) {
			textarea.current.style.height = 'auto';
			textarea.current.style.height = Math.min(textarea.current.scrollHeight, 500) + 'px';
		}
	}

	const textTag = useRef<HTMLTextAreaElement>(null);

	const handlResizeWidth = () => {
		if(textTag.current) {
			textTag.current.style.height = 'auto';
			textTag.current.style.height = Math.min(textTag.current.scrollHeight, 20) + 'px';
			textTag.current.style.width = 'auto';
      textTag.current.style.width = Math.min(textTag.current.scrollWidth, 468) + 'px';
		}
	}

	return (
		<div className="report_box">
			<div className="report_header">
				<div className="member_id">
					oyoo525
				</div>
				<div>
					<span className="setting_icon"><i className="bi bi-gear-wide-connected"></i></span>
				</div>
			</div>
			<div className="report_content">
				<form>
					<div className="content_title">
						<input type="text" placeholder="제목"/>
					</div>
					<div className="content_feed">
						<div className="icon_box">
							<i className="icon_color01 bi bi-file-image"></i>&nbsp;
							<i className="icon_color02 bi bi-filetype-gif"></i>&nbsp;
							<i className="icon_color03 bi bi-link-45deg"></i>&nbsp;
							<i className="icon_color04 bi bi-file-music"></i>&nbsp;
							<i className="icon_color05 bi bi-file-play"></i>&nbsp;
							<i className="icon_color06 bi bi-list-task"></i>&nbsp;
							<i className="icon_color07 bi bi-file-text"></i>
						</div>
						<textarea placeholder="뭐든지 추가해보세요" rows={5} ref={textarea} onInput={handlResizeHeight}></textarea>
					</div>
					{/* <div className="content_footer_tag">
						<div className="tag_box">
							<textarea placeholder="#태그 추가" rows={1} ref={textTag} onInput={handlResizeWidth}></textarea>
							<div>
								<span><i className="bi bi-x-circle-fill"></i></span>
							</div>
						</div>
					</div> */}
				</form>
			</div>
			<div className="report_footer">
				<div className="buttons">
					<div className="btn01 close_btn" onClick={closeReport}>
						<span>닫기</span>
					</div>
					<div className="btn01 close_btn" onClick={closeReport}>
						<span>지금 포스팅</span>
					</div>
				</div>
			</div>
		</div>
	)
}