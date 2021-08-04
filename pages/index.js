import GoogleMapReact from "google-map-react";
import { apiKey } from "../apiKey.js";
import { useState } from "react";

export default function Index() {
  const ex1 = {
    center: {
      lat: 33.76176289096943,
      lng: -117.92945707982629,
    },
    zoom: 8,
  };
  const AnyReactComponent = ({ text, info }) => (
    <div
      style={{
        color: "red",
        cursor: "pointer",
        fontWeight: "800",
        fontSize: "1.5em",
      }}
      onClick={() => setstate({ ProjectID: text, ProjectInfo: info })}
    >
      {text}
    </div>
  );
  const data = {
    project: [
      {
        ProjectID: 6236,
        ProjectGroup: "CSUB J20",
        ProjectName: "SCI II Room 336",
        ProjectAddress: "9001 Stockdale Hwy, Bakersfield, CA 93311",
        lat: 35.34763148279404,
        lng: -119.1008342523971,
      },
      {
        ProjectID: 6078,
        ProjectGroup: "CSUF J20",
        ProjectName: "Campus Exterior Repair",
        ProjectAddress: "800 N State College Blvd, Fullerton, CA 92831",
        lat: 33.759963306897774,
        lng: -117.92870727216075,
      },
      {
        ProjectID: 6300,
        ProjectGroup: "LACCD M20",
        ProjectName: "ELAC Campus Wide Duct Cleaning",
        ProjectAddress: "770 Wilshire Blvd, Los Angeles, CA 90017",
        lat: 33.72466095133255,
        lng: -117.94675948336074,
      },
    ],
  };
  const [state, setstate] = useState({ ProjectID: "", ProjectInfo: "" });

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh", width: "60%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={ex1.center}
          defaultZoom={ex1.zoom}
        >
          {data.project.map(item => {
            return (
              <AnyReactComponent
                lat={item.lat}
                lng={item.lng}
                text={item.ProjectID}
                key={item.ProjectID}
                info={item.ProjectInfo}
              />
            );
          })}
        </GoogleMapReact>
      </div>
      <div style={{ height: "100vh", width: "40%" }}>
        <h1>{state.ProjectID}</h1>
        <h4>{state.ProjectInfo}</h4>
      </div>
    </div>
  );
}
