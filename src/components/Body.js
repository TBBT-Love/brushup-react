import RestaurantCard from "./RestaurantCard";
import results from "../utils/mockData";

const Body = () => {
  console.log(results[0]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="search"
          onClick={() => {
            console.log("I am clicked");
          }}
        >
          Top Rated Restaurants
        </button>
        Search Restaurant
      </div>
      <div className="restaurantContainer">
        {results?.map((restaurant) => (
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
