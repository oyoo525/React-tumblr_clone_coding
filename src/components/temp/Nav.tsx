import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
	return (
		<div className="container_nav">
			<nav className="navbar navbar-expand-lg text_color01 top_menu_nav">
				<div className="navbar_flex_box">
					<div className="nav-item">
						<Link to="/trending" className="nav-link link_text"><span className="text_color01">trending</span></Link>
					</div>
					<div className="nav-item">
						<Link to="/staff-picks" className="nav-link link_text"><span className="text_color01">Staff-picks</span></Link>
					</div>
					<div className="nav-item">
						<Link to="/answertime" className="nav-link link_text"><span className="text_color01">answertime</span></Link>
					</div>
					<div className="nav-item">
						<span className="nav-link text_color01">더보기 <i className="bi bi-arrow-down-circle-fill"></i></span>
					</div>
				</div>
			</nav>
			<div className="grid_icon">
				<span className="text_color01"><i className="bi bi-grid-1x2"></i></span>
				<span className="text_color01"><i className="bi bi-view-stacked"></i></span>
			</div>
		</div>
	)
}