import React from "react";
import CreateIcon01, { CreateIcon02, CreateIcon03, CreateIcon04, CreateIcon05, CreateIcon06, CreateIcon07 } from "./CreateIconCollector.tsx";
import Report from "../../Popup/Report.tsx";

export default function CreateIconBox() {
	const [reportBox, setReportBox] = React.useState(false);
	const [reportType, setReportType] = React.useState(0);
	const changeReportType = (type : number) => {
		setReportType(type);
	}

	return (
		<>
		{!reportBox && (
			<div className="create_icon_box_box">
				<div onClick={() => changeReportType(1)}>
					<CreateIcon01 />
				</div>
				<div onClick={() => changeReportType(2)}>
					<CreateIcon02 />
				</div>
				<div onClick={() => changeReportType(3)}>
					<CreateIcon03 />
				</div>
				<div onClick={() => changeReportType(4)}>
					<CreateIcon04 />
				</div>
				<div onClick={() => changeReportType(5)}>
					<CreateIcon05 />
				</div>
				<div onClick={() => changeReportType(6)}>
					<CreateIcon06 />
				</div>
				<div onClick={() => changeReportType(7)}>
					<CreateIcon07 />
				</div>
			</div>
		)}
		{reportBox && (
			<div className="report_box_box">
				<Report />
			</div>
		)}

		</>
		)
	}

