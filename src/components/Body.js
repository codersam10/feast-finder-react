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
      const data = await fetch("/restaurant-list/");
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      // console.log(await data.json());
      const json = await data.json();

      // user agent specific fetching as different api is provided for windows vs android
      const index = navigator.userAgent.includes("Windows") ? 4 : 2;

      //fetch data that won't be modified
      setListOfRestaurants(
        json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      //copy of fetch data that will be used for searching and filtering
      setFilteredRestaurants(
        json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
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
        <div className="res-container grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-5">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
              className="max-w-[25rem] w-full mx-auto"
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
