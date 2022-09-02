import moment from 'moment';
import React from 'react';
import { MdCircleNotifications } from 'react-icons/md';

const Notificaton = ({ notification }) => {
     let today = moment().format();
     var now = moment(today);//now
     var date = moment(notification.date);
     let time_ago = "0 Minute Ago";

     const minutes = now.diff(date, 'minutes')
     const hours = now.diff(date, 'hours')
     const days = now.diff(date, 'days')
     const weeks = now.diff(date, 'weeks')
     if (minutes <= 60) {
          time_ago = `${minutes} Minutes Ago`;
     }
     else if (hours <= 24) {
          time_ago = `${hours} Hours Ago`;
     }
     else if (days <= 7) {
          time_ago = `${days} Days Ago`;
     }
     else {
          time_ago = `${weeks} Weeks Ago`;
     }
     // console.log(time_ago);

     return (
          <div className='flex mb-3'>
               <MdCircleNotifications className='text-teal-500 text-3xl w-2/12 mr-2' />
               <div className='w-10/12'>
                    <h2 className='font-semibold'>{notification.heading}</h2>
                    <h2 className='text-sm'>{time_ago}</h2>
               </div>
          </div>
     );
};

export default Notificaton;