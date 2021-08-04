import GoogleMapReact from "google-map-react";
import { apiKey } from "../apiKey.js";

export default function Index() {
  const ex1 = {
    center: {
      lat: 33.76176289096943,
      lng: -117.92945707982629,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => (
    <div style={{ color: "red" }}>{text}</div>
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={ex1.center}
        defaultZoom={ex1.zoom}
      >
        <AnyReactComponent
          lat={33.76176289096943}
          lng={-117.92945707982629}
          text="Project1"
        />

        <AnyReactComponent
          lat={33.759963306897774}
          lng={-117.92870727216075}
          text="Project2"
        />
      </GoogleMapReact>
    </div>
  );
}
