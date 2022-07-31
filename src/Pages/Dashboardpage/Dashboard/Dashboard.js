import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { DarkModeContext } from '../../../App'
import bookSvg from "../../../Assest/book-svgrepo-com.svg"
import userSvg from "../../../Assest/user-dashbord.svg"
import engineerSvg from "../../../Assest/engineer-dashbord.svg"
import reviewSvg from "../../../Assest/review-dashbord.svg"
import constructionSvg from "../../../Assest/construction-dashbord.svg"

const Dashboard = () => {
	const [darkMode] = useContext(DarkModeContext)

	return (
		<div
			style={{ fontFamily: "'Rajdhani', sans-serif" }}
			className='sm:mt-[129px] mt-[80px]'
		>
			<div class='drawer drawer-mobile mt-[64px]'>
				<input
					id='dashboard-drower'
					type='checkbox'
					class='drawer-toggle'
				/>
				<div class='drawer-content'>
					<h3 className='text-2xl text-left md:text-center sm:px-10 pb-3 pt-5 text-purple-500 font-bold'>
						Dashboard
					</h3>
					{/* <!-- Page content here --> */}
					<Outlet />
				</div>
				<div class='drawer-side'>
					<label for='dashboard-drower' class='drawer-overlay'></label>

					<ul
						className={`${
							darkMode
								? 'bg-[#171e36] text-gray-300'
								: 'bg-white  text-base-content'
						} menu p-4 overflow-y-auto w-80 `}
					>
						{/* <!-- Sidebar content here --> */}

						<li>
							<Link className='shadow-lg my-1 font-bold text-gray-500' to={'/dashboard'}>
							<img className='w-4' src={userSvg} alt="book svg" /> Users
							</Link>
						</li>

						<li>
							<Link className='shadow-lg my-1 font-bold text-gray-500' to={'/dashboard/manageBooks'}>
								<img className='w-4' src={bookSvg} alt="book svg" /> Manage Books
							</Link>
						</li>
						<li>
							<Link
								className='shadow-lg my-1 font-bold text-gray-500'
								to={'/dashboard/addReview'}
							>
								<img className='w-4' src={reviewSvg} alt="book svg" /> Add a Review
							</Link>
						</li>
						<li>
							<Link className='shadow-lg my-1 font-bold text-gray-500' to={'/dashboard/manageEngineers'}>
							<img className='w-4' src={engineerSvg} alt="book svg" /> Manage Engineers
							</Link>
						</li>
						<li>
							<Link
								className='shadow-lg my-1 font-bold text-gray-500'
								to={'/dashboard/constructors'}
							>
								<img className='w-4' src={constructionSvg} alt="book svg" /> Manage Constructors
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
	)
}

export default Dashboard
