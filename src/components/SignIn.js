import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilis/Firebase";
import { useRef } from "react";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate("/")
      alert("Signed in successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[70%] lg:w-1/3 border-2 shadow-md rounded-xl px-8 py-5">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
        <form
          className="flex flex-col gap-5"
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 border-2 rounded-md"
            type="email"
            placeholder="Email"
            maxLength={35}
            required
            aria-label="email"
            name="email"
            autoFocus
            ref={emailRef}
          />
          <input
            className="p-2 border-2 rounded-md"
            type="password"
            placeholder="Password"
            minLength={6}
            maxLength={30}
            aria-label="password"
            name="password"
            required
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <Link to="/signup">
          <p className="text-blue-600 hover:underline mt-3">
            Don't have an account? Sign up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
