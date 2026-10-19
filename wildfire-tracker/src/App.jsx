import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  //const URL = "https://eonet.gsfc.nasa.gov/api/v2.1/events";
  const [eventData, setEventData] = useState([]); //store wildfire events from NASA API
  const [loading, setLoading] = useState(false); //flag for fetching API data

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false); //finihed fetching API data
      //console.log(events[0].categories[0].title);
      //console.log(events[0].geometries[0].coordinates);
    };
    fetchEvents();
  }, []);

  return (
    <div className="app">
      {!loading ? (
        <Map center={[57.6724, -114.7948]} zoom={4} eventData={eventData} />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
