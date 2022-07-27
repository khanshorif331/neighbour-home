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

export const DarkModeContext = createContext("")

function App() {
	const [darkMode, setDarkMode] = useState(false)
	return (
		<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
			<section  className={`${darkMode && "dark-theme"}`}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/guides' element={<Guides />} />
					<Route path='/addReview' element={<AddReview />} />
				</Routes>
				<Footer />
			</section>
		</DarkModeContext.Provider>
	)
}

export default App
