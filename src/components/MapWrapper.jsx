import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";
import LoadingScreen from "./layout/LoadingScreen";

// i dont see the need for 2 map components, the map and the wrapper but it works
export default function MapWrapper({ lat, lng }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCd4d70T2Rwen_vfzoGp8r3ldJ1XGXNDOQ",
  });

  if (!isLoaded) return <LoadingScreen />;
  return <Map lat={lat} lng={lng} />;
}
