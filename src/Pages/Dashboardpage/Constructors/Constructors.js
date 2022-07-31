import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Constructor from './Constructor'
import { DarkModeContext } from '../../../App'
import { useForm } from 'react-hook-form'
import Loading from '../../../Shared/Loading/Loading'

const Constructors = () => {
	// const [constructors, setConstructors] = useState([])

	const [darkMode] = useContext(DarkModeContext)
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
	console.log('before')
	const getData = data => {
		console.log('gooing to submit', data)
	}
	// const getData = data => {
	// 	console.log(data, 'hello data')
	// 	console.log('form submission')

	// 	const image = data?.photo[0]
	// 	const formData = new FormData()
	// 	formData.append('image', image)
	// 	const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

	// 	// fetch(url, {
	// 	// 	method: 'POST',
	// 	// 	body: formData,
	// 	// })
	// 	// 	.then(res => res.json())
	// 	// 	.then(result => {
	// 	// 		if (result.success) {
	// 	// 			const photo = result.data.display_url
	// 	// 			console.log(photo)
	// 	// 			const constructor = {
	// 	// 				photo: photo,
	// 	// 				title: data.title,
	// 	// 				type: data.type,
	// 	// 				duration: data.duration,
	// 	// 				assignment: data.assignment,
	// 	// 				discount: data.discount,
	// 	// 				price: data.price,
	// 	// 				description: data.description,
	// 	// }
	// 	// console.log(constructor)
	// 	// fetch(``, {
	// 	// 	method: 'PUT',
	// 	// 	headers: {
	// 	// 		'content-type': 'application/json',
	// 	// 	},
	// 	// })
	// 	// 	.then(res => res.json())
	// 	// 	.then(updatedData => {
	// 	// 		if (updatedData.modifiedCount > 0) {
	// 	// 			console.log('Thanks For Your Information')
	// 	// 		} else {
	// 	// 			console.error('Failed To Submit')
	// 	// 		}
	// 	// 	})
	// 	// 		}
	// 	// 	})
	// 	// console.log(data, 'hello data')
	// }
	console.log('after')

	// const handleDataSubmit = data => {
	//     console.log(data, selectOption)
	//     reset()
	// }

	// console.log(data)

	if (isLoading) return <Loading></Loading>

	if (error) return 'An error has occurred: ' + error.message

	// useEffect(() => {
	// 	fetch('https://neighbour-home--server.herokuapp.com/constructor')
	// 		.then(res => res.json())
	// 		.then(data => setConstructors(data))
	// }, [constructors])

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
						Congratulations random Internet user!
					</h3>
					{/* form */}

					<form onSubmit={handleSubmit(getData)}>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Title
								</label>
								<input
									{...register('title', {
										required: {
											value: true,
											message: 'Title is Required',
										},
										minLength: {
											value: 3,
											message: 'Title Must be 3 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Mega Constructions'
								/>
								<label>
									{errors.title?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.title?.message}
										</p>
									)}
									{errors.title?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.title?.message}
										</p>
									)}
								</label>
							</div>
							{/* taking data for */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Type
								</label>
								<input
									{...register('type', {
										required: {
											value: true,
											message: 'Type is required',
										},
										minLength: {
											value: 3,
											message: 'Type Must be 3 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='New Trending,Home Improvement,Office Renovation,Government'
								/>
								<label>
									{errors.type?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.type?.message}
										</p>
									)}
									{errors.type?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.type?.message}
										</p>
									)}
								</label>
							</div>
							{/* duration data input */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Duration
								</label>
								<input
									{...register('duration', {
										required: {
											value: true,
											message: 'Duration is required',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='90 Days'
								/>
								<label>
									{errors.duration?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.duration?.message}
										</p>
									)}
								</label>
							</div>
							{/*assignment field */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Assignment
								</label>
								<input
									{...register('assignment', {
										required: {
											value: true,
											message: 'Assignment is required',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='10 Projects'
								/>
								<label>
									{errors.assignment?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.assignment.message}
										</p>
									)}
								</label>
							</div>
							{/* price field */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Price
								</label>
								<input
									{...register('price', {
										required: {
											value: true,
											message: 'Price is required',
										},
										minLength: {
											value: 2,
											message: 'Price Must be 2 character or longer',
										},
									})}
									type='number'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='1000'
								/>
								<label>
									{errors.price?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.price.message}
										</p>
									)}
									{errors.price?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.price.message}
										</p>
									)}
								</label>
							</div>

							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Country
								</label>
								<input
									{...register('country', {
										required: {
											value: true,
											message: 'country is required',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Your Country'
								/>
								<label>
									{errors.country?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.country.message}
										</p>
									)}
								</label>
							</div>
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									NID
								</label>
								<input
									{...register('nid', {
										required: {
											value: true,
											message: 'nid is required',
										},
										minLength: {
											value: 11,
											message: 'NID Must be 11 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Your NID Card Number'
								/>
								<label>
									{errors.nid?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.nid.message}
										</p>
									)}
									{errors.nid?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.nid.message}
										</p>
									)}
								</label>
							</div>
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Your Photo
								</label>
								<input
									{...register('photo', {
										required: {
											value: true,
											message: 'Photo is required',
										},
									})}
									type='file'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Your Photo'
								/>
								<label>
									{errors.photo?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.photo.message}
										</p>
									)}
								</label>
							</div>
							{/* <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">What Are Your</label>
                                <select onChange={handleChange} defaultValue={'DEFAULT'} className='select mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'>
                                    <option disabled value='DEFAULT'>Pick your role</option>
                                    <option value={'Engineer'}>Engineer</option>
                                    <option value={'Worker'}>Worker</option>
                                    <option value={'Buyer'}>Buyer</option>
                                </select>
                            </div> */}
						</div>
						<div className='text-center'>
							<input
								className='bg-sky-600 hover:bg-sky-500 duration-300 p-2 rounded ease-in-out hover:scale-125 text-white mt-9 cursor-pointer'
								type='submit'
								value='Submit Now'
							/>
						</div>
					</form>
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
