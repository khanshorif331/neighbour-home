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

export const DarkModeContext = createContext('')
const queryClient = new QueryClient()

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, [5000])
	}, [])

	return (
		<>
			{loading ? (
				<div className='flex justify-center items-center w-full h-[100vh] bg-black flex-col'>
					<h1 className='text-red-500'>NeighBour Home</h1>
					<BarLoader
						color={'#36D7B7'}
						loading={loading}
						// cssOverride={override}
						size={450}
						width={150}
						speedMultiplier={0.7}
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
								<Route path='/' element={<Home />} />
								<Route path='/dashboard' element={<Dashboard />}>
									<Route index element={<Users />}></Route>
									<Route
										path='addReview'
										element={<AddReview />}
									></Route>
									<Route
										path='manageBooks'
										element={<ManageBooks />}
									></Route>
									<Route
										path='manageEngineers'
										element={<ManageEngineers />}
									></Route>
									<Route
										path='constructors'
										element={<Constructors />}
									></Route>
									<Route
										path='manageBooks'
										element={<ManageBooks />}
									></Route>
									<Route
										path='manageEngineers'
										element={<ManageEngineers />}
									></Route>
								</Route>
								<Route path='/user/:id' element={<UserDetails />} />
								<Route path='/login' element={<Login />} />
								<Route path='/register' element={<Register />} />
								<Route
									path='/details/:serviceId'
									element={<ServiceDetails />}
								/>
								<Route
									path='/engineers'
									element={<EngineersTable></EngineersTable>}
								></Route>
								<Route
									path='/engineers/engineer/:engineerId'
									element={<EngineerDetails />}
								></Route>
								<Route path='/guides' element={<Guides />} />
								<Route path='/user_data' element={<UserData />} />
								<Route path='/addReview' element={<AddReview />} />
								<Route
									path='/bookDetail/:_id'
									element={<BookReview />}
								/>
								<Route path='*' element={<NotFound />} />
							</Routes>
							<Footer />
						</section>
					</DarkModeContext.Provider>
				</QueryClientProvider>
			)}
		</>
	)
}

export default App
