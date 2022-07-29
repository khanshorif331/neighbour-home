import React from 'react'
import Swal from 'sweetalert2'

const Constructor = ({ constructor, index }) => {
	const { title, type, price, picture, duration, discount, assignment, _id } =
		constructor

	const handleDelete = id => {
		swalWithBootstrapButtons
			.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: true,
			})
			.then(result => {
				if (result.isConfirmed) {
					swalWithBootstrapButtons.fire(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
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
			cancelButton: 'btn btn-danger',
		},
		buttonsStyling: false,
	})
	console.log(constructor)
	return (
		<tr>
			<th>{index + 1}</th>
			<td>{title}</td>
			<td>{type}</td>
			<td>{price}</td>
			<td>{duration}</td>
			<td>{discount}</td>
			<td>{assignment}</td>
			<td className='flex flex-col'>
				<button class='btn btn-xs mb-1'>Edit</button>
				<button
					onClick={() => handleDelete(constructor._id)}
					class='btn btn-xs '
				>
					Delete
				</button>
			</td>
		</tr>
	)
}

export default Constructor
