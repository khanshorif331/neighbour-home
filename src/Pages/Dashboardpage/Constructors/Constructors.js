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
			{/* Add new button for adding constructor */}
			<div className='text-end mb-2 w-full'>
				{/* <button class='btn w-full md:btn-wide'>Add New</button> */}

				{/* <!-- The button to open modal --> */}
				<label for='my-modal-3' class='btn modal-button w-full md:btn-wide'>
					Add New
				</label>
			</div>

			{/* <!-- Put this part before </body> tag --> */}
			<input type='checkbox' id='my-modal-3' class='modal-toggle' />
			<div class='modal'>
				<div class='modal-box relative'>
					<label
						for='my-modal-3'
						class='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 class='text-lg font-bold'>
						Congratulations random Internet user!
					</h3>
					<p class='py-4'>
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div class='modal-action flex justify-center'>
						<label for='my-modal-3' class='btn w-full md:btn-wide'>
							Submit
						</label>
					</div>
				</div>
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
