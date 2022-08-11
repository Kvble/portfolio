import "./NavButton.css";

import { Link } from "react-router-dom";

var buttons;

function NavButton(props) {
	return (
		<Link
			to={props.link}
			className="navbutton"
			onClick={(e) => activate(e)}>
			{props.text}
		</Link>
	);
}

function activate(event) {
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].classList.contains("active")) {
			buttons[i].classList.remove("active");
		}
	}
	event.target.classList.add("active");
}

export default NavButton;
