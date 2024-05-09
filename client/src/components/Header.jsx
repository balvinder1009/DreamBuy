import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Dream</span>
          <span className="text-slate-700">Buy</span>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 cursor-pointer" />
        </form>
        <div className="flex gap-4 font-semibold">
          <NavLink
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hidden sm:inline  text-slate-700 hover:underline"
          >
            About
          </NavLink>
          <NavLink to="/sign-in" className="text-slate-700 hover:underline">
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
};
