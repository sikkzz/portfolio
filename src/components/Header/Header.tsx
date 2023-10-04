import { useState } from "react";
import { HeaderDiv, InnerDiv, LogoDiv, Nav, MNavDiv } from "./Header.styles";

import { headerTabData } from "@/constants/data/HeaderData";

const Header = () => {
	const [show, setShow] = useState<boolean>(false);

	const toggleMenu = () => {
		setShow((prevShow) => !prevShow);
	};

	return (
		<HeaderDiv role="banner">
			<InnerDiv>
				<LogoDiv>
					<h1>
						<a href="/">Sik&apos;s Portfolio</a>
					</h1>
				</LogoDiv>
				<Nav role="navigation" aria-label="메인 메뉴" $show={show}>
					<ul>
						{headerTabData.map((nav) => (
							<li key={nav.title}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</Nav>
				<MNavDiv
					aria-controls="primary-menu"
					aria-expanded={show ? "true" : "false"}
					role="button"
					tabIndex={0}
					onClick={toggleMenu}
				>
					<span />
				</MNavDiv>
			</InnerDiv>
		</HeaderDiv>
	);
};

export default Header;
