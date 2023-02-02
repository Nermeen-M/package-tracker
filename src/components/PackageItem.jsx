import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function PackageItem({ item }) {
  const image = require("../assets/images/truck.png");

  return (
    <Link to={`/packages/${item.id}`}>
      <span className="icon">
        {/* <span className="circle"></span> */}
        <img src={image} alt="" />
      </span>
      <div>
        <h3>{item.sender}</h3>
        <span>{item.status}</span>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}
