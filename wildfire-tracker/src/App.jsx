import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState([]); //store wildfire events from NASA API
  const [loading, setLoading] = useState(false); //flag for fetching API data

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false); //finihed fetching API data
    };
    fetchEvents();
  }, []);

  return (
    <div className="app">
      {!loading ? (
        <Map center={[39.0175, -102.1359]} zoom={4} eventData={eventData} />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
