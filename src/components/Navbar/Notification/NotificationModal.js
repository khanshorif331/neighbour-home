import {IoMdNotificationsOff} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import React from 'react'
import Notificaton from './Notificaton';
const NotificationModal = ({setNotificationModal, notifications}) => {
	
	return (
			<div  style={{ fontFamily: "'Rajdhani', sans-serif" }} className="w-[300px] sm:w-[350px] h-[380px] overflow-y-scroll z-50 rounded-lg px-3 sm:px-3 bg-white text-center items-start">
					<div
						// onSubmit={hanldeSellPost}
						className={`w-full sm:w-11/12 py-3  text-left  mx-auto`}
					>
						<label
						onClick={()=>setNotificationModal(false)}
							for="notificattonModal"
							className="cursor-pointer text-2xl absolute right-6 top-3"
						>
							<AiOutlineCloseCircle />
						</label>
						<div className='py-3.5 w-full'>
							{
								notifications.length === 0?
								<div>
									<IoMdNotificationsOff className='text-7xl mt-10 mx-auto'></IoMdNotificationsOff>
									<h5 className="text-lg text-center">No Notification For You</h5>
								</div>
								: 
								notifications.map(notification => <Notificaton
								key={notification._id}
								notification={notification}
								></Notificaton>).reverse()

							}
						</div>
				</div>
			</div>
	)
}

export default NotificationModal
