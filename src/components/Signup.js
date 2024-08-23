import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full lg:w-1/3 border-2 shadow-md rounded-xl px-8 py-5">
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="p-2 border-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 border-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-2 border-2"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <Link to="/signin">
          <p className="text-blue-600 hover:underline mt-3">
            Already have an account? Sign in
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
