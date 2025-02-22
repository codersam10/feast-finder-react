import { IMAGE_URL } from "../utilis/constants";
//svgs are imported as string
import star from "../assets/star.svg";

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
    <div className="res-card rounded-xl shadow-md overflow-hidden">
      <div className="img-container h-40 overflow-hidden">
        <img
          src={`${IMAGE_URL}w_660/${imageId}`}
          loading="lazy"
          alt="restaurant image"
          className="res-card-hover: res-img object-cover object-center w-[100%] h-[100%]"
        />
      </div>

      <div className="p-3">
        <h3 className="text-xl font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h3>
        <h4 className="text-sm">{costForTwo}</h4>
        <h4 className="inline-block text-sm text-white font-medium bg-lime-600 p-0.5 px-2 rounded-md">
          <div className="flex gap-1 items-center">
            <span>{ratings}</span>
            <img
              src={star}
              alt="star-icon"
            />
          </div>
        </h4>
        <h4 className="text-base overflow-ellipsis overflow-hidden whitespace-nowrap">
          {cuisines.join(", ")}.
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
