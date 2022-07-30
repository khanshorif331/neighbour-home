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

	const getData = data => {
		console.log(data)
	}

	// const [selectOption, setSelectOption] = useState('')

	// const handleChange = e => {
	//     setSelectOption(e.target.value);
	// }

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
					{/* form */}

					<form onSubmit={handleSubmit(getData)}>
						{/* className='grid grid-cols-1 md:grid-cols-2 gap-7' */}
						<div>
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Name
								</label>
								<input
									{...register('name', {
										required: {
											value: true,
											message: 'Name is Required',
										},
										minLength: {
											value: 3,
											message: 'Name Must be 3 character or longer',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='John Doe'
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
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Username
								</label>
								<input
									{...register('username', {
										required: {
											value: true,
											message: 'username is required',
										},
										minLength: {
											value: 5,
											message:
												'Username Must be 5 character or longer',
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
							<div>
								<label
									className={`${darkMode && 'text-white'}`}
									htmlFor=''
								>
									Address
								</label>
								<input
									{...register('address', {
										required: {
											value: true,
											message: 'address is required',
										},
									})}
									type='text'
									className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
									placeholder='Road 12, Mirpur, Dhaka'
								/>
								<label>
									{errors.address?.type === 'required' && (
										<p className='text-red-600 text-sm font-semibold'>
											{errors.address.message}
										</p>
									)}
								</label>
							</div>
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
							<label for='my-modal-3' class='btn w-full md:btn-wide'>
								Submit
							</label>
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
