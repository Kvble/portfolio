import './NavButton.css';

function NavButton(props) {
  return (
    <a href="localhost:3000" className="navbutton">{props.text}</a>
  );
}

export default NavButton;