import "../Styles/Navbar.css";
import { navlinks } from "../Utilities/static";
import logo from "../Images/logo.png";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar default_padding">
      <div className="col">
        <Link to="/">
          <img src={logo} alt="" className="nav_logo" />
        </Link>
      </div>
      <div className="col">
        <ul className="nav_list">
          {navlinks.map((link, indx) => (
            <Listitem item={link} key={indx} />
          ))}
        </ul>
        <div className="hamburger">
          <sapn className="line"></sapn>
          <sapn className="line"></sapn>
          <sapn className="line"></sapn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
