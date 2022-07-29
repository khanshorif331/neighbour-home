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
	}, [constructors])

	return (
		<div className='sm:px-10 px-2 pb-5'>
			{/* starting the table */}
			<div className='text-end mb-2 w-full'>
				<button class='btn w-full md:btn-wide'>Add New</button>
			</div>

			<div class='overflow-x-auto'>
				<table class='table table-zebra w-full'>
					<thead>
						<tr>
							<th>Sl.</th>
							<th>Title</th>
							<th>Type</th>
							<th>Price</th>
							<th>Duration</th>
							<th>Discount</th>
							<th>Assignment</th>
							<th>Action</th>
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
				</table>
			</div>
		</div>
	)
}

export default Constructors
