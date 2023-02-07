import { useEffect, useState } from 'react'

const useEngineer = engineerId => {
	const [engineer, setEngineer] = useState({})
	const [enLoading, setEnLoading] = useState(true)
	useEffect(() => {
		fetch(`https://neighbour-home-backend.onrender.com/user/${engineerId}`)
			.then(res => res.json())
			.then(data => {
				setEngineer(data)
				setEnLoading(false)
			})
	}, [engineer, engineerId, enLoading, setEngineer])
	return [engineer, setEngineer]
}
export default useEngineer
