import React from "react";
import Nav from "../temp/Nav.tsx";
import StuffForYou from "./login_page_component/StuffForYou.tsx";
import CreateIcon01, {CreateIcon02, CreateIcon03, CreateIcon04, CreateIcon05, CreateIcon06, CreateIcon07} from "../temp/Icon/Create_Icon/CreateIconCollector.tsx";
import Following from "./login_page_component/Following.tsx";
import Hubs from "./login_page_component/Hubs.tsx";
import CreateIcon from "../temp/Popup/CreateIcon.tsx";

export default function Dashboard({isLogin}) {
	const [nav, setNav] = React.useState("stuff_for_you");

	const [createIcon, setCreateIcon] = React.useState(false);

	const showCreateIcon = () => {
		setCreateIcon(true);
	}
	const hideCreateIcon = () => {
		setCreateIcon(false);
	}


	return (
		<>
		<div className="dashboard_page">
			<Nav isLogin={isLogin} setNav={setNav} />
			<div className="container_page">
				<div className="speed_create_icon_box bg_color04" onClick={showCreateIcon}>
						<div className="create_icon_box">
							<CreateIcon01 />
							<CreateIcon02 />
							<CreateIcon03 />
							<CreateIcon04 />
							<CreateIcon05 />
							<CreateIcon06 />
							<CreateIcon07 />
						</div>
					</div>
					<div>
						{nav === "stuff_for_you" && <StuffForYou /> }
						{nav === 'following' && <Following />}
						{nav === 'hubs' && <Hubs />}
					</div>
			</div>
		</div>
		<div className="create_popup">
			{createIcon && <CreateIcon hideCreateIcon={hideCreateIcon} />}
		</div>
		</>
	)
}