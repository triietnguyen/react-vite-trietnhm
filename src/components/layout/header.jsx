import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink a to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink a to="/users">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink a to="/books">
          Books
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
