import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './Authentication/Login/Login'
import Register from './Authentication/Register/Register'
import { createContext, useEffect, useState } from 'react'
import Guides from './Pages/Homepage/Guides/Guides'
import AddReview from './Pages/Homepage/AddReview/AddReview'
import NotFound from './components/NotFound/NotFound'
import UserData from './Pages/UserData/UserData'
import BookReview from './Pages/Homepage/BookReview/BookReview'
import Dashboard from './Pages/Dashboardpage/Dashboard/Dashboard'
import Users from './Pages/Dashboardpage/Users/Users'
import Constructors from './Pages/Dashboardpage/Constructors/Constructors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ManageBooks from './Pages/Dashboardpage/ManageBooks/ManageBooks'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
import ManageEngineers from './Pages/Dashboardpage/ManageEngineers/ManageEngineers'
import Engineers from './Pages/Homepage/Engineers/Engineers'
import { Toaster } from 'react-hot-toast'
import UserDetails from './Pages/UserDetails/UserDetails'
import EngineersTable from './Pages/ServiceDetails/EngineersTable'
import EngineerDetails from './Pages/EngineerDetails/EngineerDetails'
import { BarLoader } from 'react-spinners'
import Dashboard1 from './Pages/Dashboardpage/Dashboard1/Dashboard1'
import Orders from './Pages/Dashboardpage/orders/Orders'
import MyOrders from './Pages/Dashboardpage/myOrders/MyOrders'
import PropertiesPage from './Pages/Properties/PropertiesPage'
import Profile from './Pages/Profile/Profile'
import MyProfile from './Pages/Profile/MyProfile/MyProfile'
import Address from './Pages/Profile/Address/Address'
import Payment from './Pages/Payment/Payment'
import Education from './Pages/Profile/Education/Education'
import PricingPay from './Pages/Homepage/Pricing/PricingPay'
import MessengerCustomerChat from 'react-messenger-customer-chat'

import BookingDetails from './Pages/Dashboardpage/myOrders/BookingDetails'

import Searches from './Pages/SearchRoute/Searches'
import MyHirings from './Pages/Dashboardpage/myOrders/forEngineer/MyHirings'

import Body from './Pages/ResumeBuilder/Body/Body'
import Blog from './Pages/Blog/Blog'
// authentication import
import RequireAuth from './Auth/RequireAuth'
import RequireAdmin from './Auth/RequireAdmin'

export const DarkModeContext = createContext('')
const queryClient = new QueryClient()

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, [3000])
	}, [])

	return (
		<>
			{loading ? (
				<div className="flex justify-center items-center w-full h-[100vh] bg-black flex-col mb-4">
					<p
						// style={{ color: 'red' }}
						className=" font-bold uppercase text-2xl pb-4 text-teal-500 inline-block"
					>
						NB{' '}
						<span className="bg-teal-500 text-white p-2 rounded-sm">
							Home
						</span>
					</p>
					<BarLoader
						color={'#36D7B7'}
						loading={loading}
						size={450}
						width={130}
						speedMultiplier={0.6}
						height={4}
					/>
				</div>
			) : (
				<QueryClientProvider client={queryClient}>
					<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
						<section
							className={`${darkMode && 'dark-theme'} duration-300`}
						>
							<Navbar />
							<Toaster></Toaster>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/blogs" element={<Blog />} />
								<Route
									path="/dashboard"
									element={
										<RequireAuth>
											<Dashboard />
										</RequireAuth>
									}
								>
									<Route index element={<Dashboard1 />}></Route>
									<Route path="users" element={<Users />}></Route>
									<Route
										path="addReview"
										element={
											<RequireAuth>
												<AddReview />
											</RequireAuth>
										}
									></Route>
									<Route
										path="manageBooks"
										element={
											<RequireAdmin>
												<ManageBooks />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="manageEngineers"
										element={
											<RequireAdmin>
												<ManageEngineers />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="constructors"
										element={
											<RequireAdmin>
												<Constructors />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="manageBooks"
										element={
											<RequireAdmin>
												<ManageBooks />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="orders"
										element={
											<RequireAdmin>
												<Orders />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="myOrders"
										element={
											<RequireAuth>
												<MyOrders />
											</RequireAuth>
										}
									></Route>
									<Route
										path="bookingsThatsCarryOnMe"
										element={
											<RequireAuth>
												<MyHirings />
											</RequireAuth>
										}
									></Route>
									<Route
										path="bookingDetails/:id"
										element={
											<RequireAdmin>
												<BookingDetails />
											</RequireAdmin>
										}
									></Route>
									<Route
										path="manageEngineers"
										element={
											<RequireAdmin>
												<ManageEngineers />
											</RequireAdmin>
										}
									></Route>
									{/* <Route path="dashboard1" element={<Dashboard1 />}></Route> */}
								</Route>
								<Route path="/user/:id" element={<UserDetails />} />
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />
								<Route
									path="/details/:serviceId"
									element={<ServiceDetails />}
								/>
								<Route
									path="/engineers"
									element={<EngineersTable></EngineersTable>}
								></Route>
								<Route
									path="/engineers/engineer/:engineerId"
									element={<EngineerDetails />}
								></Route>
								<Route path="/guides" element={<Guides />} />
								<Route path="/user_data" element={<UserData />} />
								<Route path="/addReview" element={<AddReview />} />
								<Route
									path="/bookDetail/:_id"
									element={<BookReview />}
								/>
								<Route
									path="/properties"
									element={<PropertiesPage />}
								/>
								<Route path="/resumeBuilder" element={<Body />} />
								<Route path="/payment/:id" element={<Payment />} />
								<Route
									path="/pricingPay/:_id"
									element={<PricingPay />}
								/>
								<Route path="search" element={<Searches />} />
								{/* Profile Routes */}
								<Route path="/profile" element={<Profile />}>
									<Route index element={<MyProfile />}></Route>
									<Route path="address" element={<Address />}></Route>
									<Route
										path="education"
										element={<Education />}
									></Route>
								</Route>
								<Route path="*" element={<NotFound />} />
							</Routes>
							<MessengerCustomerChat
								pageId="106349278843956"
								appId="795027431626775"
							/>
							<Footer />
						</section>
					</DarkModeContext.Provider>
				</QueryClientProvider>
			)}
		</>
	)
}

export default App
