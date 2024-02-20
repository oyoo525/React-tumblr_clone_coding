import React from "react";
import Nav from "../temp/Nav.tsx";
import Feed from "../temp/Feed.tsx";

export default function StaffPicks() {
	return (
		<>
		<div className="">
			<Nav />
			<div className="container_page">
				<div className="feed_box">				
					<Feed />
					<Feed />
				</div>


			</div>
		</div>
		</>
	)
}