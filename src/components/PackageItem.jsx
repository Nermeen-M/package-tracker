import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import image from "../assets/images/truck.png";

export default function PackageItem({ item }) {
  return (
    <Link to={`/packages/${item.id}`} className="package-item">
      <span className="icon">
        <span className="circle"></span>
        <img src={image} alt="" />
      </span>
      <div className="text">
        <h3>{item.sender}</h3>
        <span>{item.status}</span>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}
