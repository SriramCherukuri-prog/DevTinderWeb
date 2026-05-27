import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { validate } from "../utils/validation";
import { motion } from "motion/react";


const Login = () => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setisLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const validationError = validate(emailid, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError("");

      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailid,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));

      return navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid Credentials");
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    try {
      setError("");

      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailid,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));

      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid SignUp Data");
      console.error(err);
    }
  };

  const handleLoginandSignUp = () => {
    setisLoginForm(!isLoginForm);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center relative overflow-hidden 
      bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage:
          "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md sm:max-w-lg
        card card-dash
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-2xl rounded-2xl"
      >
        <div className="card-body p-6 sm:p-8">
          <h2 className="card-title text-2xl sm:text-3xl pb-4 text-white font-bold">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {!isLoginForm && (
            <>
              <input
                className="w-full p-3 sm:p-4 rounded-xl bg-white/10 border border-white/10
                focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white
                placeholder:text-gray-300 mb-4"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                className="w-full p-3 sm:p-4 rounded-xl bg-white/10 border border-white/10
                focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white
                placeholder:text-gray-300 mb-4"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}

          <input
            className="w-full p-3 sm:p-4 rounded-xl bg-white/10 border border-white/10
            focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
            outline-none transition-all duration-300 text-white
            placeholder:text-gray-300 mb-4"
            type="email"
            placeholder="Email"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />

          <input
            className="w-full p-3 sm:p-4 rounded-xl bg-white/10 border border-white/10
            focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
            outline-none transition-all duration-300 text-white
            placeholder:text-gray-300 mb-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <div className="card-actions pt-2 pb-2">
            <motion.button
              className="w-full bg-violet-600 hover:bg-violet-500
              transition-all duration-300 text-white font-semibold
              text-base sm:text-lg py-3 sm:py-4 rounded-xl
              shadow-lg hover:shadow-violet-500/40"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </motion.button>
          </div>

          <p className="text-center text-gray-300 text-sm mt-4">
            Build connections with developers 🚀
          </p>

          <p
            className="text-center text-gray-400 text-sm mt-4 cursor-pointer hover:text-white transition-all duration-300"
            onClick={handleLoginandSignUp}
          >
            {isLoginForm
              ? "New User? Signup here"
              : "Existing User? Login here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;