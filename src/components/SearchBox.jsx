import { useState } from "react";
import axios from "axios";
import "../SearchBox.css";

function SearchBox(props) {
  const [region, setRegion] = useState("");

  const getCoordinates = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=a692540c1a9e89f3a5b1dbac1be3bf18&query=${region}`
      )
      .then((data) =>
        props.coordinates({
          position: [data.data.data[0].latitude, data.data.data[0].longitude],
          placeName: data.data.data[0].name || region,
        })
      );
  };

  const changeRegionName = (e) => {
    const regionName = e.target.value;
    setRegion(regionName);
  };

  return (
    <form className="search-form" onSubmit={getCoordinates}>
      <input
        type="search"
        className="search"
        id="search"
        name="regionName"
        placeholder="Enter a place name"
        onChange={changeRegionName}
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default SearchBox;
