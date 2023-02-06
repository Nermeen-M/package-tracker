import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

// great
export default function Map({ lat, lng }) {
  const centerPosition = useMemo(() => ({ lat: lat, lng: lng }), []);

  return (
    <GoogleMap
      zoom={10}
      center={centerPosition}
      mapContainerClassName="map-container"
    >
      <MarkerF position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
}
