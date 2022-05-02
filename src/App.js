import { useState } from "react";
import Map from "./components/Map";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [regionData, setRegionData] = useState({
    position: [13.0827, 80.2707],
    placeName: "Chennai",
  });

  const regionCoordinates = (coordinates) => {
    setRegionData(coordinates);
  };

  return (
    <div className="container">
      <h1 className="heading">Locate on Map</h1>
      <SearchBox coordinates={regionCoordinates} />
      <Map regionData={regionData} />
    </div>
  );
}

export default App;
