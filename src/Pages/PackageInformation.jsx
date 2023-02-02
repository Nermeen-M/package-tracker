import { useParams } from "react-router-dom";

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
  } = product;
  console.log(product);

  return (
    <div>
      Package Information
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
