import React from "react";
import "./flight.css";

const FlightResult = ({ flightResults }) => {
  return (
    <div className="mainCont">
      <h2>Flight Search Results</h2>
      {flightResults && (
        <div className="flight-results">
          {flightResults && flightResults.data.flights && (
            <div className="flight-card">
              {flightResults.data.flights.map((flight, index) => (
                <div className="flight-item" key={index}>
                  <div className="flight-info">
                    <p>
                      <img
                        src={
                          flight.segments[0].legs[0].operatingCarrier.logoUrl
                        }
                        alt="Logo"
                      />
                    </p>
                    <span>
                      Flight Name:{" "}
                      {flight.segments[0].legs[0].operatingCarrier.displayName}
                    </span>
                    <span>
                      Flight Number: {flight.segments[0].legs[0].flightNumber}
                    </span>
                    <span>
                      Departure Time:{" "}
                      {flight.segments[0].legs[0].departureDateTime}
                    </span>
                    <span>
                      Arrival Time: {flight.segments[0].legs[0].arrivalDateTime}
                    </span>
                    <span>Price: ₹{flight.purchaseLinks[0].totalPrice}</span>
                    <p>
                      <a
                        href={flight.purchaseLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Purchase Here
                      </a>
                    </p>
                  </div>
                  <hr className="divider" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FlightResult;
