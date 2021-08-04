import GoogleMapReact from "google-map-react";
import { apiKey } from "../apiKey.js";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Index() {
  const ex1 = {
    center: {
      lat: 33.76176289096943,
      lng: -117.92945707982629,
    },
    zoom: 8,
  };
  const AnyReactComponent = ({
    ProjectID,
    ProjectGroup,
    ProjectName,
    ProjectAddress,
  }) => (
    <div
      style={{
        color: "red",
        cursor: "pointer",
        fontWeight: "800",
        fontSize: "1.5em",
      }}
      onClick={() =>
        setstate({
          ProjectID: ProjectID,
          ProjectGroup: ProjectGroup,
          ProjectName: ProjectName,
          ProjectAddress: ProjectAddress,
        })
      }
    >
      {ProjectID}
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
  const [state, setstate] = useState({
    ProjectID: "",
    ProjectGroup: "",
    ProjectName: "",
    ProjectAddress: "",
  });

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh", width: "80%" }}>
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
                key={item.ProjectID}
                ProjectID={item.ProjectID}
                ProjectGroup={item.ProjectGroup}
                ProjectName={item.ProjectName}
                ProjectAddress={item.ProjectAddress}
              />
            );
          })}
        </GoogleMapReact>
      </div>
      <div style={{ height: "100vh", width: "20%" }}>
        <TextField
          id="ProjectID"
          label="Project ID"
          defaultValue={0}
          value={state.ProjectID}
        />
        <p>Project Group: {state.ProjectGroup}</p>
        <p>Project Name: {state.ProjectName}</p>
        <p>Project Address: {state.ProjectAddress}</p>
      </div>
    </div>
  );
}
