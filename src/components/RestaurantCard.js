import { CDN_URL } from "../utils/constants";
import StarIcon from "../icons/StarIcon";

const RestaurantCard = (props) => {
  const resObj = props.resObj?.card?.card;
  console.log("resObj", resObj);
  return (
    <div className="restaurantCard" style={{ backgroundColor: "beige" }}>
      <img
        className="restaurant-logo"
        alt="res-logo"
        src={CDN_URL + resObj.info.cloudinaryImageId}
      ></img>

      <h3>{resObj.info.name}</h3>

      <div className="avgRating">
        <StarIcon />
        <h4>{resObj.info.avgRating}</h4>
        {"."}
        <h4>{resObj.info.sla.slaString}</h4>
      </div>
      <h4 style={{ color: "rgba(2, 6, 12, 0.6)" }}>
        {resObj.info.cuisines.join(", ")}
      </h4>
    </div>
  );
};

export default RestaurantCard;
