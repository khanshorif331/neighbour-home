import React, { useContext, useRef } from 'react';
import { DarkModeContext } from '../../../../App';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
import axios from 'axios';

const MyHiringRow = ({ index, d, refetch }) => {
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
        <div>
            
        </div>
    );
};

export default MyHiringRow;