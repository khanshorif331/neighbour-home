import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../../../App';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const OrderRow = ({ index, d, refetch }) => {
  console.log(d);
  const { customerEmail, customerPhone, customerName, customerAddress } = d?.data;
  const { name, email, _id, picture, phone } = d.engineer;
  const [darkMode] = useContext(DarkModeContext);

  // const { register, formState: { errors }, handleSubmit, reset } = useForm();
  //   const form = useRef()

  //   const sendEmail = (data) => {
  //     emailjs.sendForm('nh-service_121', 'template_dblhx73', form.current, 'Xgm-zyN1nm90Z0_bX')
  //           .then((res) => {
  //               console.log(res)
  //               if(res.status === 200) {
  //                   toast.success("Message sent successfully", {id: 'success'})
  //                   reset()
  //               }
  //           }, (err) => {
  //               toast.error("Message not sent", {id: 'error'})
  //           })
  //   }

  let [status, setStatus] = useState('accept');
  const handleStatus = () => {
    status = 'processing';
    setStatus(status);
    console.log(status);
  }


  const handleDelete = id => {
    fetch(
      `https://neighbour-home--server.herokuapp.com/booking/${id}`,
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
          alert('deleted')
          refetch()
        }
      })
  }
  return (
    <tr className={`${darkMode ? 'text-gray-400 py-2' : 'text-gray-500'} `}>
      <th>{index + 1}</th>

      <td className="">{customerName}</td>
      <td className="">{customerEmail}</td>
      <td className="">{customerPhone}</td>

      <td className="">{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className='flex flex-col'>
        <div className='flex align-middle'>
          <Link className='' to={`engineer/${_id}`}>
            <button className="btn btn-xs mb-1 hover:bg-slate-800">details</button>
          </Link>
          <FontAwesomeIcon onClick={() => handleDelete(d._id)} className='text-red-500 ml-2 mt-1 inline-block align-middle' icon={faTrashCan} />
        </div>
        {/* <div> */}
          {/* <form ref={form} onSubmit={handleSubmit(sendEmail)}>
           <input type="text" value={customerName} className="input input-bordered w-full max-w-xs"  {...register("customerName")} />
          <input type="email" value={customerEmail} className="input my-2 input-bordered w-full max-w-xs" {...register("customerEmail")} />
<button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </form> */}
          <button type='submit' className="btn btn-xs btn-success " onClick={() => handleStatus()}>{status}</button>
        {/* </div> */}

      </td>
    </tr>
  );
};

export default OrderRow;