import React from "react";
import './create_icon.css';
import CreateIcon01, {CreateIcon02, CreateIcon03, CreateIcon04, CreateIcon05, CreateIcon06, CreateIcon07} from "../Icon/Create_Icon/CreateIconCollector.tsx";
import Report from "./Report.tsx";

export default function CreateIcon({hideCreateIcon}) {
	const [isReport, setIsReport] = React.useState(false);
	const openReport = () => {
		setIsReport(true);
	}
	const [reportType, setReportType] = React.useState("");

	return (
		<div className="popup_background">
			<div className="popup_layout" onClick={hideCreateIcon}>
				<div className="create_icon_box" onClick={(e) => e.stopPropagation()}>
					{!isReport && (
						<>
							<CreateIcon01 />
							<CreateIcon02 />
							<CreateIcon03 />
							<CreateIcon04 />
							<CreateIcon05 />
							<CreateIcon06 />
							<CreateIcon07 />
							</>
					)}
					{isReport && <Report />}
				</div>
			</div>
		</div>
	)
}