import { Link } from "react-router-dom";
// import Package from "./Package";

export default function Packages({ packages }) {
  const items = packages.map((item) => (
    <Link key={item.id} to={`/packages/${item.id}`}>
      {item.sender}
    </Link>
  ));

  return (
    <section>
      <h2>Packages</h2>
      <div>{items}</div>
    </section>
  );
}
