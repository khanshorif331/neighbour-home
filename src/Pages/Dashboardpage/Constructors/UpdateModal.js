import React from 'react'
import FormConstructor from './FormConstructor'

const UpdateModal = ({ id, constructor }) => {
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
					<FormConstructor constructor={constructor}></FormConstructor>
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
