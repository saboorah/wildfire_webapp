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
      setLoading[false]; //finihed fetching API data
      //console.log(events[0].categories[0].title);
    };
    fetchEvents();
  }, []);

  return (
    <div className="app">
      <Map />
    </div>
  );
}

export default App;
