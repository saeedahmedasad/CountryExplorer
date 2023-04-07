import React, { useState } from "react";
import "./css/info.css"

const Info = () => {
  const [countryInput, setCountryInput] = useState("");
  return (
    <>
      <div className="input">
        <input
          type="text"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
          placeholder="Enter Country Name"
          className="country_input"
        />
        <button className="get_data">Get Info</button>
      </div>
      <div className="info"></div>
    </>
  );
};

export default Info;
