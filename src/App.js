import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './Authentication/Login/Login'
import Register from './Authentication/Register/Register'
import { createContext, useState } from 'react'
import Guides from './Pages/Homepage/Guides/Guides'
import AddReview from './Pages/Homepage/AddReview/AddReview'
import NotFound from './components/NotFound/NotFound'
import UserData from './Pages/UserData/UserData'
import BookReview from './Pages/Homepage/BookReview/BookReview'
import Dashboard from './Pages/Dashboardpage/Dashboard/Dashboard'
import Users from './Pages/Dashboardpage/Users/Users'
import Constructors from './Pages/Dashboardpage/Constructors/Constructors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const DarkModeContext = createContext('')
const queryClient = new QueryClient()

function App() {
	const [darkMode, setDarkMode] = useState(false)
	return (
		<QueryClientProvider client={queryClient}>
			<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
				<section className={`${darkMode && 'dark-theme'} duration-300`}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/dashboard' element={<Dashboard />}>
							<Route index element={<Users />}></Route>
							<Route path='addReview' element={<AddReview />}></Route>
							<Route
								path='constructors'
								element={<Constructors />}
							></Route>
						</Route>
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/guides' element={<Guides />} />
						<Route path='/user_data' element={<UserData />} />
						<Route path='/addReview' element={<AddReview />} />
						<Route path='/bookDetail/:_id' element={<BookReview />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</section>
			</DarkModeContext.Provider>
		</QueryClientProvider>
	)
}

export default App
