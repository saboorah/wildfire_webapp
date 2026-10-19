import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fire from "./fire.png";
import { useEffect } from "react";

const customIcon = new Icon({
  iconUrl: fire,
  iconSize: [15, 15],
  //iconAnchor: [0, 38],
});

const pos = [57.6724, -114.7948];
const MapView = ({ center, zoom, eventData }) => {
  //const point = eventData[0].geometries[0].coordinates;
  const markers = [];
  eventData.map((e) => {
    if (e.categories[0].id == 8) {
      markers.push(e.geometries[0].coordinates);
    } else {
      null;
    }
  });

  //console.log(markers);

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
        {markers.map((p) => (
          <Marker position={[p[1], p[0]]} icon={customIcon}>
            {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>*/}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
