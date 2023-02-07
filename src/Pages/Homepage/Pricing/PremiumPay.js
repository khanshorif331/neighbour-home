import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillWarning } from 'react-icons/ai'

const PremiumPay = ({ price }) => {
	const stripe = useStripe()
	const elements = useElements()
	const [cardError, setCardError] = useState('')
	// const [clientSecret, setClientSecret] = useState("");

	// useEffect(() => {
	//   fetch(
	//     "https://neighbour-home-backend.onrender.com/create-payment-intent",
	//     {
	//       method: "POST",
	//       headers: {
	//         "content-type": "application/json",
	//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
	//       },
	//       body: JSON.stringify({ price }),
	//     }
	//   )
	//     .then((res) => res.json())
	//     .then((data) => {
	//       console.log(data);
	//       if (data?.clientSecret) {
	//         setClientSecret(data.clientSecret);
	//       }
	//     });
	// }, [price]);

	const handleSubmit = async e => {
		e.preventDefault()

		if (!stripe || !elements) {
			return
		}

		const card = elements.getElement(CardElement)

		if (card == null) {
			return
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		})
		if (error) {
			setCardError(error.message)
		} else {
			setCardError('')
		}
	}
	return (
		<div className="shadow-xl p-7 w-5/6 rounded-xl text-center m-auto">
			<h2>Pay With Visa, Mastercard, DebitCard etc.</h2>
			<form onSubmit={handleSubmit}>
				<CardElement
					className="py-5 my-2 "
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
					type="submit"
					/* disabled={!stripe || !clientSecret} */
					style={{
						fontFamily: 'Open Sans, sans-serif',
						letterSpacing: '2px',
					}}
					className={`hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-8 mt-5 py-1.5 cursor-pointer`}
				>
					Pay ${price}
				</button>
			</form>
			{cardError && (
				<p className="text-sm flex items-center mt-3 text-red-600 text-center">
					{' '}
					<AiFillWarning /> {cardError} !!!
				</p>
			)}
		</div>
	)
}

export default PremiumPay
