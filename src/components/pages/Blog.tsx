import React from "react";
import Nav from "../temp/Nav.tsx";
import NoFeed from "../temp/Feed/NoFeed.tsx";
import Feed from "../temp/Feed/Feed.tsx";
import { useParams } from "react-router-dom";

export default function Blog({isLogin}) {
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

	const {memberId} = useParams();
	const [member, setMember] = React.useState<string | undefined>(undefined);

	React.useEffect(() => {
		setMember(memberId);
	}, [memberId]);


	return (
		<div className="blog_box">
			<Nav isLogin={isLogin} setNav={setNav} />
				<div className="container_page">
					{member == "oyoo525" && <NoFeed />}
					{member == "admin" && (
						<>
							<Feed member="이순신" />
							<Feed member="이순신" />
							<Feed member="이순신" />
							<Feed member="이순신" />
						</>
						)}
					{member == "booktou" && (
						<>
							<Feed member="북투유" />
						</>
						)}
					{member == "dlaRjrwjd" && (
						<>
							<Feed member="임꺽정" />
							<Feed member="임꺽정" />
							<Feed member="임꺽정" />
							<Feed member="임꺽정" />
						</>
						)}
					{member == "hangul" && (
						<NoFeed />
						)}
					{!(member == "oyoo525" || member == "admin" || member == "booktou" || member == "dlaRjrwjd" || member == "hangul") &&
						(
							<>
							<Feed member={null} />
							<Feed member={null} />
							<Feed member={null} />
							<Feed member={null} />
							</>
						)
					}
				</div>
		</div>
	)
}