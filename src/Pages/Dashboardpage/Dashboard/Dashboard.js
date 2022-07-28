import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { DarkModeContext } from "../../../App";

const Dashboard = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="sm:mt-[129px] mt-[80px] mt-[80px]"
    >
      <div class="drawer drawer-mobile mt-[64px]">
        <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h3 className="text-2xl text-center sm:text-left sm:px-10 pb-3 pt-5 text-purple-500 font-bold">
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
                : "bg-white  text-base-content"
            } menu p-4 overflow-y-auto w-80 `}
          >
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link className="shadow-lg my-1" to={"/dashboard"}>
                Users
              </Link>
            </li>

            <li>
              <Link className="shadow-lg my-1" to={"/dashboard/manageBooks"}>
                Manage Books
              </Link>
            </li>
            <li>
              <Link className="shadow-lg my-1" to={"/dashboard/addReview"}>
                Add a Review
              </Link>
            </li>
            <li>
              <Link
                className="shadow-lg my-1"
                to={"/dashboard/manageEngineers"}
              >
                Manage Engineers
              </Link>
            </li>
            <li>
              <Link className="shadow-lg my-1" to={"/dashboard"}>
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
