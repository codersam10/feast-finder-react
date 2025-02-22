 import tag from "../assets/tag.svg";

export const withEarlyDelivery = (RestaurantCard) => {
  //Higher order component
  return (props) => {
    const { restData } = props;
    return (
      <div className="relative max-w-[25rem] hover:-translate-y-3 duration-[250ms] will-change-transform">
        {restData?.info?.sla?.deliveryTime <= 30 && (
          <label className="z-10 rounded-tl-xl overflow-hidden absolute top-0 left-0 flex">
            <span className="text-xs px-2 py-1.5 bg-black text-white font-bold">
              Delivery in 30 mins
            </span>
            <span>
              <img
                className="h-7"
                src={tag}
                alt="tag-icon"
              />
            </span>
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
