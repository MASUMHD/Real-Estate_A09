import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const NavBar = () => {
  const nabLinks = (
    <>
      <li className="text-base mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      
      <li className="text-base mr-2">
        <NavLink to="/ourTem">Our Team</NavLink>
      </li>
      {/* <li className="text-base mr-2">
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li> */}
      <li className="text-base mr-2">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-base mr-2">
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="text-base mr-2">
        <NavLink to="/login">Log In</NavLink>
      </li>
      
    </>
  );

  const { logout, user } = UseAuth();


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nabLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl font-bold md:font-extrabold">
            DreamHome
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  <div className="w-12">
                    <img className="rounded-full " src={user?.photoURL}/>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="rounded-lg bg-green-300 border-2 border-slate-500">
                    <Link to="/profile" className="font-bold">{user?.displayName}</Link>
                  </li>
                  <li className="font-bold">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="font-bold">
                    <Link to="/updateProfile">Update profile</Link>
                  </li>
                </ul>
              </div>
              <button onClick={logout} className="btn btn-error text-white">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-400 text-white">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
