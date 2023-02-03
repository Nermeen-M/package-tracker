import { Link } from "react-router-dom";

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

      {/* <span>Welcome</span> */}
    </header>
  );
}
