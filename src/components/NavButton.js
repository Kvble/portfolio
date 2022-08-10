import "./NavButton.css";

import { Link } from "react-router-dom";

function NavButton(props) {
	if (props.link === "/") {
		return (
			<Link
				to={props.link}
				className="navbutton active"
				onClick={activate}>
				{props.text}
			</Link>
		);
	} else {
		return (
			<Link to={props.link} className="navbutton" onClick={(e) => activate(e)}>
				{props.text}
			</Link>
		);
	}
}

function activate(event) {
	let buttons = document.getElementsByClassName("navbutton");
	console.log(buttons);
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].classList.contains("active")) {
			buttons[i].classList.remove("active");
		}
	}
	event.target.classList.add("active");
	
}

export default NavButton;
