import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const Constructors = () => {
	const [constructor, setConstructor] = useState([])
	// const { isLoading, error, data } = useQuery('constructor', () =>
	// 	fetch('https://neighbour-home--server.herokuapp.com/constructor').then(
	// 		res => res.json()
	// 	)
	// )
	// console.log(data)

	// if (isLoading) return 'Loading...'

	// if (error) return 'An error has occurred: ' + error.message

	useEffect(() => {
		fetch('https://neighbour-home--server.herokuapp.com/constructor')
			.then(res => res.json())
			.then(data => setConstructor(data))
	}, [])

	return (
		<div>
			<h1>Heelo world</h1>
		</div>
	)
}

export default Constructors
