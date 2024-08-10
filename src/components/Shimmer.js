import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-5 justify-center py-10">
      {Array(12)
        .fill()
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};

export default Shimmer;
