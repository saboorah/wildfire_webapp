import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = ({center, zoom}) => {
  return (
    <div className="map">
        <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/base-v4/256/{z}/{x}/{y}.png?key=SJahobuBym7ct9PZWuoN"
            />
        </MapContainer>

    </div>
  )
}

MapView.defaultProps = {
    //currently set center as Alberta, CA
    center: {
        lat: 57.6724,
        lng: -114.7948
    },
    zoom: 5
}

export default MapView