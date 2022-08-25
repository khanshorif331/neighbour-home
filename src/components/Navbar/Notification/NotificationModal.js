import axios from 'axios';
import {IoMdNotificationsOff} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Notificaton from './Notificaton';
const NotificationModal = ({setNotificationModal}) => {
	const [notifications, setNotifications] = useState([])
	useEffect(() => {
		axios.get(`https://neighbour-home--server.herokuapp.com/notification`)
			.then(data => {
				// console.log(data.data);
				setNotifications(data.data)
			})
	}, [])
	return (
			<div  style={{ fontFamily: "'Rajdhani', sans-serif" }} className="w-[350px] h-[380px] overflow-y-scroll z-50 rounded-lg px-5 bg-white text-center items-start">
					<div
						// onSubmit={hanldeSellPost}
						className={`w-11/12 py-3  text-left  mx-auto`}
					>
						<label
						onClick={()=>setNotificationModal(false)}
							for="notificattonModal"
							className="cursor-pointer text-2xl absolute right-5 top-5"
						>
							<AiOutlineCloseCircle />
						</label>
						<div className='py-3 w-full'>
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
								></Notificaton>)

							}
						</div>
				</div>
			</div>
	)
}

export default NotificationModal
