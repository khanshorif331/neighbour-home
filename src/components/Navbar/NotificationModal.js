import React from 'react'
const NotificationModal = () => {
	return (
		<>
			<input
				type="checkbox"
				id="notificattonModal"
				className="modal-toggle"
			/>
			<div className="modal text-center items-start">
				<div className="modal-box mx-auto z-50  max-h-[100vh] ">
					<div
						// onSubmit={hanldeSellPost}
						className="sm:w-10/12 w-11/12 py-3 mx-auto sm:mx-0 text-left"
					>
						<label
							for="notificattonModal"
							className="btn btn-sm btn-circle absolute right-5 top-5"
						>
							✕
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default NotificationModal
