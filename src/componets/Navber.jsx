import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const Navber = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOutUser = () => {
    handleSignOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Sign out error:", err);
        toast.error("Logout failed");
      });
  };

  const activeClass = ({ isActive }) =>
    isActive ? "text-[#00A63E]" : "text-gray-700";

  const links = (
    <>
      <li>
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/games" className={activeClass}>
          Games
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={activeClass}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" text-2xl">
            <h1 className="text-[#0B5E06]">
              Game<span className="font-bold">hub</span>
            </h1>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="">
          {user ? (
            <div className="dropdown dropdown-center px-2 rounded-full">
              <label tabIndex={0} className="rounded-full btn-circle ">
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL || user.reloadUserInfo.photoURL}
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <div className="flex flex-col ">
                    <div className="">{user?.displayName}</div>
                    <div className="">{user?.email}</div>
                  </div>
                </li>
                <li>
                  {user ? (
                    <button
                      onClick={handleSignOutUser}
                      className="w-full text-left btn btn-ghost"
                    >
                      Log Out
                    </button>
                  ) : (
                    <Link className="btn btn-outline px-5 py-1" to="/login">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link className="btn btn-outline px-5 py-1" to="/login">
                Login
              </Link>

              <Link className="btn btn-outline px-5 py-1" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
