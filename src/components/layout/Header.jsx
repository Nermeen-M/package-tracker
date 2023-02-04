import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img
          src={logo}
          alt="Logo contains a green open box and application name"
        />
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </header>
  );
}
