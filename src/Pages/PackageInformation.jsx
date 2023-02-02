import { useParams } from "react-router-dom";

export default function PackageInformation({ packages }) {
  const params = useParams();
  const product = packages.find((item) => item.id == params.packageId);

  return (
    <div>
      Package Information
      <div>{product.sender}</div>
    </div>
  );
}
