import React from "react";
import { Link } from "react-router-dom";
import './header_nav.css';

export default function HeaderNav() {
	const [theme, setTheme] = React.useState("basic");

	function applyTheme() {
		const t = theme;
		t === "basic" ? setTheme("light") : setTheme("basic");
		console.log(theme);
		document.documentElement.className = theme;
	}

	return (
		<nav>
			<div className='nav_contents'>
				<div>
					<span className='nav_list text_color01'><i className="bi bi-compass"></i></span>
				</div>
				<div>
					<span className='nav_text nav_list text_color01'> 둘러보기</span>
				</div>
			</div>
			<div className='nav_contents' onClick={applyTheme}>
				<div>
					<span className='nav_list text_color01'><i className="bi bi-palette-fill"></i></span>
				</div>
				<div>
					<span className='nav_text nav_list text_color01'> 팔레트 바꾸기</span>
				</div>
			</div>
		</nav>
	)
}