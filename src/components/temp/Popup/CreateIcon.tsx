import React from "react";
import './create_icon.css';
import CreateIcon01, {CreateIcon02, CreateIcon03, CreateIcon04, CreateIcon05, CreateIcon06, CreateIcon07} from "../Icon/Create_Icon/CreateIconCollector.tsx";
import Report from "./Report.tsx";
import CreateIconBox from "../Icon/Create_Icon/CreateIconBox.tsx";

export default function CreateIcon({hideCreateIcon}) {
	const [isReoportOpen, setIsReportOpen] = React.useState(false);

	const openReport = () => {
		setIsReportOpen(true);
	}
	const closeReport = () => {
		hideCreateIcon();
	}

	return (
		<div className="popup_background">
			<div className="popup_layout" onClick={hideCreateIcon}>
				<div className="create_icon_box" onClick={(e) => e.stopPropagation()}>
					{!isReoportOpen && (
						<div className="create_popup" onClick={openReport}>
							<CreateIconBox />
						</div>
					)}
					{isReoportOpen && <Report closeReport={closeReport} />}
				</div>
			</div>
		</div>
	)
}