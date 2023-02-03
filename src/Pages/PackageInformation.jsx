import { useParams } from "react-router-dom";
import MapWrapper from "../components/MapWrapper";

export default function PackageInformation({ packages }) {
  const params = useParams();
  const product = packages.find((item) => item.id == params.packageId);
  const {
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_name,
    notes,
    last_updated,
    location_coordinate_latitude,
    location_coordinate_longitude,
  } = product;

  return (
    <div>
      <h2>Package Information</h2>
      <MapWrapper
        lat={location_coordinate_latitude}
        lng={location_coordinate_longitude}
      />
      <div>{location_name}</div>
      <div>
        <h2>{sender}</h2>
        <span>{parcel_id}</span>
      </div>
      <span>{status}</span>
      <span>{last_updated}</span>
      <span>{location_name}</span>
      <span>{eta}</span>
      {notes && <span>{notes}</span>}
      {verification_required && <span>Be sure to show your valid ID.</span>}
    </div>
  );
}
