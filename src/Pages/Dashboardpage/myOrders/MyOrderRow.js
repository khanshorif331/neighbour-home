import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { DarkModeContext } from '../../../App'

const MyOrderRow = ({ index, d, refetch }) => {
	const { customerEmail, customerPhone, customerName, customerAddress } =
		d?.data
	const { name, email, _id, picture, phone, role } = d.engineer
	const [darkMode] = useContext(DarkModeContext)
	const lastEmail = d?.engineer?.email.split('@')
	const handleDelete = id => {
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this file!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then(willDelete => {
			if (willDelete) {
				fetch(`https://neighbour-home-backend.onrender.com/booking/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then(res => res.json())
					.then(data => {
						console.log(data)
						if (data.message) {
							swal('Your file has been deleted!', {
								icon: 'success',
							})
							refetch()
						}
					})
			}
		})
	}

	return (
		<tr className={`${darkMode ? 'text-gray-400 py-2' : 'text-gray-500'} `}>
			<th>{index + 1}</th>

			<td className="">{customerName}</td>
			<td className="">{customerEmail}</td>

			<td className="">{role}</td>
			<td>
				{d?.status !== 'accept' ? (
					email
				) : (
					<>
						{email.slice(0, 1)}****@{lastEmail[1]}
					</>
				)}
			</td>
			<td>
				{d?.status !== 'accept' ? (
					phone
				) : (
					<>
						{String(phone).slice(0, 2)}*****{String(phone).slice(8, 10)}
					</>
				)}
			</td>
			<td className="text-success font-semibold">
				{d.status === 'accept' ? 'pending' : 'ready to hire'}
			</td>
			<td className="flex flex-col">
				<div className="flex align-middle">
					<Link
						to={`/dashboard/bookingDetails/${d._id}`}
						className={`${d.status === 'accept' ? 'hidden' : 'block'}`}
					>
						<button className={` btn btn-xs mb-1 hover:bg-slate-800`}>
							details
						</button>
					</Link>
					<FontAwesomeIcon
						onClick={() => handleDelete(d._id)}
						className={`text-red-500 ml-2 mt-1 align-middle  ${
							d?.status === 'complete' ? 'block' : 'hidden'
						}`}
						icon={faTrashCan}
					/>
				</div>
				{d?.status === 'complete' ? (
					<Link to={`/dashboard/paymentFor/${d?._id}`}>
						<button className="btn btn-xs btn-success">Pay</button>
					</Link>
				) : (
					<button
						className="btn btn-xs btn-success hover:bg-slate-500"
						onClick={() => handleDelete(d._id)}
					>
						delete
					</button>
				)}
				{/* <button className="btn btn-xs btn-warning hover:bg-slate-800">delete</button> */}
			</td>
		</tr>
	)
}

export default MyOrderRow
