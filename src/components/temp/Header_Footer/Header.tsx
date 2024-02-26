import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import {Logo02 } from '../Logo/Logo.tsx';
import HeaderNav from './HeaderNav.tsx';
import MenuCanvasLeft from './MenuCanvasLeft.tsx';
import Logo01 from '../Logo/Logo.tsx';
import CreateFeed from '../Button/CreateFeed.tsx';
import { Link } from 'react-router-dom';

export default function Header({isLogin, setIsLogin}) {

	return (
		<>
			<div className='container_header border_right'>
				<div className='header_box'>
					<div className='menu_canvas_left'>
						<MenuCanvasLeft isLogin={isLogin} setIsLogin={setIsLogin}  />
					</div>
					<div className='logo01'>
						<Link to={isLogin ? "/dashboard" : "/"} className='link_text'><Logo01 /></Link>
					</div>
					<div className='logo02'>
						<Link to={isLogin ? "/dashboard" : "/"} className='link_text'><Logo02 /></Link>
					</div>
					<div className='header_nav'>
						<HeaderNav isLogin={isLogin} setIsLogin={setIsLogin}/>
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