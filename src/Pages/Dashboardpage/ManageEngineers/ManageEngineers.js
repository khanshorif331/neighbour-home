import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const ManageEngineers = () => {
  const [manageEngrs, setManageEngrs] = useState([]);
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/engineer")
      .then((res) => res.json())
      .then((data) => setManageEngrs(data));
  }, []);
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="">profession</th>
            <th className="">role</th>
            <th className="text-center">action</th>
          </tr>
        </thead>
        <tbody>
          {manageEngrs.map((engineer) => {
            const { name, picture, role, surname, _id } = engineer;
            const handleDeleteEng = (id) => {
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  {
                    const url = `https://neighbour-home--server.herokuapp.com/engineer/${_id}`;
                    fetch(url, {
                      method: "DELETE",
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        const remaining = manageEngrs.filter(
                          (inventory) => inventory._id !== id
                        );
                        console.log(remaining);
                        setManageEngrs(remaining);
                      });
                  }
                  swal("Your file has been deleted!", {
                    icon: "success",
                  });
                } /*  else {
                  swal("Your file is safe!");
                } */
              });
            };
            return (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{name}</div>
                      {/* <div class="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>{surname}</td>
                <td>{role}</td>
                {/* button to update the engineer */}
                <th className="text-center">
                  <button class="h-5 sm:h-6  sm:px-3 uppercase bg-green-500 border-none  hover:bg-green-600 rounded-full text-white font-normal">
                    edit
                  </button>
                  {/* button to update the engineer */}

              {/* button to delete the engineer */}
                  <button
                    onClick={() => handleDeleteEng(_id)}
                    class="h-5 sm:h-6 ml-2 sm:px-3 uppercase bg-red-500 border-none  hover:bg-red-600 rounded-full text-white font-normal"
                  >
                    Delete
                  </button>
                  {/* button to delete the engineer */}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEngineers;
