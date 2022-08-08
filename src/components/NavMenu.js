import "./NavMenu.css";
import NavButton from "./NavButton";

function NavMenu() {
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
