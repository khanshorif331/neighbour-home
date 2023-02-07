import { useEffect, useState } from 'react'

const useBooking = engineerId => {
	const [booking, setBooking] = useState({})
	useEffect(() => {
		fetch(
			`https://neighbour-home-backend.onrender.com/engineer/${engineerId}`
		)
			.then(res => res.json())
			.then(data => setBooking(data))
	}, [booking, engineerId, setBooking])
	return [booking, setBooking]
}
export default useBooking
