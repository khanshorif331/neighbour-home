import { useEffect, useState } from 'react'

const useServices = () => {
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://neighbour-home-backend.onrender.com/constructor')
			.then(res => res.json())
			.then(data => setServices(data))
	}, [services, setServices])
	return [services, setServices]
}
export default useServices
