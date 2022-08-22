import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { DarkModeContext } from "../../../App";

const MyOrderRow = ({ index, d, refetch }) => {
  const { customerEmail, customerPhone, customerName, customerAddress } =
    d?.data;
  const { name, email, _id, picture, phone } = d.engineer;
  const [darkMode] = useContext(DarkModeContext);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://neighbour-home--server.herokuapp.com/booking/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.message) {
              swal("Your file has been deleted!", {
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr className={`${darkMode ? "text-gray-400 py-2" : "text-gray-500"} `}>
      <th>{index + 1}</th>

      <td className="">{customerName}</td>
      <td className="">{customerEmail}</td>

      <td className="">{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="text-success font-semibold">
        {d.status === "accept" ? "pending" : "ready to hire"}
      </td>
      <td className="flex flex-col">
        <Link
          to={`/dashboard/bookingDetails/${d._id}`}
          className={`${d.status === "accept" ? "hidden" : "block"}`}
        >
          <button className={` btn btn-xs mb-1 hover:bg-slate-800`}>
            details
          </button>
        </Link>
        <button
          className="btn btn-xs btn-success hover:bg-slate-800"
          onClick={() => handleDelete(d._id)}
        >
          delete
        </button>
        {/* <button className="btn btn-xs btn-warning hover:bg-slate-800">delete</button> */}
      </td>
    </tr>
  );
};

export default MyOrderRow;
