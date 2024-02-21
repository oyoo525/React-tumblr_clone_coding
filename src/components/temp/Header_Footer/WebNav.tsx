import React from "react";
import { Link } from "react-router-dom";
import './web_nav.css';

export default function WebNav() {
	return (
		<div className="web_footer">
			<nav className="nav">
				<Link to="" className="link_text">
					<span>소개</span>
				</Link>
				<Link to="" className="link_text">
					<span>앱</span>
				</Link>
				<Link to="" className="link_text">
					<span>법적 고지</span>
				</Link>
				<Link to="" className="link_text">
					<span>개인정보보호</span>
				</Link>
				<Link to="" className="link_text">
					<span>도움말</span>
				</Link>
			</nav>
		</div>	
	)
}