import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
	return (
		<div className='container_header'>
			<div className='logo_box'>
				<Link to="" className='link_text'>
					<span className='logo text_color01'>sumblr</span>
				</Link>
			</div>
			<nav>
				<div className='nav_contents'>
					<Link to="" className='link_text'>
						<span className='nav_list text_color01'><i className="bi bi-compass"></i> 둘러보기</span>
					</Link>
				</div>
				<div className='nav_contents'>
					<Link to="" className='link_text'>
						<span className='nav_list text_color01'><i className="bi bi-palette-fill"></i> 팔레트 바꾸기</span>
					</Link>
				</div>
			</nav>
		</div>
	)
}