import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './Authentication/Login/Login'
import Register from './Authentication/Register/Register'

function App() {
	return (
		<section>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
			</Routes>
			<Footer/>
		</section>
	)
}

export default App
