import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <Shimmer />;

  //destructuring of fetched data to get restaurant name, cuisones etc
  const {
    name: resName,
    costForTwoMessage,
    cuisines,
  } = menuInfo?.data?.cards[0]?.card?.card?.info;

  //list of menu-item cards
  const { cards } =
    menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(cards);

  return (
    <div>
      <div className="rest-info">
        <h1>{resName}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div className="rest-menu">
        <ul>
          {cards?.map((cardItem) => {
            return (
              <li>
                {cardItem?.card?.card?.title}
                <ul>
                  {cardItem?.card?.card?.categories?.map((categories) => {
                    return (
                      <li>
                        {categories?.title}
                        <ul>
                          {categories?.itemCards.map((itemCards) => {
                            return (
                              <li key={itemCards?.card?.info?.id}>
                                {itemCards?.card?.info?.name}{" "}
                                <span className="menu-item-price">
                                  Rs.{itemCards?.card?.info?.price / 100}
                                </span>{" "}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}

          {/* <h3>{menuInfo?.data?.cards[0]?.card?.card?.info?.name}</h3> */}

          {cards.map((items) => {
            <>
              <li key={items?.card?.info?.id}>
                {items?.card?.info?.name} - Rs.{items?.card?.info?.price / 100}
              </li>
            </>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
