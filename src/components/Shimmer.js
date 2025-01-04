import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
      {Array(12)
        .fill()
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};

export default Shimmer;
