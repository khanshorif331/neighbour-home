import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './Authentication/Login/Login'
import Register from './Authentication/Register/Register'
<<<<<<< HEAD
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
=======
import { createContext, useState } from 'react'
import Guides from './Pages/Homepage/Guides/Guides'
import AddReview from './Pages/Homepage/AddReview/AddReview'
import NotFound from './components/NotFound/NotFound'
import BookReview from './Pages/Homepage/BookReview/BookReview'

export const DarkModeContext = createContext("")
>>>>>>> b775cd741a3cef23fa18fe00bb100fce855f1712

function App() {
	const [darkMode, setDarkMode] = useState(false)
	return (
<<<<<<< HEAD
		<section>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/details/:serviceId' element={<ServiceDetails/>} />
			</Routes>
			<Footer/>
		</section>
=======
		<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
			<section  className={`${darkMode && "dark-theme"} duration-300`}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/guides' element={<Guides />} />
					<Route path='/addReview' element={<AddReview />} />
					<Route path="/bookDetail/:_id" element={<BookReview />} />
					<Route path='*' element={<NotFound/>} />
				</Routes>
				<Footer />
			</section>
		</DarkModeContext.Provider>
>>>>>>> b775cd741a3cef23fa18fe00bb100fce855f1712
	)
}

export default App
