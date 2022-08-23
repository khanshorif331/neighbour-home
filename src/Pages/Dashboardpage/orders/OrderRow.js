import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../../../App';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import swal from "sweetalert";

const OrderRow = ({ index, d, refetch }) => {
  // console.log(d?.data?.customerEmail);
  const { customerEmail, customerPhone, customerName } = d?.data;
  const { name, email, _id, phone } = d?.engineer;
  let { status } = d;
  const [darkMode] = useContext(DarkModeContext);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const form = useRef()


  const sendEmail = (data) => {
    emailjs.sendForm('neighbourHome', 'template_2jdv676', form.current, 'fjfswEx9fDSDkZnui')
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast.success("Message sent successfully", { id: 'success' })
          reset()
        }
      }, (err) => {
        toast.error("Message not sent", { id: 'error' })
      })
  }




  const handleStatus = (id) => {

    const updatedStatus = {
      status: 'processing'
    }
    axios.put(`https://neighbour-home--server.herokuapp.com/booking/${id}`, updatedStatus)
    .then(data => {
        console.log(data.data);

        toast.success(`this hiring request has been Successfully accept`)
        refetch()
    }).catch(error => {
        console.log(error.response.data);
        if (error.response.status === 403) {
            toast.error("You are Not Admin")
        }
    })
  }


  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
          swal("Your file has been deleted!", {
            icon: "success",
          });
          refetch();
        }
      });
  }
});
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
          <Link className='' to={`/dashboard/bookingDetails/${d._id}`}>
            <button className="btn btn-xs mb-1 hover:bg-slate-800">details</button>
          </Link>
          <FontAwesomeIcon onClick={() => handleDelete(d._id)} className='text-red-500 ml-2 mt-1 inline-block align-middle' icon={faTrashCan} />
        </div>
        <div >
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <input type="text" value={customerName} className="input input-bordered w-full max-w-xs hidden"  {...register("customerName")} />
            <input type="email" value={customerEmail} className="input my-2 input-bordered w-full max-w-xs hidden" {...register("customerEmail")} />
            <input type="text" value={name} className="input my-2 input-bordered w-full max-w-xs hidden" {...register("name")} />
            <button type='submit' className="btn btn-xs btn-success " onClick={() => handleStatus(d._id)}>{status ? status : 'accept'}</button>
          </form>
        </div>

      </td>
    </tr>
  );
};

export default OrderRow;