import React from 'react'

const UpdateModal = ({ id }) => {
	return (
		<div>
			{/* <!-- Put this part before </body> tag --> */}
			<input type='checkbox' id={id} class='modal-toggle' />
			<div class='modal'>
				<div class='modal-box relative'>
					<label
						for={id}
						class='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 class='text-lg font-bold'>
						Congratulations random Internet user! {id}
					</h3>
					<p class='py-4'>
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div class='modal-action flex justify-center'>
						<label for={id} class='btn w-full md:btn-wide'>
							Submit
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateModal
