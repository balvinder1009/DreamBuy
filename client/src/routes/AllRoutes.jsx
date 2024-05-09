import { Routes, Route } from "react-router-dom";
import { About, Home, Profile, SignIn, SignUp, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="Home" end />} />
      <Route path="about" element={<About title="About" />} />
      <Route path="profile" element={<Profile title="Profile" />} />
      <Route path="sign-in" element={<SignIn title="Sign In" />} />
      <Route path="sign-up" element={<SignUp title="Sign Up" />} />
      <Route path="*" element={<PageNotFound title="Page not found" />} />
    </Routes>
  );
};
