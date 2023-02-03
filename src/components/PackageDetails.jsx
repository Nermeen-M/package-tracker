import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faCalendarDays,
  faLocationDot,
  faClock,
  faComment,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { usePackages } from "../state/PackagesContext";

export default function PackageDetails() {
  const params = useParams();
  const { getPackageById } = usePackages();
  const parcel = getPackageById(params.packageId);

  const {
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_name,
    notes,
    last_updated,
  } = parcel;

  return (
    <section>
      <div className="header">
        <h2>{sender}</h2>
        <h3>{parcel_id}</h3>
      </div>
      <h3>{status}</h3>
      <div className="info-items">
        <span>
          <FontAwesomeIcon icon={faClock} />
          {last_updated}
        </span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
          {location_name}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDays} />
          {eta}
        </span>
        {notes && (
          <span>
            <FontAwesomeIcon icon={faComment} />
            {notes}
          </span>
        )}
        {verification_required && (
          <span>
            <FontAwesomeIcon icon={faExclamation} />
            Be sure to show your valid ID.
          </span>
        )}
      </div>
    </section>
  );
}
