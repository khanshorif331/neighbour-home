import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { DarkModeContext } from "../../../App";
import bookSvg from "../../../Assest/book-svgrepo-com.svg";
import userSvg from "../../../Assest/user-dashbord.svg";
import engineerSvg from "../../../Assest/engineer-dashbord.svg";
import reviewSvg from "../../../Assest/review-dashbord.svg";
import constructionSvg from "../../../Assest/construction-dashbord.svg";
import { MdDashboardCustomize } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [darkMode] = useContext(DarkModeContext);
  let [user, loading] = useAuthState(auth);

  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="sm:mt-[129px] mt-[80px]"
    >
      <div class="drawer drawer-mobile mt-[64px]">
        <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h3 className="text-2xl text-left md:text-center sm:px-10 pb-3 pt-5 text-purple-500 font-bold">
            Dashboard
          </h3>
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboard-drower" class="drawer-overlay"></label>

          <ul
            className={`${
              darkMode
                ? "bg-[#171e36] text-gray-300"
                : "bg-white text-base-content"
            } menu p-4 overflow-y-auto w-80 `}
          >
            {/* <!-- Sidebar content here --> */}

            {/* user few details with navigation */}
            <div class="mt-8 text-center">
              <img
                src={user?.photoURL}
                alt=""
                class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              />
              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                {user?.displayName}
              </h5>
              <span class="hidden text-gray-400 lg:block">Admin</span>
            </div>

            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${
                  darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                }`}
                to={"/dashboard/dashboard1"}
              >
                <MdDashboardCustomize /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${
                  darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                }`}
                to={"/dashboard"}
              >
                <img className="w-4" src={userSvg} alt="book svg" /> Users
              </Link>
            </li>

            <li>
              <Link
                className={` shadow-lg my-1 font-bold ${
                  darkMode
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
                className={` shadow-lg my-1 font-bold ${
                  darkMode
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
                className={` shadow-lg my-1 font-bold ${
                  darkMode
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
                className={` shadow-lg my-1 font-bold ${
                  darkMode
                    ? "bg-teal-400 hover:bg-teal-600 hover:text-gray-300 text-gray-600 "
                    : " text-gray-500"
                }`}
                to={"/dashboard/constructors"}
              >
                <img className="w-4" src={constructionSvg} alt="book svg" />{" "}
                Manage Constructors
              </Link>
            </li>

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
