import React from 'react'
import Swal from 'sweetalert2'
import FormConstructor from './FormConstructor'

const UpdateModal = ({ id, constructor }) => {
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
					// refetch()
				}
			})
		console.log(data, 'from form update data')
	}

	// const getData = data => {
	// 	const image = data?.photo[0]
	// 	const formData = new FormData()
	// 	formData.append('image', image)
	// 	const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

	// 	// posting image to imgbb for getting hosted link
	// 	fetch(url, {
	// 		method: 'POST',
	// 		body: formData,
	// 	})
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			if (result.success) {
	// 				const photo = result.data.display_url
	// 				const constructor = {
	// 					picture: photo,
	// 					title: data.title,
	// 					type: data.type,
	// 					duration: data.duration,
	// 					assignment: data.assignment,
	// 					discount: data.discount,
	// 					price: data.price,
	// 					description: data.description,
	// 				}
	// 				console.log(constructor)
	// 				fetch(
	// 					'https://neighbour-home--server.herokuapp.com/constructor',
	// 					{
	// 						method: 'POST',
	// 						headers: {
	// 							'Content-Type': 'application/json',
	// 						},
	// 						body: JSON.stringify(constructor),
	// 					}
	// 				)
	// 					.then(res => res.json())
	// 					.then(data => {
	// 						if (data.message === 'Constructor created successfully') {
	// 							reset()
	// 							Swal.fire({
	// 								position: 'center',
	// 								icon: 'success',
	// 								title: 'Your Data has been saved',
	// 								showConfirmButton: false,
	// 								timer: 1500,
	// 							})
	// 							refetch()
	// 						} else {
	// 							Swal.fire({
	// 								icon: 'error',
	// 								title: 'Oops...',
	// 								text: 'Something went wrong!',
	// 							})
	// 						}
	// 					})
	// 			}
	// 		})
	// }

	// const { id } = constructor
	return (
		<div>
			{/* <!-- Put this part before </body> tag --> */}
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
						Congratulations random Internet user! {id}
					</h3>
					<FormConstructor
						updateInfo={updateInfo}
						constructor={constructor}
					></FormConstructor>
					{/* <div class='modal-action flex justify-center'>
						<label for={id} class='btn w-full md:btn-wide'>
							Submit
						</label>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default UpdateModal
