import "./NavMenu.css";
import NavButton from "./NavButton";
import { useEffect } from "react";

function NavMenu() {
	useEffect(() => {
		let buttons = document.getElementsByClassName("navbutton");
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].getAttribute("href") === window.location.pathname) {
				buttons[i].classList.add("active");
			}
		}
	});
	return (
		<div className="navmenu">
			<NavButton text="Home" link="/" />
			<NavButton text="About" link="/about" />
			<NavButton text="Projects" link="/projects" />
			<NavButton text="Contact" link="/contact" />
		</div>
	);
}

export default NavMenu;
