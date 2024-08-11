import { IMAGE_URL } from "../utilis/constants";
import star from "../assets/star.svg";

const MenuVariety = (props) => {
  return (
    <>
      <div className="food-item-info">
        <h2 className="font-semibold text-lg">
          {props?.data?.card?.info?.name}
        </h2>

        <p className="price text-sm">
          Rs.{" "}
          {props?.data?.card?.info?.price === undefined
            ? props?.data?.card?.info?.defaultPrice / 100
            : props?.data?.card?.info?.price / 100}
        </p>

        {/* conditional rendering of review */}
        {props?.data?.card?.info?.ratings?.aggregatedRating?.rating ? (
          <span className="mt-2 inline-block text-sm text-white font-medium bg-lime-600 py-0.5 px-2 rounded-md">
            <div className="flex gap-1 items-center">
              <span>
                {props?.data?.card?.info?.ratings?.aggregatedRating?.rating}
              </span>
              <span>
                <img
                  src={star}
                  alt="star-icon"
                />
              </span>
            </div>
          </span>
        ) : (
          <span className="mt-2 inline-block line-clamp-3 text-sm text-white font-medium bg-lime-600 p-0.5 px-2 rounded-md">
            <div className="flex gap-1 items-center">
              <span>0.0</span>
              <span>
                <img
                  src={star}
                  alt="star-icon"
                />
              </span>
            </div>
          </span>
        )}

        <p className="text-xs mt-1 text-gray-500 line-clamp-2 ">
          {props?.data?.card?.info?.description}
        </p>
      </div>

      {/* if imgId exists display else don't */}
      {props?.data?.card?.info?.imageId && (
        <div className="image-container w-[9rem] h-[7rem] shrink-0 rounded-lg overflow-hidden relative">
          <button className="bg-slate-900 text-white font-bold p-1 rounded-lg absolute left-1/2 -translate-x-1/2 hover:bg-slate-700 active:bg-slate-900">
            Add +
          </button>

          <img
            className="object-cover object-center w-[100%] h-[100%]"
            loading="lazy"
            alt="menu food image"
            src={
              `${IMAGE_URL}w_208,h_208,c_fit/${props?.data?.card?.info?.imageId}`
            }
          />
        </div>
      )}
    </>
  );
};

export default MenuVariety;
