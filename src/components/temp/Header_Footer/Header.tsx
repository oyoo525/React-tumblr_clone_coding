import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import {Logo02 } from '../Logo/Logo.tsx';
import HeaderNav from './HeaderNav.tsx';
import MenuCanvasLeft from './MenuCanvasLeft.tsx';
import Logo01 from '../Logo/Logo.tsx';
import CreateFeed from '../Button/CreateFeed.tsx';

export default function Header() {

	return (
		<>
			<div className='container_header border_right'>
				<div className='header_box'>
					<div className='menu_canvas_left'>
						<MenuCanvasLeft />
					</div>
					<div className='logo01'>
						<Logo01 />
					</div>
					<div className='logo02'>
						<Logo02 />
					</div>
					<div className='header_nav'>
						<HeaderNav />
					</div>
					<div className='header_create_btn_box'>
						<CreateFeed />
					</div>
					<div className='header_search_icon'>
						<span className='text_color01'><i className="bi bi-search"></i></span>
					</div>
				</div>
			</div>
		</>
	)
}