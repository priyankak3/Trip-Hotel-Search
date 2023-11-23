import React, { useEffect, useState } from "react";
import "./headertravel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faPlane,
  faTrain,
  faCalendarDays,
  faPerson,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import FlightResult from "../../page/travelList/FlightResult";

const searchFlights = async (
  sourceAirportCode,
  destinationAirportCode,
  date,
  itineraryType,
  sortOrder,
  classOfService,
  numAdults
) => {
  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights",
    params: {
      sourceAirportCode,
      destinationAirportCode,
      date,
      itineraryType,
      sortOrder,
      numAdults,
      numSeniors: "0", // Assuming seniors are 0 for this case
      classOfService,
      pageNumber: "1", // Assuming default page number is 1
      currencyCode: "INR",
    },
    headers: {
      "X-RapidAPI-Key": "e4cf82759cmsh9d9950222bf6443p14e4d9jsn10b479645c1a",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Headertravel = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });
  const [arrive, setArrive] = useState("BOM");
  const [dest, setDest] = useState("DEL");
  const [dates1, setDates1] = useState("2023-11-24");
  const [selectedItinerary, setSelectedItinerary] = useState("ONE_WAY");
  const [selectedSortOrder, setSelectedSortOrder] = useState("PRICE");
  const [selectedClassOfService, setSelectedClassOfService] =
    useState("ECONOMY");
  const [flightResults, setFlightResults] = useState(null);

  useEffect(() => {
    setArrive("BOM");
    setDest("DEL");
    setDates1("2023-11-24");

    searchFlights(
      arrive,
      dest,
      dates1,
      selectedItinerary,
      selectedSortOrder,
      selectedClassOfService,
      options.adult
    )
      .then((response) => {
        setFlightResults(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [
    arrive,
    dest,
    dates1,
    selectedItinerary,
    selectedSortOrder,
    selectedClassOfService,
    options.adult,
  ]);
  console.log(dates1);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = async () => {
    try {
      const response = await searchFlights(
        arrive,
        dest,
        dates1,
        selectedItinerary,
        selectedSortOrder,
        selectedClassOfService,
        options.adult
      );
      setFlightResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(flightResults);
  return (
    <div>
      <div className="header">
        <div className="beach-image">
          <img
            src="https://c.animaapp.com/BWfkNfae/img/rectangle-86.png"
            alt=""
          />
        </div>
        <div className="content">
          <h2>A lifetime of discounts?It's Genius.</h2>
          <h3>
            Get rewarded for your travels-unlock instant savings of 10% or more
            with a free Travello account
          </h3>
        </div>
      </div>

      <div className="searchContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <Link to="/">
              <span>Hotels</span>
            </Link>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faPlane} />
            <Link
              to="/travel"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Flights
            </Link>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faTrain} />
            <span>Trains</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faHotel} />
            <span>Packages</span>
          </div>
        </div>

        {
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faLocation} className="headerIcon" />
              <input
                type="text"
                placeholder="From"
                className="headerSearchInput"
                onChange={(e) => setArrive(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faLocation} className="headerIcon" />
              <input
                type="text"
                placeholder="To"
                className="headerSearchInput"
                onChange={(e) => setDest(e.target.value)}
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <input
                type="date"
                placeholder="Depart Date"
                className="headerSearchInput"
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  setDates1(selectedDate);
                }}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >
                {`${options.adult} adult · ${options.children} children `}
              </span>

              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <label htmlFor="selectedItinerary" className="okok">
                Select Itinerary
              </label>
              <select
                value={selectedItinerary}
                onChange={(e) => setSelectedItinerary(e.target.value)}
              >
                <option value="ROUND_TRIP">Round Trip</option>
                <option value="ONE_WAY">One Way</option>
              </select>
            </div>
            <div className="headerSearchItem">
              <label htmlFor="selectedSortOrder" className="okok">
                Select Sort Order
              </label>
              <select
                value={selectedSortOrder}
                onChange={(e) => setSelectedSortOrder(e.target.value)}
              >
                <option value="price">Price</option>
                <option value="duration">Duration</option>
              </select>
            </div>
            <div className="headerSearchItem">
              <label htmlFor="classOfService" className="okok">
                Class Of Service
              </label>
              <select
                value={selectedClassOfService}
                onChange={(e) => setSelectedClassOfService(e.target.value)}
              >
                <option value="ECONOMY">ECONOMY</option>
                <option value="BUSINESS">BUSINESS</option>
                <option value="FIRST">FIRST</option>
                {/* Add other class of service options */}
              </select>
            </div>
          </div>
        }
        <div className="Search-btn">
          <button className="search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {flightResults && <FlightResult flightResults={flightResults} />}
    </div>
  );
};

export default Headertravel;
