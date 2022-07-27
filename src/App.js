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

export const DarkModeContext = createContext("")

function App() {
	const [darkMode, setDarkMode] = useState(false)
	return (
		<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
			<section  className={`${darkMode && "dark-theme"} duration-300`}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/guides' element={<Guides />} />
					<Route path='/user_data' element={<UserData/>} />
					<Route path='/addReview' element={<AddReview />} />
					<Route path="/bookDetail/:_id" element={<BookReview />} />
					<Route path='*' element={<NotFound/>} />
				</Routes>
				<Footer />
			</section>
		</DarkModeContext.Provider>
	)
}

export default App
