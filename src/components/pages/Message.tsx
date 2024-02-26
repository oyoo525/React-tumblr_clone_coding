import React from "react";
import Nav from "../temp/Nav.tsx";
import { NoMesssage } from "../temp/Feed/NoFeed.tsx";

export default function Message({isLogin}) {
	const [nav, setNav] = React.useState("stuff_for_you");

	const initNav = () => {
		if(isLogin) {
			setNav("stuff_for_you")
		} else (
			setNav("trending")
		)
	}

	React.useEffect(() => {
		initNav();
	}, []);

	return (
		<div className="blog_box">
			<Nav isLogin={isLogin} setNav={setNav} />
				<div className="container_page">
					<NoMesssage />
				</div>
		</div>
	)
}