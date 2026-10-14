import { useEffect, useRef } from 'react'
import OLMap from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import { fromLonLat } from 'ol/proj.js'
import 'ol/ol.css'

const MapView = () => {
  const mapDivRef = useRef(null)

  useEffect(() => {
    const map = new OLMap({
      target: mapDivRef.current, //the container for the map
      layers: [
        new TileLayer({ //map tiles
          source: new OSM() })],
      view: new View({ //fetches layer sources
        center: fromLonLat([-114.7948, 57.6724]), // [lon, lat], Alberta
        zoom: 6,
      }),
    })

    return () => map.setTarget(undefined) // cleanup
  }, [])

  return <div ref={mapDivRef} className="map" />
}

export default MapView