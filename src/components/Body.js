import RestaurantCard, { withOpenedCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const OpenedCard = withOpenedCard(RestaurantCard);

  useEffect(() => {
    fetchData();
    // console.log("fetching data");
  }, []);

  //fetching restaurant data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.827476982708651&lng=74.13284070789814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    //fetch data that won't be modified
    setListOfRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //copy of fetch data that will be used for searching and filtering
    setFilteredRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  console.log("body rendered");
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        {/* search & filter section */}
        <div className="filter-section  p-2 ">
          <input
            type="text"
            className="search-box shadow-lg p-3 rounded-md"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const filteredList = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(filteredList);
              }
            }}
          />
          <button
            className="search-button ml-4 shadow-xl p-3 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn ml-4 shadow-lg p-3 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating < 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Rated below 4
          </button>

          <button
            className="show-all ml-4 shadow-lg p-3 rounded-md"
            onClick={() => setFilteredRestaurants(listOfRestaurants)}
          >
            Show All
          </button>
        </div>

            {/* restaurant display section */}
        <div className="res-container flex flex-wrap gap-5">
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
    );
  }
};
export default Body;
