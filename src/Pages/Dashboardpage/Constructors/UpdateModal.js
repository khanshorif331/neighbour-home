import React from 'react'
import Swal from 'sweetalert2'
import FormConstructor from './FormConstructor'

const UpdateModal = ({ id, constructor, refetch }) => {
	const updateInfo = data => {
		fetch(`https://neighbour-home--server.herokuapp.com/constructor/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'Constructor data was updated successfully') {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Your Data has been updated successfully!',
						showConfirmButton: false,
						timer: 1500,
					})
					refetch()
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					})
				}
			})
	}

	return (
		<div>
			{/* <!-- Modal from daisy ui..this input is for toggling/opening the modal --> */}
			<input type='checkbox' id={id} class='modal-toggle' />
			<div class='modal'>
				<div class='modal-box block mt-40 mb-10 h-[400px] border rounded-lg'>
					<label
						for={id}
						class='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 class='text-lg font-bold'>
						Editing Information with the id of {id}
					</h3>
					<FormConstructor
						updateInfo={updateInfo}
						constructor={constructor}
					></FormConstructor>
				</div>
			</div>
		</div>
	)
}

export default UpdateModal
