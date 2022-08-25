import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import downloadLogo from "../../../Assest/download-svgrepo-com.svg";
import minimumUser from "../../../Assest/user-profile-svgrepo-com.svg";
import totalSvg from "../../../Assest/virustotal-svgrepo-com.svg";
import Loading from "../../../Shared/Loading/Loading";

const ManageBooks = () => {
  const [manageBooks, setManageBooks] = useState([]);
  const [manageBooksLoading, setManageBooksLoading] = useState(true);
  const [bookUpadateLoadin, setBookUpadateLoadin] = useState(false);
  const [manageBooksModal, setManageBooksModal] = useState(false);
  const [manageAddModal, setManageAddModal] = useState(false);
  // console.log(manageBooksModal);

  // get api
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => {
        setManageBooks(data);
        setManageBooksLoading(false);
      });
  }, [manageBooks]);
  // imgStorage api
  const imgStorage_key = `7a0f43e157252e0ca3031dea1d8dcccd`;
  // add a new book
  const handelAddNewBook = async (e) => {
    e.preventDefault();

    const picture = e.target.bookPic.files[0];
    // console.log(e.target.bookPic.files[0]);

    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgUrl = result.data.url;
          // console.log(imgUrl);

          const bookInfo = {
            name: e.target.bookName.value,
            pdf: e.target.pdfLink.value,
            description: e.target.description.value,
            picture: imgUrl,
          };
          // console.log(bookInfo);
          axios
            .post(
              `https://neighbour-home--server.herokuapp.com/book/`,
              bookInfo
            )
            .then((data) => {
              toast.success(`successfully updated !`);
              setManageAddModal(false);
            });
        }
      });
  };

  if (manageBooksLoading || bookUpadateLoadin) return <Loading />;
  return (
    <div className="sm:px-10 px-2 pb-5">
      {/* book functionality manage card */}
      <section className="flex lg:flex-row flex-col">
        {/* division 01 */}
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-teal-600 border-4 p-4 rounded-lg hover:bg-slate-200 duration-1000">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={minimumUser}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-bold">
                User Feedback
              </h2>
              <p className="text-gray-600">more than 85%</p>
            </div>
          </div>
        </div>
        {/* division 02 */}
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-teal-600 border-4  p-4 rounded-lg hover:bg-slate-200 duration-1000">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={totalSvg}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-bold">Total Book</h2>
              <p className="text-gray-600">10 picas</p>
            </div>
          </div>
        </div>
        {/* division 03 */}
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-teal-600 border-4 p-4 rounded-lg hover:bg-slate-200 duration-1000">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={downloadLogo}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-bold">Download</h2>
              <p className="text-gray-600">45 People</p>
            </div>
          </div>
        </div>
      </section>
      {/* book functionality manage card end */}

      {/* table section where manage book by admin */}
      <div className="flex justify-between">
        <h5 className="text-lg font-bold  mb-2 text-primary">Manage Books</h5>

        {/* <!-- The button to open modal --> */}
        <label
          onClick={() => setManageAddModal(true)}
          for="AddBook"
          className="btn btn-sm btn-outline btn-accent font-bold mb-2 text-lg text-primary duration-1000"
        >
          ADD NEW BOOK
        </label>

        {manageAddModal && (
          <>
            <input type="checkbox" id="AddBook" className="modal-toggle" />
            <div className="modal text-center ">
              <div className="modal-box mx-auto mt-40 flex justify-center">
                {/* updated form */}
                <form className="w-10/12 mx-auto" onSubmit={handelAddNewBook}>
                  <label
                    for="AddBook"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold text-teal-900">
                    Add a new book !
                  </h3>

                  {/* input */}
                  <label
                    className=" block text-start lg:pl-2 text-md text-gray-400 font-bold mt-2"
                    htmlFor="bookName"
                  >
                    Book Name
                  </label>

                  <input
                    className="w-full lg:w-[98%] font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                    type="text"
                    name="bookName"
                    id="bookName"
                  />

                  <label
                    className=" block text-start lg:pl-2 text-md text-gray-400 font-bold my-0"
                    htmlFor="pdfLink"
                  >
                    PDF Link{" "}
                  </label>
                  <input
                    className="w-full lg:w-[98%] font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                    type="text"
                    name="pdfLink"
                    id="pdfLink"
                  />
                  {/* textarea  */}
                  <textarea
                    name="description"
                    id="description"
                    className="w-full lg:w-[98%] font-serif font-bold text-justify px-4 py-2 mt-2 border-2 border-teal-700 outline-teal-900 rounded-lg overflow-scroll focus:bg-slate-200"
                    rows="5"
                  ></textarea>

                  {/* take picture and submit*/}
                  <div className="flex justify-between mt-3 ">
                    <input
                      className="w-2/4 font-serif font-bold pl-2"
                      type="file"
                      name="bookPic"
                      id="bookPic"
                    />

                    {/* updated button here */}
                    <button
                      type="submit"
                      className="btn btn-xs bg-teal-800  h-5 sm:h-7 ml-2 mr-2 sm:px-3 uppercase rounded-lg text-white font-bold duration-1000"
                    >
                      Add New Books
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}

        {/* <h5 className="btn btn-sm btn-outline btn-accent font-bold mb-2 text-lg text-primary duration-1000">Add New Books</h5> */}
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-left ">
          <thead className="text-sm font-bold uppercase  bg-gray-200 text-gray-600">
            <tr>
              <th scope="col" className="py-2 sm:py-3 text-center font-bold">
                Book Name
              </th>
              {/* <th scope="col" className="py-2 sm:py-3 text-center">
                Update
              </th> */}
              <th scope="col" className="py-2 sm:py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          {manageBooks.map((manageBook) => {
            const { name, pdf, description, _id } = manageBook;

            // handleUpdateBook
            const handleUpdateBook = async (e) => {
              e.preventDefault();
              setBookUpadateLoadin(true);
              const imgFile = e.target.bookPic.files[0];
              // console.log(e.target.bookPic.files[0]);
              const formData = new FormData();
              formData.append("image", imgFile);
              const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
              fetch(url, {
                method: "POST",
                body: formData,
              })
                .then((res) => res.json())
                .then((result) => {
                  // console.log(result);
                  if (result.success) {
                    const imgUrl = result.data.url;
                    // console.log(imgUrl);
                    const bookInfo = {
                      name: e.target.bookName.value,
                      pdf: e.target.pdfLink.value,
                      description: e.target.description.value,
                      picture: imgUrl,
                    };
                    console.log(bookInfo);
                    axios
                      .put(
                        `https://neighbour-home--server.herokuapp.com/book/${_id}`,
                        bookInfo
                      )
                      .then((data) => {
                        toast.success(
                          `${bookInfo.name} successfully updated !`
                        );
                        setManageBooksModal(false);
                        setBookUpadateLoadin(false);
                      });
                  }
                  if (result.error) {
                    // console.log(result.error);
                    const bookInfo = {
                      name: e.target.bookName.value,
                      pdf: e.target.pdfLink.value,
                      description: e.target.description.value,
                    };
                    console.log(bookInfo);
                    axios
                      .put(
                        `https://neighbour-home--server.herokuapp.com/book/${_id}`,
                        bookInfo
                      )
                      .then((data) => {
                        toast.success(
                          `${bookInfo.name} successfully updated !`
                        );
                        setManageBooksModal(false);
                        setBookUpadateLoadin(false);
                      });
                  }
                });
            };

            // delete book
            const deleteBook = (id, name) => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: `Yes, delete it!`,
              }).then((result) => {
                if (result.isConfirmed) {
                  axios
                    .delete(
                      `https://neighbour-home--server.herokuapp.com/book/${id}`
                    )
                    .then((data) => {
                      console.log(data.data);
                      Swal.fire(
                        "Deleted!",
                        `${name} has been Deleted Succesfully.`,
                        "success"
                      );
                    })
                    .catch((error) => {
                      console.log(error.response.data);
                      if (error.response.status === 403) {
                        toast.error("You are Not Admin");
                      }
                    });
                }
              });
            };
            return (
              <tbody key={_id}>
                <tr>
                  <td className="px-4 text-lg text-gray-500 font-bold hover:text-teal-900 hover:bg-slate-100 duration-1000 rounded-xl">
                    {name}
                  </td>

                  <td className="py-2 text-[11px] md:text-[13px]  sm:py-4 text-center flex justify-center bg-slate-100 rounded-xl lg:rounded-none">
                    {/* _________________________ */}

                    {/* <!-- The button to open modal --> */}
                    <label
                      onClick={() => setManageBooksModal(true)}
                      for={_id}
                      className="btn modal-button btn-outline btn-xs btn-warning h-5 sm:h-6  sm:px-3 uppercase  rounded-full text-white duration-1000"
                    >
                      Edit
                    </label>

                    {manageBooksModal && (
                      <>
                        <input
                          type="checkbox"
                          id={_id}
                          className="modal-toggle"
                        />
                        <div className="modal ">
                          <div className="modal-box  mt-36 block">
                            {/* updated form */}
                            <form onSubmit={handleUpdateBook}>
                              <label
                                for={_id}
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                              >
                                ✕
                              </label>
                              <h3 className="text-lg font-bold text-teal-900">
                                Book Id : {_id}
                              </h3>

                              {/* input */}
                              <label
                                className=" block text-start lg:pl-16 text-md text-gray-400 font-bold mt-2"
                                htmlFor="bookName"
                              >
                                Book Name
                              </label>

                              <input
                                className="w-full lg:w-9/12 font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                                type="text"
                                name="bookName"
                                id="bookName"
                                defaultValue={name}
                              />

                              <label
                                className=" block text-start lg:pl-16 text-md text-gray-400 font-bold my-0"
                                htmlFor="pdfLink"
                              >
                                PDF Link
                              </label>
                              <input
                                className="w-full lg:w-9/12 font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                                type="text"
                                name="pdfLink"
                                id="pdfLink"
                                defaultValue={pdf}
                              />

                              {/* textarea  */}
                              <textarea
                                name="description"
                                id="description"
                                defaultValue={description}
                                className="w-full lg:w-9/12 font-serif font-bold text-justify px-4 py-2 mt-2 border-2 border-teal-700 outline-teal-900 rounded-lg overflow-scroll focus:bg-slate-200"
                                rows="5"
                              ></textarea>

                              {/* take picture and submit*/}
                              <div className="flex justify-center mt-3">
                                <input
                                  className="w-2/4 font-serif font-bold pl-2"
                                  type="file"
                                  name="bookPic"
                                  id="bookPic"
                                />

                                {/* updated button here */}
                                <button
                                  type="submit"
                                  className="btn btn-xs bg-teal-800 w-1/4 h-5 sm:h-6 ml-2 mr-2 sm:px-3 uppercase rounded-lg text-white font-bold duration-1000"
                                >
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </>
                    )}

                    {/* _________________________ */}

                    <button
                      onClick={() => deleteBook(_id, name)}
                      className="btn btn-outline btn-xs btn-error h-5 sm:h-6 ml-2 sm:px-3 uppercase rounded-full text-white duration-1000"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {/* table section end */}

      {/* cta part start */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              NEIHBOUR HOME POLAROID
            </h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
              Master control admin book section !!
            </h1>
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">
                  Download on the
                </span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* cta part end */}
    </div>
  );
};

export default ManageBooks;
