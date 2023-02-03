import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Logo contains a green open box and application name"
      />
      {/* <span>Welcome</span> */}
    </header>
  );
}
