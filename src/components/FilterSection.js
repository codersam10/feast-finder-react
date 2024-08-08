import { useState } from "react";

const FilterSection = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  //search functionality
  const searchFilteredList = (e) => {
    e.preventDefault();
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };
  return (
    <div className="filter-section p-2">
      <form
        onSubmit={searchFilteredList}
        className="shadow-lg rounded-lg overflow-hidden inline-block"
      >
        <input
          type="text"
          className="search-box p-3"
          placeholder="Search restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="search-button p-3 bg-blue-600 text-white"
        >
          Search
        </button>
      </form>

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
  );
};

export default FilterSection;
