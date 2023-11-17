import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

async function searchDestination(query) {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query },
    headers: {
      "X-RapidAPI-Key": "d2ee623077msh2c821438ec02590p15b628jsne1fb3565a190",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function searchHotels(destId, arrivalDate, departureDate) {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: destId,
      search_type: "CITY",
      arrival_date: arrivalDate,
      departure_date: departureDate,
      adults: "1",
      children_age: "0,17",
      room_qty: "1",
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
    },
    headers: {
      "X-RapidAPI-Key": "d2ee623077msh2c821438ec02590p15b628jsne1fb3565a190",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state?.destination || "");
  const [dates, setDates] = useState(location.state?.dates || []);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state?.options || {});
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const showAllHotels = location.pathname === "/hotels";
  const [destinationData, setDestinationData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);

  // useEffect(() => {
  //   const fetchDestinationData = async () => {
  //     try {
  //       const response = await searchDestination(destination);
  //       setDestinationData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const fetchHotel = async () => {
  //     if (destinationData && dates[0]) {
  //       try {
  //         const hotelsResponse = await searchHotels(
  //           destinationData[0].dest_id,
  //           format(dates[0].startDate, "yyyy-MM-dd"),
  //           format(dates[0].endDate, "yyyy-MM-dd")
  //         );

  //         setHotelsData(hotelsResponse.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchDestinationData();
  //   fetchHotel();
  // }, [destinationData, hotelsData]);

  const apiUrl = showAllHotels
    ? "http://localhost:8080/hotels"
    : `http://localhost:8080/hotels?city=${destination}&min=${min || 0}&max=${
        max || 99999
      }`;

  const { data, loading, reFetch } = useFetch(apiUrl);

  // console.log(destinationData);

  const handleClick = async () => {
    reFetch();
  };

  console.log(hotelsData.hotels);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {
                  dates && dates[0]
                    ? `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                        dates[0].endDate,
                        "MM/dd/yyyy"
                      )}`
                    : "No dates selected" // or any other default message
                }
              </span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
              // <>
              //   {hotelsData.hotels &&
              //     hotelsData.hotels.map((item) => (
              //       <SearchItem item={item} key={item.hotel_id} />
              //     ))}
              // </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
