import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      alert("successfully registerd");
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: name,
          email: user.email,
          password: password,
        });
        console.log('Data saved to firestore successfully!!')
      }

      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[70%] lg:w-1/3 border-2 shadow-md rounded-xl px-8 py-5">
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
        <form
          className="flex flex-col gap-5"
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 border-2 rounded-md"
            type="text"
            placeholder="Name"
            value={name}
            minLength={3}
            maxLength={20}
            aria-label="name"
            name="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 border-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            maxLength={35}
            aria-label="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 border-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            minLength={6}
            maxLength={30}
            aria-label="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded"
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

export default SignUp;
