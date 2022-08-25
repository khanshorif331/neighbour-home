import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { DarkModeContext } from "../../../App";
import bookSvg from "../../../Assest/book-svgrepo-com.svg";
import userSvg from "../../../Assest/user-dashbord.svg";
import engineerSvg from "../../../Assest/engineer-dashbord.svg";
import reviewSvg from "../../../Assest/review-dashbord.svg";
import constructionSvg from "../../../Assest/construction-dashbord.svg";
import hiringSvg from "../../../Assest/images/orders-icon.svg";
import { MdDashboardCustomize } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import useAuthEngineer from "../../../hooks/useAuthEngineer";
import useRole from "../../../hooks/useRole";

const Dashboard = () => {
  const [darkMode] = useContext(DarkModeContext);
  let [user, loading] = useAuthState(auth);
  const [authEngineer] = useAuthEngineer(user);
  let [role, roleLoading] = useRole(user)


  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="sm:mt-[129px] mt-[80px]"
    >
      <div className="drawer drawer-mobile mt-[64px]">
        <input
          id="dashboard-drower"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h3 className="text-2xl text-center sm:px-10 pb-3 pt-5 text-purple-500 font-bold">
            Dashboard
          </h3>
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side sm:z-0">
          <label htmlFor="dashboard-drower" className="drawer-overlay"></label>

          <ul
            className={`${darkMode
                ? "bg-[#171e36] text-gray-300"
                : "bg-white text-base-content"
              } menu p-4 overflow-y-auto w-80 `}
          >
            {/* <!-- Sidebar content here --> */}

            {/* user few details with navigation */}
            <div className="mt-8 text-center">
              <img
                src={
                  user ? user.photoURL : "https://i.ibb.co/K035fHn/149071.png"
                }
                alt=""
                className="w-10 h-10 m-auto rounded-full object-cover lg:w-20 lg:h-20"
              />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                {user?.displayName}
              </h5>
              <span className="hidden text-gray-400 lg:block">Admin</span>
              <div>
                <button className="btn btn-xs btn-outline btn-info border">
                  Edit Profile
                </button>
              </div>
            </div>

            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard"}
              >
                <MdDashboardCustomize /> Dashboard
              </Link>
            </li>

            {
              role === "admin" &&
              <li>
                <Link
                  className={` shadow-lg my-1 font-bold ${darkMode
                      ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                      : " text-gray-500"
                    }`}
                  to={"/dashboard/users"}
                >
                  <img className="w-4" src={userSvg} alt="book svg" /> Users
                </Link>
              </li>
            }

            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/manageBooks"}
              >
                <img className="w-4" src={bookSvg} alt="book svg" /> Manage
                Books
              </Link>
            </li>
            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/addReview"}
              >
                <img className="w-4" src={reviewSvg} alt="book svg" /> Add a
                Review
              </Link>
            </li>
            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/manageEngineers"}
              >
                <img className="w-4" src={engineerSvg} alt="book svg" /> Manage
                Engineers
              </Link>
            </li>
            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/constructors"}
              >
                <img className="w-4" src={constructionSvg} alt="book svg" />{" "}
                Manage Constructors
              </Link>
            </li>
            {!authEngineer && <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/myOrders"}
              >
                <img className="w-4" src={hiringSvg} alt="book svg" />{" "}
                My Bookings
              </Link>
            </li>}
            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                  }`}
                to={"/dashboard/orders"}
              >
                <img className="w-4" src={hiringSvg} alt="book svg" />{" "}
                Bookings
              </Link>
            </li>
            {
              authEngineer &&
              <li>
                <Link
                  className={` shadow-lg my-1 font-bold ${darkMode
                      ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                      : " text-gray-500"
                    }`}
                  to={"/dashboard/bookingsThatsCarryOnMe"}
                >
                  <img className="w-4" src={hiringSvg} alt="book svg" />{" "}
                  Hire Requests
                </Link>
              </li>
            }

            {/* {
                          admin ?
                              
                              :
                              <>
                                  <li><Link className='border my-1' to={"/dashboard/myOrder"}>My Order</Link></li>
                                  <li><Link className='border  my-1' to={"/dashboard/addReview"}>Add a  Review</Link></li>
                              </>
                      } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
