import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Homepage/Home/Home'

function App() {
	return (
		<section>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>} />
			</Routes>
		</section>
	)
}

export default App
