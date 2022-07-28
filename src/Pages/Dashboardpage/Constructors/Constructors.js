import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Constructor from './Constructor'

const Constructors = () => {
	const [constructors, setConstructors] = useState([])
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
			.then(data => setConstructors(data))
	}, [])

	return (
		<div className='sm:px-10 px-2 pb-5'>
			<h1>Heelo world</h1>
			{/* starting the table */}

			<div class='overflow-x-auto'>
				<table class='table table-compact w-full'>
					<thead>
						<tr>
							<th>Sl.</th>
							<th>Title</th>
							<th>Type</th>
							<th>Price</th>
							<th>Duration</th>
							<th>Discount</th>
							<th>Assignment</th>
						</tr>
					</thead>
					<tbody>
						{constructors.map((constructor, index) => (
							<Constructor
								key={constructor._id}
								index={index}
								constructor={constructor}
							></Constructor>
						))}
					</tbody>
					{/* <tfoot>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>company</th>
							<th>location</th>
							<th>Last Login</th>
							<th>Favorite Color</th>
						</tr>
					</tfoot> */}
				</table>
			</div>
		</div>
	)
}

export default Constructors
