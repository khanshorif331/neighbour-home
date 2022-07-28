import React, { useEffect, useState } from "react";

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
            const { name, picture, role, surname } = engineer;
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
                <th className="text-center">
                  <button class="h-5 sm:h-6  sm:px-3 uppercase bg-green-500 border-none  hover:bg-green-600 rounded-full text-white font-normal">
                    edit
                  </button>
                  <button class="h-5 sm:h-6 ml-2 sm:px-3 uppercase bg-red-500 border-none  hover:bg-red-600 rounded-full text-white font-normal">
                    Delete
                  </button>
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
