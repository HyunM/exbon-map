const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");
import { apiKey } from "../apiKey.js";

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `95vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      const origin = {
        lat: 33.7379089,
        lng: -117.9548602,
      };
      const destination = { lat: 41.756795, lng: -78.954298 };
      const destination2 = { lat: 33.73922288, lng: -117.9547119 };

      DirectionsService.route(
        {
          origin: origin,
          destination: destination2,
          travelMode: google.maps.TravelMode.DRIVING,
          waypoints: [
            {
              location: new google.maps.LatLng(33.731713, -117.954614),
            },

            {
              location: new google.maps.LatLng(33.7264542, -117.95469),
            },
            {
              location: new google.maps.LatLng(33.7215794, -117.9546431),
            },
            {
              location: new google.maps.LatLng(33.716913, -117.9546024),
            },
            {
              location: new google.maps.LatLng(33.7341136, -117.9546168),
            },
          ],
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)(props => (
  <GoogleMap
    defaultZoom={7}
    options={{
      mapTypeControl: false,
      streetViewControl: false,
    }}
    // defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default MapWithADirectionsRenderer;
