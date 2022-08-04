import './NavMenu.css';
import NavButton from './NavButton';

function NavMenu() {
  return (
    <div className="navmenu">
        <NavButton text="About" />
        <NavButton text="Work" />
        <NavButton text="Contact" />
        <div className="dot"></div>
    </div>
  );
}

export default NavMenu;