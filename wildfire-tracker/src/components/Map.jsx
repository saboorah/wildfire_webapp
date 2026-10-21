import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fire from "./fire.png";
const customIcon = new Icon({
  iconUrl: fire,
  iconSize: [15, 15],
});

//import api key
const key = import.meta.env.STADIA_API_KEY;

//loop trough event data
//create list of wildfire marker objects with coordinates and descriptions from NASA EONET
const MapView = ({ center, zoom, eventData }) => {
  const markers = [];
  eventData.map((e) => {
    if (e.categories[0].id == 8) {
      const [lng, lat] = e.geometries[0].coordinates; //get longitude, latitude
      const marker = {
        coordinate: [lat, lng], //Leaflet uses [lat,lng]
        title: e.title,
        description: e.description,
      };
      markers.push(marker);
    } else {
      null;
    }
  });

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> 
          &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> 
          &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          &copy; <a href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by Magnific - Flaticon</a> contributors'
          url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=${key}`}
        />

        {/*display fire markers with descriptions*/}
        {markers.map((m) => (
          <Marker position={m.coordinate} icon={customIcon}>
            <Popup>
              {m.coordinate} <br /> {m.title} <br /> {m.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
