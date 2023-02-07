import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const CheckoutForm = ({ booking }) => {
	const stripe = useStripe()
	const elements = useElements()
	const [cardError, setCardError] = useState('')
	const [success, setSuccess] = useState('')
	const [processing, setProcessing] = useState(false)
	const [transactionId, setTransactionId] = useState('')
	const [clientSecret, setClientSecret] = useState('')

	const { _id, price, name, customerName, description, customerEmail } =
		booking
	useEffect(() => {
		fetch(
			'https://neighbour-home-backend.onrender.com/create-payment-intent',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify({ price }),
			}
		)
			.then(res => res.json())
			.then(data => {
				if (data?.clientSecret) {
					setClientSecret(data?.clientSecret)
				}
			})
	}, [price])
	const handleSubmit = async event => {
		event.preventDefault()
		setProcessing(true)
		if (!stripe || !elements) {
			return
		}

		const card = elements.getElement(CardElement)
		if (card == null) {
			return
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		})
		if (error) {
			//    console.log(error);
			setCardError(error.message)
		} else {
			setCardError('')
		}
		setSuccess('')
		// setProcessing(true);
		// confirm card payment
		const { paymentIntent, error: intentError } =
			await stripe?.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: customerName,
						email: customerEmail,
					},
				},
			})
		if (intentError) {
			setCardError(intentError?.message)
			success('')
			setProcessing(false)
		} else {
			setCardError('')
			setTransactionId(paymentIntent.id)
			console.log(paymentIntent)
			setSuccess('Congratulation!  your payment is completed.')
			event.target.reset()
			//store payment on database
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className="btn btn-sm btn-success mt-4"
					type="submit"
					disabled={!stripe || !clientSecret || !success}
				>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-500">{cardError}</p>}
			{success && (
				<div className="text-green-500">
					<p>{success}</p>
					<p>
						Your Transaction Id:{' '}
						<span className="text-orange-500 font-bold">
							{transactionId}
						</span>
					</p>
				</div>
			)}
		</>
	)
}

export default CheckoutForm
