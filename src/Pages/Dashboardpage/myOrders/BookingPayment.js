import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useParams } from 'react-router-dom'
// import Loading from '../../../Shared/Loading';
import CheckoutForm from './CheckoutForm'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Shared/Loading/Loading'

const stripePromise = loadStripe(
	'pk_test_51L36HPDSwcecuX813VvXAEHIEcEaDJFFSepUyBw0E6BoJXV7awyaIBzaddJCZL3bLGEnkuiKJkOCdrZPp5xdgAzJ00rSmMzm0q'
)

const BookingPayment = () => {
	const { id } = useParams()
	console.log(id)
	const url = `https://neighbour-home-backend.onrender.com/booking/${id}`

	const {
		data: booking,
		isLoading,
		refetch,
	} = useQuery(['booking', id], () =>
		fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}).then(res => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<div className="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
				<div className="card-body">
					<p className="text-success font-bold">
						Hello, {booking?.data?.customerName}
					</p>
					<h2 className="card-title">
						Please Pay for {booking?.engineer?.name}
					</h2>
					<p>
						Please Pay:{' '}
						<span className="text-error">${booking?.price}</span> For
						Hiring this Engineer
					</p>
				</div>
			</div>
			<div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
				<div className="card-body">
					<Elements stripe={stripePromise}>
						<CheckoutForm booking={booking} />
					</Elements>
				</div>
			</div>
		</div>
	)
}

export default BookingPayment
