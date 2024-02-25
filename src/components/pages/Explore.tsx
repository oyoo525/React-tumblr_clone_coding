import React from "react";
import Nav from "../temp/Nav.tsx";
import Main from "./all_user_page_component/Main.tsx";
import StaffPicks from "./all_user_page_component/StaffPicks.tsx";
import AnswerTime from "./all_user_page_component/AnswerTime.tsx";

export default function Explore({isLogin}) {
	const [nav, setNav] = React.useState("trending");

	return (
		<div className="explore_page">
			<Nav isLogin={isLogin} setNav={setNav} />
			<div className="container_page">
				{nav === 'trending' && <Main isLogin={isLogin} /> }
				{nav === 'staff_picks' && <StaffPicks />}
				{nav === 'answertime' && <AnswerTime />}
			</div>
		</div>
	)
}