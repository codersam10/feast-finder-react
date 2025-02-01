import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //fetch data using the custom hook
  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <Shimmer />;

  //destructure fetched data to get restaurant name, cuisines etc
  const {
    name: resName,
    costForTwoMessage,
    cuisines,
  } = menuInfo?.cards[2]?.card?.card?.info;

  // user agent specific accessing as different api is provided for windows vs android
  const index = navigator.userAgent.includes("Windows") ? 4 : 5;

  //filter cards with "@type" of "NestedItemCategory" for creating menu category
  const categories = menuInfo?.cards[
    index
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) =>
    category?.card?.card?.["@type"].toLowerCase().includes("itemcategory")
  );

  return (
    <>
      <div className="rest-info">
        <h1 className="font-semibold text-xl mt-5">{resName}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <hr className="m-10" />

      <div className="menu-section mx-auto p-4 w-full md:w-7/12">
        {categories?.map((category) => {
          return (
            <div
              key={category?.card?.card?.title}
              className="menu-wrapper my-5 bg-slate-200 p-3 rounded-md "
            >
              {/* condition to check if MenuCategory present or not */}
              {category?.card?.card?.categories === undefined ? (
                <MenuList data={category?.card?.card} />
              ) : (
                <MenuCategory data={category?.card?.card} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
