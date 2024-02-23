import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.827476982708651&lng=74.13284070789814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  };

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="filter">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );


              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating < 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Rated below 4
          </button>
        </div>
        <div className="res-wrapper">
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                restData={restaurant}
              />
              
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default Body;
