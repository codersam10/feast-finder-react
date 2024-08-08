import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <div class="text-center border-2 border-red-600 p-4 rounded-lg">
        <h1 className="p-2 text-red-600 text-5xl font-semibold mb-2">
          Error {err.status} {err.statusText}
        </h1>

        <Link to="/">
          <button className="p-2 rounded-md bg-slate-200 text-red-600 hover:shadow-md">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
