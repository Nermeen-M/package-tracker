import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { removeDashes } from "../scripts/helperFunctions";

import image from "../assets/images/truck.png";

export default function PackageItem({ item }) {
  const modiefiedStatus = removeDashes(item.status);
  return (
    <Link to={`/packages/${item.id}`} className="package-item">
      <span className="icon">
        <span className="circle"></span>
        <img src={image} alt="" />
      </span>
      <div className="text">
        <h3>{item.sender}</h3>
        <span>{modiefiedStatus}</span>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}
