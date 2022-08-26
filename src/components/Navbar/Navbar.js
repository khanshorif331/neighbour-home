import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
	MdModeNight,
	MdOutlineDarkMode,
	MdDashboardCustomize,
	MdNightsStay,
	MdLightMode,
	MdOutlineClose,
} from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'
import './Navbar.css'
import { DarkModeContext } from '../../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../../Shared/Loading/Loading'
import { signOut } from 'firebase/auth'
import useRole from '../../hooks/useRole'
import NotificationModal from './Notification/NotificationModal'
import axios from 'axios'

const Navbar = () => {
	const [colorChange, setColorchange] = useState(false)
	const [toggle, setToggle] = useState(false)
	const [notificationModal, setNotificationModal] = useState(false)
	const [notifications, setNotifications] = useState([])
	const [NewNotificationsCount, setNewNotificationsCount] = useState(0)
	const [user, loading] = useAuthState(auth)
	// const navigat = useNavigate();
	const location = useLocation().pathname
	const [darkMode, setDarkMode] = useContext(DarkModeContext)
	const [role, roleLoading] = useRole(user)
	//     console.log(role);
	const setNotificationZero = () => {
		setNotificationModal(!notificationModal)
		axios
			.put(
				`https://neighbour-home--server.herokuapp.com/notification/${user?.email}`
			)
			.then(data => {
				// console.log(data.data)
				setNewNotificationsCount(0)
			})
	}

	useEffect(() => {
		axios
			.get(
				`https://neighbour-home--server.herokuapp.com/notification/${user?.email}`
			)
			.then(data => {
				// console.log(data.data);
				setNotifications(data.data)
				const NewNotifications = data.data.filter(
					notification => notification.status === 'unseen'
				)
				setNewNotificationsCount(NewNotifications.length)
			})
	}, [user?.email, notifications])

	if (loading || roleLoading) {
		return <Loading />
	}

	// console.log(user?.email)

	// console.log(location);
	const navBtnHndle = () => {
		setToggle(!toggle)
	}
	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)
	//   console.log(colorChange);
	return (
		<div className="">
			{/* start header  */}
			<header
				className={`fixed  top-0 left-0 w-full  px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-64 ${colorChange && (darkMode ? 'bg-teal-600' : 'bg-teal-900')
					} ${location !== '/' && (darkMode ? 'bg-teal-600' : 'bg-teal-900')
					} ${location === '/properties'
						? colorChange
							? 'z-50 duration-100'
							: 'z-10'
						: 'z-50'
					}`}
			>
				<div
					className={`${colorChange ? 'md:hidden opacity-0' : 'md:flex opacity-100'
						} hidden justify-between duration-500 items-center py-2 border-b text-sm`}
				// style="border-color: rgba(255,255,255,.25)"
				>
					<div>
						<ul className="flex text-white">
							<li className="hover:text-teal-300 transition cursor-pointer">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 fill-current "
										viewBox="0 0 24 24"
									>
										<path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
									</svg>

									<span className="ml-2">
										1985 Kerry Way, Whittier, CA, USA
									</span>
								</div>
							</li>
							<li className="hover:text-teal-300 transition cursor-pointer ml-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 fill-current "
										viewBox="0 0 24 24"
									>
										<path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
									</svg>

									<span className="ml-2">+1 562-789-1935</span>
								</div>
							</li>
						</ul>
					</div>

					<div className="">
						<ul className="flex justify-end text-white">
							<li>
								<a
									className="hover:text-teal-300 transition"
									href="#"
									target="_blank"
									title=""
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path>
									</svg>
								</a>
							</li>

							<li className="ml-6">
								<a
									className="hover:text-teal-300 transition"
									href="#"
									target="_blank"
									title=""
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
									</svg>
								</a>
							</li>

							<li className="ml-6">
								<a
									className="hover:text-teal-300 transition"
									href="#"
									target="_blank"
									title=""
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
										<circle
											cx="11.994"
											cy="11.979"
											r="3.003"
										></circle>
									</svg>
								</a>
							</li>

							<li className="ml-6">
								<a
									className="hover:text-teal-300 transition"
									href="#"
									target="_blank"
									title=""
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* phone navbar */}
				<div className="flex flex-wrap items-center justify-between py-6 sm:px-2 px-5">
					<label
						for="dashboard-drower"
						tabIndex="1"
						class={`${location.includes('dashboard') ? 'block' : 'hidden'
							} md:hidden text-white cursor-pointer`}
					>
						<MdDashboardCustomize className="h-5 w-5"></MdDashboardCustomize>
					</label>

					<div className=" md:w-auto">
						<a
							style={{ letterSpacing: '2px' }}
							href="#"
							className="text-white font-semibold  text-2xl"
						>
							Neighbour Home
						</a>
						{/* <Link to="#">
                            <img className='w-40' src="https://i.ibb.co/Mh84735/logo.png" alt="" />
                        </Link> */}
					</div>

					{/* <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg></label>

                    <input className="hidden" type="checkbox" id="menu-toggle" /> */}
					<div className="relative ">
						<label
							onClick={() => setNotificationZero()}
							for="notificattonModal"
							className="inline-block text-white md:px-2 font-semibold cursor-pointer"
						>
							<IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>

							<span class="py-0 text-xs absolute -top-1 text-white px-1 bg-pink-600 rounded-full">
								{NewNotificationsCount}
							</span>
						</label>

						<div className="absolute top-10 -right-12">
							{notificationModal && (
								<NotificationModal
									notifications={notifications}
									setNotificationModal={setNotificationModal}
								/>
							)}
						</div>
					</div>

					<span
						onClick={navBtnHndle}
						className="md:hidden text-white text-2xl cursor-pointer"
					>
						{toggle ? (
							<MdOutlineClose></MdOutlineClose>
						) : (
							<GoThreeBars></GoThreeBars>
						)}
					</span>

					<ul
						onClick={navBtnHndle}
						className={`mobile-manu flex md:hidden flex-col text-center z-10   left-0 w-full bg-teal-100  absolute  py-4 duration-500 ${toggle ? ' opacity-100  top-20' : ' top-[-350px] opacity-0'
							}`}
					>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/'}
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/properties'}
						>
							Properties
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/resumeBuilder'}
						>
							Resume Builder
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/dashboard'}
						>
							Dashboard
						</NavLink>
						{/* <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/"}
            >
              Blogs
            </NavLink> */}
						{darkMode ? (
							<li className="">
								<button
									onClick={() => setDarkMode(false)}
									className="py-2 mx-auto md:text-white md:px-2  flex items-center"
									href="#"
								>
									Light{' '}
									<MdLightMode className="ml-1 text-2xl font-semibold"></MdLightMode>
								</button>
							</li>
						) : (
							<li className="">
								<button
									onClick={() => setDarkMode(true)}
									className="py-2 mx-auto  md:text-white md:px-2 flex items-center "
									href="#"
								>
									Dark{' '}
									<MdNightsStay className="ml-1 text-2xl font-semibold"></MdNightsStay>
								</button>
							</li>
						)}

						<div class="avatar mx-auto my-2">
							<div class="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img
									src="https://placeimg.com/192/192/people"
									alt="Profile"
								/>
							</div>
						</div>
						<Link
							className="inline-block w-44 mx-auto font-semibold px-4 py-2 hover:bg-white hover:text-teal-900  bg-teal-800 text-white  border-white rounded"
							to={'/'}
						>
							Buy Apartment
						</Link>

						{/* {user ?
                        <button onClick={handleLogout} className='uppercase my-0.5 md:my-0 text-left   mx-auto md:mx-0 md:pb-0.5' >LogOut</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    } */}
					</ul>

					{/* desktop navbar  */}
					<div className="hidden md:block w-full md:w-auto" id="menu">
						<nav className="w-full bg-teal-100  md:bg-transparent rounded shadow-lg px-6 py-10 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
							<ul className="md:flex items-center">
								<li>
									<Link
										to={'/'}
										className="py-2 inline-block md:text-white md:hidden lg:block font-semibold"
										href="#"
									>
										Home
									</Link>
								</li>
								<li className="md:ml-2.5">
									<Link
										to={'/properties'}
										className="py-2 inline-block md:text-white md:px-2 font-semibold"
										href="#"
									>
										Properties
									</Link>
								</li>
								<li className="md:ml-2.5">
									<Link
										to={'/resumeBuilder'}
										className="py-2 inline-block md:text-white md:px-2 font-semibold"
									>
										Resume Builder
									</Link>
								</li>
								<li className="md:ml-2.5 md:hidden lg:block">
									<Link
										to={'/blogs'}
										className="py-2 inline-block md:text-white md:px-2 font-semibold"
										href="#"
									>
										Blogs
									</Link>
								</li>

								<li className="md:ml-2.5">
									<Link
										to={'/dashboard'}
										className="py-2 inline-block md:text-white md:px-2 font-semibold"
										href="#"
									>
										Dashboard
									</Link>
								</li>

								{darkMode ? (
									<li className="md:ml-2.5">
										<button
											onClick={() => setDarkMode(false)}
											className="py-2 inline-block md:text-white md:px-2 font-semibold"
											href="#"
										>
											<MdLightMode className="text-2xl"></MdLightMode>
										</button>
									</li>
								) : (
									<li className="md:ml-2.5">
										<button
											onClick={() => setDarkMode(true)}
											className="py-2 inline-block md:text-white md:px-2 font-semibold"
											href="#"
										>
											<MdOutlineDarkMode className="text-2xl"></MdOutlineDarkMode>
										</button>
									</li>
								)}

								<li className="md:ml-2.5 md:mr-2.5 flex items-center relative">
									<label
										onClick={() => setNotificationZero()}
										for="notificattonModal"
										className="inline-block md:text-white md:px-2 font-semibold cursor-pointer"
									>
										<IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>

										<span class="py-0 text-xs absolute -top-1 right-1.5 px-1 bg-pink-600 rounded-full">
											{NewNotificationsCount}
										</span>
									</label>

									<div className="absolute top-10 -left-10">
										{notificationModal && (
											<NotificationModal
												notifications={notifications}
												setNotificationModal={setNotificationModal}
											/>
										)}
									</div>
								</li>


								<Link to={'/profile'} class="avatar mx-2">
									<div class="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<img
											src="https://placeimg.com/192/192/people"
											alt="Profile"
										/>
									</div>
								</Link>

								{user ? (
									<li className="md:ml-6 mt-3 md:mt-0">
										<a
											onClick={() => signOut(auth)}
											className={`inline-block font-semibold px-4 py-2 ${colorChange
													? 'hover:bg-teal-900 hover:text-white text-tealbg-teal-900 bg-white'
													: 'hover:bg-white hover:text-teal-900 text-white bg-teal-900'
												}   border-white rounded cursor-pointer`}
										>
											Sign Out
										</a>
									</li>
								) : (
									<li className="md:ml-6 mt-3 md:mt-0">
										<Link
											className={`inline-block font-semibold px-4 py-2 ${colorChange
													? 'hover:bg-teal-900 hover:text-white text-tealbg-teal-900 bg-white'
													: 'hover:bg-white hover:text-teal-900 text-white bg-teal-900'
												}   border-white rounded`}
											to="/login"
										>
											Login
										</Link>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</header>
			{/* -- end header -- */}
		</div>
	)
}

export default Navbar
