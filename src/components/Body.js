import RestaurantCard from "./RestaurantCard";
import results from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(results);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="search"
          onClick={() => {
            const resultsfilter = results.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setRestaurantList(resultsfilter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resObj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
