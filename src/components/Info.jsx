import React, { useState } from "react";
import "./css/info.css";

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
      <div className="info">
        <div className="heading">Country Name</div>
        <div className="basic_data">
        <div className="left">
          <div className="flag_img">
            <img src="" alt=" " />
          </div>
          <p>Countries Full Name</p>
        </div>
        <div className="right">
          <div className="sub_heading">Basic Info</div>
          <div className="basic_info">
            <div className="left">
              <div>
                <span className="property">Name:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Official Name:</span>
                <span className="value">Islamic Republic of Pakistan and Pakistan is great</span>
              </div>
              <div>
                <span className="property">UN Member:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Currency:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Population:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Continent:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Independent:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Time Zone:</span>
                <span className="value">Pakistan</span>
              </div>
            </div>
            <div className="right">
              <div>
                <span className="property">Capital:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Region:</span>
                <span className="value"></span>
              </div>
              <div>
                <span className="property">Language:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Area:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Land Locked:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Driving Side:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Start of Week:</span>
                <span className="value">Pakistan</span>
              </div>
              <div>
                <span className="property">Name:</span>
                <span className="value">Pakistan</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="other_info">
          <div className="sub_heading">Other Info</div>
          <div className="cards">
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
            <div className="card">
              <h5>Heading</h5>
              <span>Bottom</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
