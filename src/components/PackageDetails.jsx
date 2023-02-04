import { useParams } from "react-router-dom";
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
import { removeDashes } from "../scripts/helperFunctions";

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

  const modifiedEta = moment(eta).format("lll");
  const modifiedLastUpdated = moment(last_updated).format("lll");

  return (
    <section>
      <div className="header">
        <h2>{sender}</h2>
        <h3>{parcel_id}</h3>
      </div>
      <h3>{removeDashes(status)}</h3>
      <div className="info-items">
        <span>
          <FontAwesomeIcon icon={faClock} />
          {modifiedLastUpdated}
        </span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
          {location_name}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDays} />
          ETA: {modifiedEta}
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
