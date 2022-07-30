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
		console.log('gooing to submit')
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
						{/* className='grid grid-cols-1 md:grid-cols-2 gap-7' */}
						<div>
							{/* taking the title value */}
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
											{errors.title.message}
										</p>
									)}
									{errors.title?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.title.message}
										</p>
									)}
								</label>
							</div>
							{/* Taking data for type */}
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
											message: 'type is required',
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
									{errors.username?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.type.message}
										</p>
									)}
									{errors.type?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.type.message}
										</p>
									)}
								</label>
							</div>
							{/* Adding picture field */}
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

							{/* duration data input field */}
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
									placeholder='LinkdIne Link'
								/>
								<label>
									{errors.duration?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.duration.message}
										</p>
									)}
								</label>
							</div>
							{/* assignment */}
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
											message: 'assignment is required',
										},
										minLength: {
											value: 5,
											message:
												'Assignment Must be 5 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Assignment'
								/>
								<label>
									{errors.assignment?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.assignment.message}
										</p>
									)}
									{errors.assignment?.type === 'minLength' && (
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
									{errors.assignment?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.price.message}
										</p>
									)}
									{errors.assignment?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.price.message}
										</p>
									)}
								</label>
							</div>

							{/* discount */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Discount
								</label>
								<input
									{...register('discount', {
										required: {
											value: true,
											message: 'discount is required',
										},
										minLength: {
											value: 5,
											message:
												'Discount Must be 5 character or longer',
										},
									})}
									type='number'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='15% Discount'
								/>
								<label>
									{errors.assignment?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.discount.message}
										</p>
									)}
									{errors.assignment?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.discount.message}
										</p>
									)}
								</label>
							</div>

							{/* description field */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Description
								</label>
								<input
									{...register('description', {
										required: {
											value: true,
											message: 'Description is required',
										},
										minLength: {
											value: 10,
											message:
												'description Must be 10 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Description'
								/>
								<label>
									{errors.description?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.description.message}
										</p>
									)}
									{errors.description?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.description.message}
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
						{/* modal-action */}
						<div class=' flex justify-center'>
							{/* <label for='' class='btn w-full md:btn-wide'>
								Submit
							</label> */}
							<input
								className='btn w-full mt-4'
								type='submit'
								value='Submit'
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
