import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../../../firebase.init'

const Address = () => {
	const [toogleAddressEdit, setToogleAddressEdit] = React.useState(false)
	const [user] = useAuthState(auth)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const handleUpdateAddress = data => {
		console.log(data)
		fetch(
			`https://neighbour-home-backend.onrender.com/user?email=${user?.email}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: {
					currentCountry: data.currentCountry,
					currentAddress: data.currentAddress,
					currentZip: data.currentZip,
					country: data.country,
					zip: data.zip,
					address: data.address,
				},
			}
		)
			.then(res => res.json())
			.then(data => {
				console.log(data)
			})
		reset()
	}

	return (
		<section>
			<h1 className="text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300">
				My Address
			</h1>

			{toogleAddressEdit ? (
				<form onSubmit={handleSubmit(handleUpdateAddress)}>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4">
						<div>
							<label className="font-medium">Your Current Country</label>
							<input
								{...register('currentCountry', {
									required: {
										value: true,
										message: 'Current Country is Required',
									},
									minLength: {
										value: 3,
										message: 'Minimum 3 Character Needed',
									},
								})}
								type="text"
								placeholder="Bangladesh"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.currentCountry?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentCountry.message}
								</p>
							)}
							{errors.currentCountry?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentCountry.message}
								</p>
							)}
						</div>
						<div>
							<label className="font-medium">Your Current Town</label>
							<input
								{...register('currentAddress', {
									required: {
										value: true,
										message: 'Current Address is Required',
									},
									minLength: {
										value: 5,
										message: 'Minimum 5 Character Needed',
									},
								})}
								type="text"
								placeholder="Dhaka"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.currentAddress?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentAddress.message}
								</p>
							)}
							{errors.currentAddress?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentAddress.message}
								</p>
							)}
						</div>
						<div>
							<label className="font-medium">
								Your Current Zip Code
							</label>
							<input
								{...register('currentZip', {
									required: {
										value: true,
										message: 'Current Zip is Required',
									},
									minLength: {
										value: 3,
										message: 'Minimum 3 Character Needed',
									},
								})}
								type="number"
								placeholder="64611"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.currentZip?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentZip.message}
								</p>
							)}
							{errors.currentZip?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.currentZip.message}
								</p>
							)}
						</div>
						<div>
							<label className="font-medium">
								Your Permanent Country
							</label>
							<input
								{...register('country', {
									required: {
										value: true,
										message: 'Country is Required',
									},
									minLength: {
										value: 3,
										message: 'Minimum 3 Character Needed',
									},
								})}
								type="text"
								placeholder="USA"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.country?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.country.message}
								</p>
							)}
							{errors.country?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.country.message}
								</p>
							)}
						</div>
						<div>
							<label className="font-medium">Your Permanent Town</label>
							<input
								{...register('address', {
									required: {
										value: true,
										message: 'Town is Required',
									},
									minLength: {
										value: 4,
										message: 'Minimum 4 Character Needed',
									},
								})}
								type="text"
								placeholder="New York"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.address?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.address.message}
								</p>
							)}
							{errors.address?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.address.message}
								</p>
							)}
						</div>
						<div>
							<label className="font-medium">Your Permanent Zip</label>
							<input
								{...register('zip', {
									required: {
										value: true,
										message: 'Zip is Required',
									},
									minLength: {
										value: 3,
										message: 'Minimum 3 Character Needed',
									},
								})}
								type="number"
								placeholder="75482"
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.zip?.type === 'required' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.zip.message}
								</p>
							)}
							{errors.zip?.type === 'minLength' && (
								<p className="text-red-600 text-sm font-semibold">
									{errors.zip.message}
								</p>
							)}
						</div>
					</div>
					<div className="text-center mb-1">
						<button className="bg-green-600 font-semibold py-2 px-5 text-white rounded-full">
							Update
						</button>
					</div>
				</form>
			) : (
				<div className="flex md:flex-row flex-col md:p-10 p-4 ">
					<div className="md:pr-28">
						<h2 className="font-semibold text-blue-600">
							Present Address
						</h2>
						<div className="grid lg:grid-cols-2 grid-cols-1 md:mt-5">
							<div>
								<h4 className="text-sm font-bold">Your County</h4>
								<p>Bangladesh</p>
							</div>
							<div className="lg:pl-10">
								<h4 className="text-sm font-bold">Your Town</h4>
								<p>Dhaka</p>
							</div>
							<div className="md:mt-5">
								<h4 className="text-sm font-bold">Zip Code</h4>
								<p>7830</p>
							</div>
						</div>
					</div>
					<div>
						<h2 className="font-semibold text-blue-600">
							Permanent Address
						</h2>
						<div className="grid lg:grid-cols-2 grid-cols-1 md:mt-5">
							<div>
								<h4 className="text-sm font-bold">Your County</h4>
								<p>Bangladesh</p>
							</div>
							<div className="lg:pl-10">
								<h4 className="text-sm font-bold">Your Town</h4>
								<p>Dhaka</p>
							</div>
							<div className="md:mt-5">
								<h4 className="text-sm font-bold">Zip Code</h4>
								<p>7830</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{toogleAddressEdit ? (
				<div className="text-center">
					<button
						onClick={() => setToogleAddressEdit(!toogleAddressEdit)}
						className="bg-red-600 font-semibold py-2 px-5 text-white rounded-full"
					>
						Cancel Edit
					</button>
				</div>
			) : (
				<div className="text-center">
					<button
						onClick={() => setToogleAddressEdit(!toogleAddressEdit)}
						className="bg-blue-600 font-semibold py-2 px-5 text-white rounded-full"
					>
						Edit Address
					</button>
				</div>
			)}
		</section>
	)
}

export default Address
