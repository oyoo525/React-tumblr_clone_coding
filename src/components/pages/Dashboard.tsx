import React from "react";
import './dashboard.css';
import Nav from "../temp/Nav.tsx";
import StuffForYou from "./login_page_component/StuffForYou.tsx";
import Following from "./login_page_component/Following.tsx";
import Hubs from "./login_page_component/Hubs.tsx";
import CreateIconBox from "../temp/Icon/Create_Icon/CreateIconBox.tsx";
import Report from "../temp/Popup/Report.tsx";

export default function Dashboard({isLogin}) {
	const [nav, setNav] = React.useState("stuff_for_you");

	const [isOpen, setIsOpen] = React.useState(false);

	const popupOpen = () => {
		setIsOpen(true);
	}

	const closeReport = () => {
		setIsOpen(false);
	}

	return (
		<>
			<div className="dashboard_page">
				<Nav isLogin={isLogin} setNav={setNav} />
				<div className="container_page">
					<div className="speed_create_icon_box bg_color04">
						<div className="speed_create_icon" onClick={popupOpen}>
							<CreateIconBox />
						</div>
					</div>
					<div>
						{nav === "stuff_for_you" && <StuffForYou /> }
						{nav === 'following' && <Following />}
						{nav === 'hubs' && <Hubs />}
					</div>
				</div>
			</div>
				{isOpen && (
					<div className="popup_background">
						<div className="popup_layout" onClick={closeReport}>
							<div className="create_icon_box" onClick={(e) => e.stopPropagation()}>
								<Report closeReport={closeReport} />
							</div>
						</div>
					</div>
				)}

		</>
	)
}