import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    // <div className="searchItem">
    //   {item.property &&
    //     item.property.photoUrls &&
    //     item.property.photoUrls.length > 0 && (
    //       <img src={item.property.photoUrls} alt="" className="siImg" />
    //     )}
    //   <div className="siDesc">
    //     <h1 className="siTitle">
    //       {item && item.property.name ? item.property.name : "no name"}
    //     </h1>
    //     <span className="siDistance">{item.property.reviewCount} Reviews</span>
    //     <span className="siTaxiOp">Free airport taxi</span>
    //     <span className="siSubtitle">{item.accessibilityLabel}</span>
    //     <span className="siFeatures">{item.property.reviewScoreWord}</span>
    //     <span className="siCancelOp">Free cancellation </span>
    //     <span className="siCancelOpSubtitle">
    //       You can cancel later, so lock in this great price today!
    //     </span>
    //   </div>
    //   <div className="siDetails">
    //     {item.property.reviewScore ? (
    //       <div className="siRating">
    //         <span>Excellent</span>
    //         <button>{item.property.reviewScore}</button>
    //       </div>
    //     ) : (
    //       <div className="siRating">
    //         <span>Excellent</span>
    //         <button>1</button>
    //       </div>
    //     )}
    //     <div className="siDetailTexts">
    //       <span className="siPrice">
    //         Rs.{item.property.priceBreakdown.grossPrice.value.toFixed(1)}
    //       </span>
    //       <span className="siTaxOp">Includes taxes and fees</span>
    //       <Link to={`/hotels/find/${item.hotel_id}`}>
    //         <button className="siCheckButton">See availability</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="searchItem">
      {item && item.photos && item.photos.length > 0 && (
        <img src={item.photos[0]} alt="" className="siImg" />
      )}
      <div className="siDesc">
        <h1 className="siTitle">{item && item.name ? item.name : "no name"}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/find/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
