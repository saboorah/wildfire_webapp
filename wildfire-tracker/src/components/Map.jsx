import { useEffect, useRef } from "react";
import OLMap from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

import LocationMarker from "./LocationMarker";

const MapView = ({ lon = -114.7948, lat = 57.6724, zoom = 6 }) => {
  const mapDivRef = useRef(null); //allows us to rendermap once

  useEffect(() => {
    const map = new OLMap({
      target: mapDivRef.current, //the container for the map
      layers: [
        new TileLayer({
          //map tiles
          source: new OSM(),
        }),
      ],
      view: new View({
        //fetches layer sources
        center: fromLonLat([lon, lat]), //Alberta
        zoom: zoom,
      }),
    });

    return () => map.setTarget(undefined); // cleanup
  }, []);

  //returning actual map to render
  return (
    <div ref={mapDivRef} className="map">
      <LocationMarker lon lat />
    </div>
  );
};

export default MapView;
