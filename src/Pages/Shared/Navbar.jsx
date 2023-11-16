import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  const total = cart?.reduce((acc, curr) => acc + parseInt(curr.price), 0);
  const navLink = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>CONTACT US</NavLink>
      </li>
      <li>
        <NavLink>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salads">Our Shop</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="sticky top-0 z-20">
      <div className="navbar bg-black bg-opacity-30 max-w-screen-xl text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{navLink}</ul>
        </div>

        {user ? (
          <div className="navbar-end items-center">
            <div className="flex items-center gap-5">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cart && cart.length}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body text-black">
                    <span className="font-bold text-lg">
                      {cart && cart.length} Food
                    </span>
                    <span className="text-info">Subtotal: ${total}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        <Link to="/dashboard/cart">View cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p>{user?.displayName}</p>
                  </li>

                  <li>
                    <button
                      className="btn btn-secondary"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end items-center">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
