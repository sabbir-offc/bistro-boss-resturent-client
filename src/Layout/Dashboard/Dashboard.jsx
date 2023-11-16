import { NavLink, Outlet } from "react-router-dom";
import { TiHome, TiShoppingCart } from "react-icons/ti";
import { FaUtensils, FaList, FaUsers } from "react-icons/fa";
import {
  BookText,
  CalendarDays,
  CalendarHeart,
  Home,
  Menu,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Email, PaymentOutlined } from "@mui/icons-material";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  //TODO: get isAdmin value from the database.
  const { isAdmin } = useAdmin();
  return (
    <div className="flex relative">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-full bg-[#D1A054]">
        <ul className="menu p-4 space-y-3 uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <TiHome size={23} />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <FaUtensils size={23} />
                  add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaList size={23} />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-booking">
                  <BookText />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers size={23} />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">
                  <TiHome size={23} />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <CalendarDays size={23} />
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <PaymentOutlined />
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <TiShoppingCart size={23} />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">
                  <Star />
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <CalendarHeart />
                  my booking
                </NavLink>
              </li>
            </>
          )}
          {/* Shared Nav link */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <Menu />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <ShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <Email />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* DashBoard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
