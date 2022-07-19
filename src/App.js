import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<section>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>} />
			</Routes>
			<Footer/>
		</section>
	)
}

export default App
