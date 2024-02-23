import { RESTAURANT_IMAGE_URL } from "../utilis/constants";
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
    <div className="res-card">
      <div className="img-container">
        <img
          src={RESTAURANT_IMAGE_URL + imageId}
          alt="restaurant-logo"
          className="res-img"
        />
      </div>

      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>Rating {ratings} star</h4>
      <h4>{cuisines.join(", ")}.</h4>
    </div>
  );
};
export default RestaurantCard;
