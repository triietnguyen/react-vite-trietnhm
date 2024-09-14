import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <ul>
      <li>
        <Link a className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link a to="/users">
          Users
        </Link>
      </li>
      <li>
        <Link a to="/products">
          Products
        </Link>
      </li>
    </ul>
  );
};

export default Header;
