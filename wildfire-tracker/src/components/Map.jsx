import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fire from "./fire.png";

const customIcon = new Icon({
  iconUrl: fire,
  iconSize: [25, 25],
  //iconAnchor: [0, 38],
});

const pos = [57.6724, -114.7948];
const MapView = ({ center = pos, zoom = 6 }) => {
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by Magnific - Flaticon</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} icon={customIcon}>
          {/*<Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>*/}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
