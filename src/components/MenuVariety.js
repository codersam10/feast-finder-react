import { IMAGE_URL } from "../utilis/constants";

const MenuVariety = (props) => {
  return (
    <>
      <div className="menu-variety-info flex justify-between rounded-md bg-slate-50 m-2 p-3 ">
        <div className="mr-4">
          <h2 className="font-semibold text-lg">
            {props?.data?.card?.info?.name}
          </h2>
          <p className="text-sm">
            Rs.{" "}
            {props?.data?.card?.info?.price === undefined
              ? props?.data?.card?.info?.defaultPrice / 100
              : props?.data?.card?.info?.price / 100}
          </p>

          {/* conditional rendering of review */}
          {props?.data?.card?.info?.ratings?.aggregatedRating?.rating && (
            <span className="text-sm text-white font-medium bg-lime-600 p-0.5 px-4 rounded-md">
              {props?.data?.card?.info?.ratings?.aggregatedRating?.rating}
            </span>
          )}

          <p className="text-xs text-gray-500">
            {props?.data?.card?.info?.description}
          </p>
        </div>

        <div className="image-container w-[8rem] h-[7rem] shrink-0 rounded-lg overflow-hidden relative">
          <button className="bg-black text-white p-1 rounded-lg absolute left-1/2 -translate-x-1/2 ">
            Add +
          </button>
          {/* //if imgId exists display else don't */}
          {props?.data?.card?.info?.imageId && (
            <img
              className="object-cover w-[100%] h-[100%]"
              src={
                IMAGE_URL +
                "w_208,h_208,c_fit/" +
                props?.data?.card?.info?.imageId
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MenuVariety;
