import React, { useContext, useRef } from 'react'
import { DarkModeContext } from '../../../../App'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import AcceptModal from './AcceptModal'
import { useState } from 'react'

const MyHiringRow = ({ index, d, refetch }) => {
	// console.log(d?.data?.customerEmail);
	const { customerEmail, customerPhone, customerName } = d?.data
	const { name, email, _id, phone } = d?.engineer
	let { status } = d
	const [bookingModal, setBookingModal] = useState(true)
	const [darkMode] = useContext(DarkModeContext)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	const form = useRef()
	const lastEmail = d?.engineer?.email.split('@')

	// const sendEmail = (data) => {
	//   emailjs
	//     .sendForm(
	//       "neighbourHome",
	//       "template_2jdv676",
	//       form.current,
	//       "fjfswEx9fDSDkZnui"
	//     )
	//     .then(
	//       (res) => {
	//         console.log(res);
	//         if (res.status === 200) {
	//           toast.success("Message sent successfully", { id: "success" });
	//           reset();
	//         }
	//       },
	//       (err) => {
	//         toast.error("Message not sent", { id: "error" });
	//       }
	//     );
	// };

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

			<td className="">{name}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td className="text-success font-semibold">
				{d.status === 'processing' ? 'pending' : 'processing'}
			</td>
			<td className="flex flex-col">
				<div className="flex align-middle">
					<Link to={`/dashboard/bookingDetails/${d._id}`} className={` `}>
						<button className={` btn btn-xs mb-1 hover:bg-slate-800`}>
							details
						</button>
					</Link>
					<FontAwesomeIcon
						onClick={() => handleDelete(d._id)}
						className="text-red-500 ml-2 mt-1 inline-block align-middle"
						icon={faTrashCan}
					/>
				</div>
				<div>
					<div className="card-actions">
						<label
							htmlFor="booking-modal"
							onClick={() => setBookingModal(true)}
							className="btn btn-xs btn-success"
						>
							{status === 'processing' ? 'accept' : 'pending'}
						</label>
					</div>
					{bookingModal && (
						<AcceptModal
							booking={d}
							setBookingModal={setBookingModal}
							refetch={refetch}
						></AcceptModal>
					)}
				</div>
			</td>
		</tr>
	)
}

export default MyHiringRow
