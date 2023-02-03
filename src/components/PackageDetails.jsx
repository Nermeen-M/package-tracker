import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faClock,
  faComment,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function PackageDetails({ parcel }) {
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
