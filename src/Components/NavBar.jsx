import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { CartContext } from "../Contexts/CartContext";
import axios from "axios";

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userToken, handelLogout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  return (
    <nav className="bg-[#1A1A1A] shadow-lg border-b border-[#4A90E2]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#E0E0E0]">
          My E-commerce
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-[#E0E0E0]" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link to="/" className="text-[#E0E0E0] hover:text-[#4A90E2]">
            Home
          </Link>
          <Link to="/wishlist" className="text-[#E0E0E0] hover:text-[#4A90E2]">
            Wishlist
          </Link>
          <Link to="/cart" className="text-[#E0E0E0] hover:text-[#4A90E2]">
            Cart
          </Link>
          <Link to="/allOrders" className="text-[#E0E0E0] hover:text-[#4A90E2]">
            Orders
          </Link>

          <Link
            to={"/categories"}
            className="text-[#E0E0E0] hover:text-[#4A90E2]"
          >
            Categories
          </Link>

          <Link to={"/Brands"} className="text-[#E0E0E0] hover:text-[#4A90E2]">
            Brands
          </Link>

          {/* Cart Icon */}
          {!userToken ? null : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
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
                  <span className="badge badge-sm indicator-item bg-[#4A90E2] text-[#E0E0E0]">
                    {cart?.numOfCartItems || 0}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-[#2A2A2A] z-1 mt-3 w-52 shadow-lg"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-[#E0E0E0]">
                    {cart?.numOfCartItems || 0} Items
                  </span>
                  <span className="text-[#4A90E2]">
                    Subtotal: ${cart?.data?.totalCartPrice}
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block bg-[#4A90E2] border-none hover:bg-[#357ABD]">
                      <Link navigated to="/cart">
                        View cart
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2A2A2A] rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a className="justify-between text-[#E0E0E0]">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              {userToken ? (
                <li>
                  <button
                    onClick={() => {
                      handelLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-[#E0E0E0] hover:text-[#4A90E2]"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-[#E0E0E0] hover:text-[#4A90E2]"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-[#1A1A1A] w-full shadow-lg z-10">
            <ul className="menu p-4">
              <li>
                <Link to="/" className="text-[#E0E0E0] hover:text-[#4A90E2]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-[#E0E0E0] hover:text-[#4A90E2]"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-[#E0E0E0] hover:text-[#4A90E2]"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="text-[#E0E0E0] hover:text-[#4A90E2]"
                >
                  Orders
                </Link>
                <Link
                  to={"/categories"}
                  className="text-[#E0E0E0] hover:text-[#4A90E2]"
                >
                  Categories
                </Link>

                <Link
                  to={"/Brands"}
                  className="text-[#E0E0E0] hover:text-[#4A90E2]"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
});

export default memo(Navbar);
