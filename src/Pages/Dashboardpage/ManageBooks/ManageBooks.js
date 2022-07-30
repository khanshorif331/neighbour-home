import React, { useEffect, useState } from "react";
import swal from 'sweetalert';


const ManageBooks = () => {
  const [manageBooks, setManageBooks] = useState([]);
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => setManageBooks(data));
  }, []);

  return (
    <div className="sm:px-10 px-2 pb-5">
      <h5 className="text-lg text-left font-bold  mb-2 text-primary">
        Manage Books
      </h5>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-900">
          <thead class="text-xs text-gray-00 uppercase  bg-gray-200 text-gray-400">
            <tr>
              <th scope="col" class="py-2 sm:py-3">
                Title
              </th>
              {/* <th scope="col" class="py-2 sm:py-3 text-center">
                Update
              </th> */}
              <th scope="col" class="py-2 sm:py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          {manageBooks.map((manageBook) => {
            const { name, _id } = manageBook;
            const handleDeleteBook = (id) => {
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  {
                    const url = `https://neighbour-home--server.herokuapp.com/book/${_id}`;
                    fetch(url, {
                      method: "DELETE",
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        const remaining = manageBooks.filter(
                          (inventory) => inventory._id !== id
                        );
                        console.log(remaining);
                        setManageBooks(remaining);
                      });
                    }
                  swal("Your file has been deleted!", {
                    icon: "success",
                  });
                }/*  else {
                  swal("Your file is safe!");
                } */
              });
            };
            return (
              <tbody>
                <tr>
                  <td class="">{name}</td>
                  {/* <td class="py-2 text-[13px] sm:py-4 text-center">
                <button class="h-5 sm:h-6  sm:px-3 uppercase bg-green-500 border-none  hover:bg-green-600 rounded-full text-white">
                  Update book
                </button>
              </td> */}
                  <td class="py-2 text-[13px] sm:py-4 text-center">
                    <button class="h-5 sm:h-6  sm:px-3 uppercase bg-green-500 border-none  hover:bg-green-600 rounded-full text-white">
                      Update book
                    </button>
                    <button
                      onClick={() => handleDeleteBook(_id)}
                      class="h-5 sm:h-6 ml-2 sm:px-3 uppercase bg-red-500 border-none  hover:bg-red-600 rounded-full text-white"
                    >
                      Delete book
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
