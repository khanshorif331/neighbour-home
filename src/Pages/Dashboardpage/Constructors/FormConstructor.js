import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { DarkModeContext } from '../../../App'
const FormConstructor = ({ getData, constructor, updateInfo }) => {
	const {
		title,
		type,
		price,
		picture,
		duration,
		discount,
		assignment,
		_id,
		description,
	} = constructor
	const [darkMode] = useContext(DarkModeContext)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	return (
		<form
			onSubmit={getData ? handleSubmit(getData) : handleSubmit(updateInfo)}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
				<div>
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Title
					</label>
					<input
						defaultValue={constructor ? title : ''}
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
				{/* {getData && reset()} */}
				{/* taking data for */}
				<div>
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Type
					</label>
					<input
						defaultValue={constructor ? type : ''}
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
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Duration
					</label>
					<input
						defaultValue={constructor ? duration : ''}
						{...register('duration', {
							required: {
								value: true,
								message: 'Duration is required',
							},
						})}
						type='number'
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
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Assignment
					</label>
					<input
						defaultValue={constructor ? assignment : ''}
						{...register('assignment', {
							required: {
								value: true,
								message: 'Assignment is required',
							},
						})}
						type='number'
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
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Price
					</label>
					<input
						defaultValue={constructor ? price : ''}
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
				{/*discount field  */}
				<div>
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Discount
					</label>
					<input
						defaultValue={constructor ? discount : ''}
						{...register('discount', {
							required: {
								value: true,
								message: 'Discount is required',
							},
						})}
						type='number'
						className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
						placeholder='30%'
					/>
					<label>
						{errors.discount?.type === 'required' && (
							<p className='text-red-600 text-sm font-semibold'>
								{errors.discount.message}
							</p>
						)}
					</label>
				</div>
				{/* description field */}
				<div>
					<label className={`${darkMode && 'text-white'}`} htmlFor=''>
						Description
					</label>
					<textarea
						defaultValue={constructor ? description : ''}
						// defaultValue={constructor ? description : ''}
						{...register('description', {
							required: {
								value: true,
								message: 'Description is required',
							},
							minLength: {
								value: 10,
								message: ' Must be 10 character or longer',
							},
						})}
						type='text'
						className='mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'
						placeholder='This is a project'
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
				{/* image field */}
				{picture ? (
					''
				) : (
					<div>
						<label className={`${darkMode && 'text-white'}`} htmlFor=''>
							Your Photo
						</label>
						<input
							// defaultValue={constructor ? picture : ''}
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
				)}
			</div>
			<div className='text-center'>
				<input
					className='btn w-full mt-4'
					type='submit'
					value={_id ? 'Submit To Update' : 'Submit To Add'}
				/>
			</div>
		</form>
	)
}

export default FormConstructor
