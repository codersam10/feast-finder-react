import { IMAGE_URL } from "../utilis/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    name,
    costForTwo,
    avgRating: ratings,
    cuisines,
    cloudinaryImageId: imageId,
  } = restData?.info;
  return (
    <div className="res-card w-72 p-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 duration-200">
      <div className="img-container h-40 rounded-xl overflow-hidden">
        <img
          src={IMAGE_URL + "w_660/" + imageId}
          alt="restaurant-logo"
          className="res-img object-cover w-[100%] h-[100%]"
        />
      </div>

      <h3 className="text-xl font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
        {name}
      </h3>
      <h4 className="text-base">{costForTwo}</h4>
      <h4 className="text-base">Rating {ratings} star</h4>
      <h4 className="text-base overflow-ellipsis overflow-hidden whitespace-nowrap">
        {cuisines.join(", ")}.
      </h4>
    </div>
  );
};

export const withOpenedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>Opened</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
