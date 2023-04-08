import React, { useState } from "react";
import "./css/info.css";

const Info = () => {
  const [countryInput, setCountryInput] = useState("");
  const [infoActive, setInfoActive] = useState(false);
  const [countryData, setCountryData] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetching, setErrorFetching] = useState(false)
  function getInfo() {
    setInfoActive(!infoActive);
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${countryInput}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()})
      .then((data) => {
        setErrorFetching(false)
        setCountryData(data);
        if(data.status === "404"){setIsLoading(true); console.log("hey");}else{setIsLoading(false)}
      })
      .catch((error) => {
        if (error.message === 'Not Found') {
          // Handle the 404 error
          console.log("ERROR");
          setIsLoading(false)
          setErrorFetching(true)
        } else {
          // Handle other errors
        }
      });
  }
  return (
    <>
      {infoActive ? (
        isLoading ? (
          <div className="loading_animation">
            <div className="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>

            <div className="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
          </div>
        ) : (
          errorFetching ? <div className="not_found">
            <h1>{countryInput} does not EXIST</h1>
            <button className="btn" onClick={()=> setInfoActive(false)}>Go Back</button>
          </div> :
          countryData.map((el, index) => {
            return (
              <div className="info" key={index}>
                <button
                  className="go_back"
                  onClick={() => setInfoActive(false)}
                >
                  Go Back
                </button>
                <div className="heading">{el.name["common"]}</div>
                <div className="basic_data">
                  <div className="left">
                    <div className="flag_img">
                      <img src={el.flags["png"]} alt=" " />
                    </div>
                    <p>{el.name["official"]}</p>
                  </div>
                  <div className="right">
                    <div className="sub_heading">Basic Info</div>
                    <div className="basic_info">
                      <div className="left">
                        <div>
                          <span className="property">Name:</span>
                          <span className="value">{el.name["common"]}</span>
                        </div>
                        <div>
                          <span className="value">
                            {el.name["official"]}
                          </span>
                        </div>
                        <div>
                          <span className="property">UN Member:</span>
                          <span className="value">{el.unMember ? "Yes" : "No"}</span>
                        </div>
                        <div>
                          <span className="property">Population:</span>
                          <span className="value">{el.population}</span>
                        </div>
                        <div>
                          <span className="property">Continent:</span>
                          <span className="value">{el.continents}</span>
                        </div>
                        <div>
                          <span className="property">Independent:</span>
                          <span className="value">{el.independent ? "Yes" : "No"}</span>
                        </div>
                        <div className="time_zone">
                          <span className="property">Time Zones:</span>
                          <span className="value">{el.timezones}</span>
                        </div>
                      </div>
                      <div className="right">
                        <div>
                          <span className="property">Capital:</span>
                          <span className="value">{el.capital}</span>
                        </div>
                        <div>
                          <span className="property">Region:</span>
                          <span className="value">{el.region}</span>
                        </div>
                        <div>
                          <span className="property">Language:</span>
                          <span className="value">{Object.keys(el.languages).map(prop => `${el.languages[prop]} `)}</span>
                        </div>
                        <div>
                          <span className="property">Area:</span>
                          <span className="value">{el.area} km<sup>2</sup></span>
                        </div>
                        <div>
                          <span className="property">Land Locked:</span>
                          <span className="value">{el.landlocked? "Yes": "No"}</span>
                        </div>
                        <div>
                          <span className="property">Driving Side:</span>
                          <span className="value">{el.car["side"]}</span>
                        </div>
                        <div>
                          <span className="property">Start of Week:</span>
                          <span className="value">{el.startOfWeek}</span>
                        </div>
                        <div>
                          <span className="property">Name:</span>
                          <span className="value">{el.name["common"]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="other_info">
                  <div className="sub_heading">Other Info</div>
                  <div className="cards">
                    <div className="card">
                      <h5>{el.latlng[0]}, {el.latlng[1]}</h5>
                      <span>Coordinates</span>
                    </div>
                    <div className="card">
                      <h5><a href={el.maps.googleMaps}>Google Maps</a></h5>
                      <span>Map</span>
                    </div>
                    <div className="card">
                      <h5>{el.idd["root"]}{el.idd['suffixes'][0]}</h5>
                      <span>Country Code</span>
                    </div>
                    <div className="card">
                      <h5>{el.subregion}</h5>
                      <span>Sub Region</span>
                    </div>
                    <div className="card">
                      <h5>{el.fifa}</h5>
                      <span>FIFA</span>
                    </div>
                    <div className="card">
                      <h5>{el.capital}</h5>
                      <span>Capital</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )
      ) : (
        <div className="input">
          <input
            type="text"
            value={countryInput}
            onChange={(e) => setCountryInput(e.target.value)}
            placeholder="Enter Country Name"
            className="country_input"
          />
          <button className="get_data" onClick={getInfo}>
            Get Info
          </button>
        </div>
      )}
    </>
  );
};

export default Info;
