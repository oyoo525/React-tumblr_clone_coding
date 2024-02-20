import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
	return (
		<div className="">
			<nav className="navbar navbar-expand-lg text_color01">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/trending" className="nav-link link_text"><span className="text_color01">trending</span></Link>
						</li>
						<li className="nav-item">
							<Link to="/staff-picks" className="nav-link link_text"><span className="text_color01">Staff-picks</span></Link>
						</li>
						<li className="nav-item">
							<Link to="/answertime" className="nav-link link_text"><span className="text_color01">answertime</span></Link>
						</li>
						<li className="nav-item">
							<span className="nav-link text_color01">더보기 <i className="bi bi-arrow-down-circle-fill"></i></span>
						</li>
					</ul>
				</div>
				<div className="grid_icon">
					<i className="bi bi-grid-1x2"></i>
					<i className="bi bi-view-stacked"></i>
				</div>
			</nav>
		</div>
	)
}