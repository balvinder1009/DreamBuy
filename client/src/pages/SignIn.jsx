import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInstart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { OAuth } from "../components/index";
export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  useTitle("Sign In");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInstart());
      const res = await fetch("/api/auth/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      setSuccessMsg(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
      // console.log(data);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <section className="flex flex-col max-w-lg mx-auto m-10 p-3">
      <h1 className="text-center font-semibold text-3xl">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        id="signup-form"
        className="flex flex-col gap-4 m-4 w-full mx-auto"
      >
        <input
          className="rounded-lg p-2 focus:outline-blue-800 border"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="rounded-lg p-2focus:outline-blue-800 border"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          disabled={loading}
          className="w-full bg-slate-700 text-white rounded-lg p-2 mt-2 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : " Sign In"}
        </button>
        <OAuth />
      </form>
      {/* <button className="bg-red-800 text-white rounded-lg p-2 uppercase">
        Continue with Google
      </button> */}
      <div className="mt-5">
        <p>
          Dont Have an Account?
          <Link className="ml-2 text-blue-500" to="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
      {error ? (
        <p className="text-red-500 align-center">{error}</p>
      ) : (
        <p className="text-green-500 align-center">{successMsg}</p>
      )}
    </section>
  );
};
