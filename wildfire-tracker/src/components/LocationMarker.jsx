import React from "react";
import Icon from "ol/style/Icon.js";
import Point from "ol/geom/Point.js";
import Feature from "ol/Feature.js";
import Overlay from "ol/Overlay.js";
import Style from "ol/style/Style.js";

const LocationMarker = ({ lon, lat, onClick }) => {
  return <div className="loction_marker" onClick={onClick}></div>;
};

export default LocationMarker;
