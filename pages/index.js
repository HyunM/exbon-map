import GoogleMapReact from "google-map-react";

export default function Index() {
  const ex1 = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAHIuYBU49zzZldCGffztJ1lPo4F9whN5I" }}
        defaultCenter={ex1.center}
        defaultZoom={ex1.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
