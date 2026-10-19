import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fire from "./fire.png";

const customIcon = new Icon({
  iconUrl: fire,
  iconSize: [15, 15],
});

const pos = [57.6724, -114.7948];
const MapView = ({ center, zoom, eventData }) => {
  const markers = [];
  eventData.map((e) => {
    if (e.categories[0].id == 8) {
      const [lng, lat] = e.geometries[0].coordinates;
      const marker = {
        coordinate: [lat, lng],
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
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by Magnific - Flaticon</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
        {markers.map((m) => (
          <Marker position={m.coordinate} icon={customIcon}>
            <Popup>
              {m.title} <br /> {m.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
