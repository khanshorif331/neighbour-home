import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { DarkModeContext } from '../../../App'
// import './UpdateModal'
import UpdateModal from './UpdateModal'

const Constructor = ({ constructor, index, refetch }) => {
	const { title, type, price, picture, duration, discount, assignment, _id } =
		constructor
	const [darkMode] = useContext(DarkModeContext)

	const handleDelete = id => {
		swalWithBootstrapButtons
			.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: false,
			})
			.then(result => {
				if (result.isConfirmed) {
					fetch(
						`https://neighbour-home--server.herokuapp.com/constructor/${id}`,
						{
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					)
						.then(res => res.json())
						.then(data => {
							console.log(data)
							if (data.message) {
								swalWithBootstrapButtons.fire(
									'Deleted!',
									'Your file has been deleted.',
									'success'
								)
								refetch()
							}
						})
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire(
						'Cancelled',
						'Your imaginary file is safe :)',
						'error'
					)
				}
			})
	}

	// from sweet alert2
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-error',
		},
		buttonsStyling: true,
	})
	return (
		<tr className={`${darkMode ? 'text-gray-400 py-2' : 'text-gray-500'} `}>
			<th>{index + 1}</th>
			<td>{title}</td>
			<td>{type}</td>
			<td>{price} USD</td>
			<td>{duration} days</td>
			<td>{discount}%</td>
			<td>{assignment} projects</td>
			<td className='flex flex-col'>
				{/* <button class='btn btn-xs mb-1'>Edit</button> */}
				<label for={_id} class='btn modal-button btn-xs mb-1'>
					Edit
				</label>
				<button
					onClick={() => handleDelete(_id)}
					class='btn btn-xs btn-warning'
				>
					Delete
				</button>
			</td>
			<UpdateModal
				id={_id}
				constructor={constructor}
				refetch={refetch}
			></UpdateModal>
		</tr>
	)
}

export default Constructor
