import React, { useContext, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Constructor from './Constructor'
import { DarkModeContext } from '../../../App'
import { useForm } from 'react-hook-form'
import Loading from '../../../Shared/Loading/Loading'
import Swal from 'sweetalert2'
import FormConstructor from './FormConstructor'

const Constructors = () => {
	const [darkMode] = useContext(DarkModeContext)
	const [loading, setLoading] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	const { isLoading, error, data, refetch } = useQuery(['constructor'], () =>
		fetch('https://neighbour-home--server.herokuapp.com/constructor').then(
			res => res.json()
		)
	)
	const imgStorageKey = '75bc4682c9291f359647ab98df5f76de'

	const getData = data => {
		const image = data?.photo[0]
		const formData = new FormData()
		formData.append('image', image)
		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

		// posting image to imgbb for getting hosted link
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(result => {
				if (result.success) {
					const photo = result.data.display_url
					const constructor = {
						picture: photo,
						title: data.title,
						type: data.type,
						duration: data.duration,
						assignment: data.assignment,
						discount: data.discount,
						price: data.price,
						description: data.description,
					}
					fetch(
						'https://neighbour-home--server.herokuapp.com/constructor',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(constructor),
						}
					)
						.then(res => res.json())
						.then(data => {
							if (data.message === 'Constructor created successfully') {
								// e.target.reset()
								// reset()
								Swal.fire({
									position: 'center',
									icon: 'success',
									title: 'Your Data has been saved',
									showConfirmButton: false,
									timer: 1500,
								})

								refetch()
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Oops...',
									text: 'Something went wrong!',
								})
							}
						})
				}
			})
	}

	if (isLoading) return <Loading></Loading>

	if (error) return 'An error has occurred: ' + error.message

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
				<div class='modal-box block mt-40 mb-10 h-[400px] border rounded-lg'>
					<label
						for='my-modal-3'
						class='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 class='text-lg font-bold'>
						Please provide the following information!
					</h3>
					{/* form */}
					<FormConstructor
						getData={getData}
						// reset={reset}
						// handleSubmit={handleSubmit}
						// errors={errors}
						// register={register}
					></FormConstructor>
				</div>
			</div>

			<div class='overflow-x-auto'>
				<table
					class={`${
						darkMode ? 'text-gray-400' : 'text-gray-500 table table-zebra'
					} w-full`}
				>
					<thead
						class={`${
							darkMode
								? 'bg-gray-700 text-gray-400'
								: 'text-gray-700  bg-gray-50 '
						} text-xs uppercase`}
					>
						<tr>
							<th className='py-2'>Sl.</th>
							<th>Title</th>
							<th>Type</th>
							<th>Price</th>
							<th>Duration</th>
							<th>Discount</th>
							<th>Projects</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody
						className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
					>
						{data.map((constructor, index) => (
							<Constructor
								key={constructor._id}
								index={index}
								constructor={constructor}
								refetch={refetch}
							></Constructor>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Constructors
