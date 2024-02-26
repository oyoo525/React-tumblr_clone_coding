import React from "react";
import './menu_canvas_left.css';
import HeaderNav from "./HeaderNav.tsx";
import WebNav from "./WebNav.tsx";

export default function MenuCanvasLeft({isLogin, setIsLogin}) {
	return (
		<>
			<span className="text_color01 list_icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
				<i className="bi bi-list"></i>
			</span>

			<div className="offcanvas offcanvas-start bg_color00 border_right" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
				<div className="offcanvas-header">
					<span className="btn-close text_color01" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg"></i></span>
				</div>
				<div className="offcanvas-body">
					<div className="canvas_login_btn">
						<span>{isLogin ? '로그아웃' : '로그인'}</span>
					</div>
					<div className="offcanvas_header_nav">
						<HeaderNav isLogin={isLogin} setIsLogin={setIsLogin} />
					</div>
					<div className="offcanvas_web_nav">
						<WebNav />
					</div>
				</div>
			</div>
		</>
	)
}