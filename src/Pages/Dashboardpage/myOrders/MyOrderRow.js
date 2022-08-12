import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { DarkModeContext } from '../../../App';


const MyOrderRow = ({ index, d, refetch }) => {
  const { customerEmail, customerPhone, customerName, customerAddress } = d?.data;
  const { name, email, _id, picture, phone } = d.engineer;
  const [darkMode] = useContext(DarkModeContext);
  const handleDelete = id => {
		// swalWithBootstrapButtons.fire({
		// 		title: 'Are you sure?',
		// 		text: "You won't be able to revert this!",
		// 		icon: 'warning',
		// 		showCancelButton: true,
		// 		confirmButtonText: 'Yes, delete it!',
		// 		cancelButtonText: 'No, cancel!',
		// 		reverseButtons: false,
		// 	})
			// .then(result => {
				// if (result.isConfirmed) {
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
								// swalWithBootstrapButtons.fire(
								// 	'Deleted!',
								// 	'Your file has been deleted.',
								// 	'success'
								// )
                alert('deleted')
								refetch()
							}
						})
				// } 
        // else if (
				// 	/* Read more about handling dismissals below */
				// 	result.dismiss === Swal.DismissReason.cancel
				// ) {
				// 	swalWithBootstrapButtons.fire(
				// 		'Cancelled',
				// 		'Your imaginary file is safe :)',
				// 		'error'
				// 	)
				// }
			// })
	}


  return (
    <tr className={`${darkMode ? 'text-gray-400 py-2' : 'text-gray-500'} `}>
      <th>{index + 1}</th>

      <td className="">{customerName}</td>
      <td className="">{customerEmail}</td>
      

      <td className="">{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="text-success font-semibold">pending</td>
      <td className='flex flex-col'>
        <Link to={`engineer/${_id}`}>
          <button disabled className="btn btn-xs mb-1 hover:bg-slate-800">details</button>
        </Link>
        <button className="btn btn-xs btn-success hover:bg-slate-800" onClick={()=> handleDelete(d._id)}>delete</button>
        {/* <button className="btn btn-xs btn-warning hover:bg-slate-800">delete</button> */}
      </td>
    </tr>
  );
};

export default MyOrderRow;