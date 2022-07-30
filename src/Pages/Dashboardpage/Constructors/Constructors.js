import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Constructor from './Constructor'
import { DarkModeContext } from '../../../App'
import { useForm } from 'react-hook-form'

const Constructors = () => {
	const [constructors, setConstructors] = useState([])

	const [darkMode] = useContext(DarkModeContext)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	const imgStorageKey = '75bc4682c9291f359647ab98df5f76de'

	const getData = async data => {
		console.log(data)

		const image = data?.photo[0]
		console.log(image)
		const formData = new FormData()
		formData.append('image', image)
		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
		console.log(url, 'url')

		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(data => console.log(data, 'result image'))
		console.log(data, 'hello data')
	}

	// const handleDataSubmit = data => {
	//     console.log(data, selectOption)
	//     reset()
	// }

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
				<div class='modal-box block mt-40'>
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
									{errors.name?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.name.message}
										</p>
									)}
									{errors.name?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.name.message}
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
									placeholder='username69'
								/>
								<label>
									{errors.username?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.username.message}
										</p>
									)}
									{errors.username?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.username.message}
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

							{/* something else */}
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Zip/Postal
								</label>
								<input
									{...register('zip', {
										required: {
											value: true,
											message: 'zip code is required',
										},
									})}
									type='number'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='LinkdIne Link'
								/>
								<label>
									{errors.zip?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.zip.message}
										</p>
									)}
								</label>
							</div>
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Phone
								</label>
								<input
									{...register('phone', {
										required: {
											value: true,
											message: 'phone is required',
										},
										minLength: {
											value: 5,
											message:
												'Phone Must be 10 character or longer',
										},
									})}
									type='number'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='+8801XXXXXXXXX'
								/>
								<label>
									{errors.phone?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.phone.message}
										</p>
									)}
									{errors.phone?.type === 'minLength' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.zip.message}
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
						{/* <div className='text-center'>
							<input
								className='bg-sky-600 hover:bg-sky-500 duration-300 p-2 rounded ease-in-out hover:scale-125 text-white mt-9 cursor-pointer'
								type='submit'
								value='Submit Now'
							/>
						</div> */}
						{/* modal-action */}
						<div class=' flex justify-center'>
							{/* <label for='' class='btn w-full md:btn-wide'>
								Submit
							</label> */}
							<input
								className='btn w-full md:btn-wide mt-4'
								type='submit'
								value='Submit'
							/>
						</div>
					</form>

					{/* mod */}
					{/* <div class='modal-action flex justify-center'>
						<label for='my-modal-3' class='btn w-full md:btn-wide'>
							Submit
						</label>
					</div> */}
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
