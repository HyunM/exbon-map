import GoogleMapReact from "google-map-react";
import { apiKey } from "../apiKey.js";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./index.module.css";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

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
    Distance,
    Duration,
  }) => (
    <div
      className={
        state.ProjectID == ProjectID
          ? styles["marker-label-select"]
          : styles["marker-label"]
      }
      style={{
        position: "absolute",
        width: 25,
        height: 25,
        left: -40 / 2,
        top: -40 / 2,

        border: "3px solid #f44336",
        borderRadius: 40,
        backgroundColor: "white",
        textAlign: "center",
        color: "#3f51b5",
        fontSize: 13,
        fontWeight: "500",
        padding: 4,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() =>
        setstate({
          ProjectID: ProjectID,
          ProjectGroup: ProjectGroup,
          ProjectName: ProjectName,
          ProjectAddress: ProjectAddress,
          Distance: Distance,
          Duration: Duration,
        })
      }
    >
      {ProjectID}
    </div>
  );
  const AnyReactComponent2 = () => (
    <div
      style={{
        position: "absolute",
        width: 30,
        height: 25,
        left: -40 / 2,
        top: -40 / 2,

        border: "3px solid #3639f4",
        borderRadius: 0,
        backgroundColor: "white",
        textAlign: "center",
        color: "#754fdf",
        fontSize: 11,
        fontWeight: "500",
        padding: 4,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      OFFICE
    </div>
  );

  useEffect(() => {}, []);
  const [state, setstate] = useState({
    ProjectID: "",
    ProjectGroup: "",
    ProjectName: "",
    ProjectAddress: "",
    Distance: "",
    Duration: "",
  });

  const [satelliteState, setSatelliteState] = useState(false);
  const [data, setData] = useState({ temp: 0 });
  const [loadAPI, setLoadAPI] = useState(false);

  useEffect(() => {
    let tempData = {
      project: [
        {
          ProjectID: 6236,
          ProjectGroup: "CSUB J20",
          ProjectName: "SCI II Room 336",
          ProjectAddress: "9001 Stockdale Hwy, Bakersfield, CA 93311",
          lat: 35.34763148279404,
          lng: -119.1008342523971,
          Distance: "",
          Duration: "",
        },
        {
          ProjectID: 6078,
          ProjectGroup: "CSUF J20",
          ProjectName: "Campus Exterior Repair",
          ProjectAddress: "800 N State College Blvd, Fullerton, CA 92831",
          lat: 33.88223690824987,
          lng: -117.88930859993005,
          Distance: "",
          Duration: "",
        },
        {
          ProjectID: 6300,
          ProjectGroup: "LACCD M20",
          ProjectName: "ELAC Campus Wide Duct Cleaning",
          ProjectAddress: "770 Wilshire Blvd, Los Angeles, CA 90017",
          lat: 34.048918222592384,
          lng: -118.25801648828637,
          Distance: "",
          Duration: "",
        },
      ],
      office: {
        lat: 33.76179647059898,
        lng: -117.92936766691095,
      },
      temp: 1,
    };
    let str = "";
    for (let i = 0; i < tempData.project.length; i++) {
      str += tempData.project[i].lat + "%2C" + tempData.project[i].lng + "%7C";
    }

    // axios({
    //   method: "get",
    //   url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=33.76179647059898,-117.92936766691095&destinations=${str}&key=AIzaSyDKt0n2IoLQNJ4EyeiuVfR6EX22JGe9jvU`,
    //   // url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=33.76179647059898,-117.92936766691095&destinations=${str}&key=AIzaSyDKt0n2IoLQNJ4EyeiuVfR6EX22JGe9jvU`,
    //   timeout: 5000, // 5 seconds timeout
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": "true",
    //   },
    // }).then(response => {
    //   for (let i = 0; i < tempData.project.length; i++) {
    //     tempData.project[i].Distance =
    //       response.data.rows[0].elements[i].distance.text;
    //     tempData.project[i].Duration =
    //       response.data.rows[0].elements[i].duration.text;
    //   }
    //
    // });
    setData(tempData);
  }, []);

  useEffect(() => {
    if (loadAPI != false) {
      let tempData = data;
      for (let i = 0; i < tempData.project.length; i++) {
        tempData.project[i].Distance =
          loadAPI.rows[0].elements[i].distance.text;
        tempData.project[i].Duration =
          loadAPI.rows[0].elements[i].duration.text;
      }

      setData(tempData);
    }
  }, [loadAPI]);

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    var origin1 = new google.maps.LatLng(
      33.76179647059898,
      -117.92936766691095
    );
    var destinationA = new google.maps.LatLng(
      35.34763148279404,
      -119.1008342523971
    );
    var destinationB = new google.maps.LatLng(
      33.88223690824987,
      -117.88930859993005
    );
    var destinationC = new google.maps.LatLng(
      34.048918222592384,
      -118.25801648828637
    );

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA, destinationB, destinationC],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      },
      callback
    );

    function callback(response, status) {
      // See Parsing the Results for
      // the basics of a callback function.

      setLoadAPI(response);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {console.log(data)}
      <div style={{ height: "98vh", width: "80%" }}>
        {data.temp == 1 && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={ex1.center}
            defaultZoom={ex1.zoom}
            options={
              satelliteState == true
                ? map => ({ mapTypeId: map.MapTypeId.HYBRID })
                : map => ({ mapTypeId: map.MapTypeId.ROADMAP })
            }
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {/* {data.project.map(item => {
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
          })} */}

            <AnyReactComponent
              lat={data.project[0].lat}
              lng={data.project[0].lng}
              key={data.project[0].ProjectID}
              ProjectID={data.project[0].ProjectID}
              ProjectGroup={data.project[0].ProjectGroup}
              ProjectName={data.project[0].ProjectName}
              ProjectAddress={data.project[0].ProjectAddress}
              Distance={data.project[0].Distance}
              Duration={data.project[0].Duration}
            />
            <AnyReactComponent
              lat={data.project[1].lat}
              lng={data.project[1].lng}
              key={data.project[1].ProjectID}
              ProjectID={data.project[1].ProjectID}
              ProjectGroup={data.project[1].ProjectGroup}
              ProjectName={data.project[1].ProjectName}
              ProjectAddress={data.project[1].ProjectAddress}
              Distance={data.project[1].Distance}
              Duration={data.project[1].Duration}
            />
            <AnyReactComponent
              lat={data.project[2].lat}
              lng={data.project[2].lng}
              key={data.project[2].ProjectID}
              ProjectID={data.project[2].ProjectID}
              ProjectGroup={data.project[2].ProjectGroup}
              ProjectName={data.project[2].ProjectName}
              ProjectAddress={data.project[2].ProjectAddress}
              Distance={data.project[2].Distance}
              Duration={data.project[2].Duration}
            />
            <AnyReactComponent2 lat={data.office.lat} lng={data.office.lng} />
          </GoogleMapReact>
        )}
      </div>
      <div style={{ height: "98vh", width: "20%", marginLeft: "20px" }}>
        <br />
        <TextField
          className={styles["right__project-id"]}
          id="ProjectID"
          label="Project ID"
          defaultValue={0}
          value={state.ProjectID}
        />
        <br />
        <br />
        <TextField
          className={styles["right__project-group"]}
          id="ProjectGroup"
          label="Project Group"
          defaultValue={0}
          value={state.ProjectGroup}
        >
          Project Group: {state.ProjectGroup}
        </TextField>
        <br />
        <br />
        <TextField
          className={styles["right__project-name"]}
          id="ProjectName"
          label="Project Name"
          defaultValue={0}
          value={state.ProjectName}
        >
          Project Name: {state.ProjectName}
        </TextField>
        <br />
        <br />
        <TextField
          className={styles["right__project-address"]}
          id="ProjectAddress"
          label="Project Address"
          defaultValue={0}
          value={state.ProjectAddress}
        >
          Project Address: {state.ProjectAddress}
        </TextField>

        <br />
        <br />
        <TextField
          className={styles["right__project-distance"]}
          id="ProjectDistance"
          label="Distance From HQ"
          defaultValue={0}
          value={state.Distance}
        >
          Distance: {state.Distance}
        </TextField>
        <br />
        <br />
        <TextField
          className={styles["right__project-duration"]}
          id="ProjectDuration"
          label="Duration From Office"
          defaultValue={0}
          value={state.Duration}
        >
          Duration : {state.Duration}
        </TextField>

        <div style={{ display: "flex", marginTop: "580px" }}>
          <p
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontWeight: "500",
              color: "#807a7a",
            }}
          >
            Satellite
          </p>
          <Switch
            checked={satelliteState}
            onChange={
              satelliteState == true
                ? () => setSatelliteState(false)
                : () => setSatelliteState(true)
            }
            name="check"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
    </div>
  );
}
