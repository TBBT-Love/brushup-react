import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import results from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setsearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const res = await data.json();
    const restaurantListfromAPI = res?.data?.cards?.filter((x) => {
      return (
        x.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
    });
    console.log("restaurantListfromAPI", restaurantListfromAPI);
    setRestaurantList(restaurantListfromAPI);
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurantList = restaurantList.filter((res) => {
              return res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setRestaurantList(filteredRestaurantList);
          }}
        >
          Search
        </button>
        <button
          className="search"
          onClick={() => {
            const resultsfilter = restaurantList.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            setRestaurantList(resultsfilter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {/* <Shimmer /> */}
        {restaurantList.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantList?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resObj={restaurant}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
