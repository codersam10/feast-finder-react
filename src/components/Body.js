import RestaurantCard, { withOpenedCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import FilterSection from "./FilterSection";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const OpenedCard = withOpenedCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  //fetching restaurant data
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.827476982708651&lng=74.13284070789814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      //fetch data that won't be modified
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      //copy of fetch data that will be used for searching and filtering
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    //conditional rendering
    listOfRestaurants?.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        {/* search & filter section */}
        <FilterSection
          setFilteredRestaurants={setFilteredRestaurants}
          listOfRestaurants={listOfRestaurants}
        />

        {/* restaurants display section */}
        <div className="res-container flex flex-wrap gap-5 justify-center">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {/* opened not-opened functionality */}
              {restaurant?.info?.availability?.opened ? (
                <OpenedCard restData={restaurant} />
              ) : (
                <RestaurantCard restData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default Body;
