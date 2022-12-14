import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav-header">
      <NavLink className="nav-header-item" to="/photos">
        Home
      </NavLink>
      <NavLink className="nav-header-item" to="/photos/add">
        Add Photo
      </NavLink>
    </nav>
  );
};
export default Header;
