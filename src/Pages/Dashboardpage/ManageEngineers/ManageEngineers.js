import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ManageEngineers = () => {
  const [manageEngrs, setManageEngrs] = useState([]);
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/engineer")
      .then((res) => res.json())
      .then((data) => setManageEngrs(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            const { name, picture, role, surname, _id, bio } = engineer;
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

            /*   ---------- handle update engineer-------------------- */

            const onSubmit = (data) => {
              console.log(data, "submitted");
              const url = `https://neighbour-home--server.herokuapp.com/engineer/${_id}`;
              fetch(url, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  toast("Engineer Edited successfully");
                });
            };
            // console.log(errors);

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
                  {/*------------- button to update the engineer ---------------*/}
                  <label
                    for={_id}
                    class=" btn modal-button btn-outline btn-xs btn-success h-5 sm:h-6  sm:px-3 uppercase  rounded-full text-white duration-1000"
                  >
                    edit
                  </label>

                  {/* -------------modal open from here------------------------- */}
                  <input type="checkbox" id={_id} class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box block mt-40 mb-10 h-[400px] border rounded-lg">
                      <label
                        for={_id}
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-xl mb-2">Updating data for {_id}</h3>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-11/12 sm:w-7/12 mx-auto font-medium"
                      >
                        <label className="text-left">Name:</label>
                        <input
                          className="bg-white border outline-emerald-600 p-2 rounded"
                          placeholder="Jhon Doe"
                          defaultValue={name}
                          {...register("name", {
                            required: {
                              value: true,
                              message: "name is Required",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                        <label className="text-left">Profession:</label>
                        <input
                          className="border outline-emerald-600 p-2 rounded"
                          width="20px"
                          placeholder="Electrical Engineer"
                          defaultValue={surname}
                          {...register("profession", {
                            required: {
                              value: true,
                              message: "profession is Required",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.profession?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.profession.message}
                            </span>
                          )}
                        </label>
                        <label className="text-left">Role:</label>
                        <input
                          className="border outline-emerald-600 p-2 rounded"
                          width="20px"
                          placeholder="Electrical Engineer"
                          defaultValue={surname}
                          {...register("role", {
                            required: {
                              value: true,
                              message: "role is Required",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.role?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.role.message}
                            </span>
                          )}
                        </label>
                        <label className="text-left">Bio:</label>
                        <textarea
                          className=" h-32 border outline-emerald-600 p-2 rounded"
                          placeholder="Bio Details"
                          defaultValue={bio}
                          /* {...register("Bio", {
                            required: {
                              value: true,
                              message: "Bio is Required",
                            },
                          })} */
                        />
                        <label className="label">
                          {errors.Bio?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.Bio.message}
                            </span>
                          )}
                        </label>

                        <input
                          style={{
                            fontFamily: "Open Sans, sans-serif",
                          }}
                          className="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded  text-white border-2 py-2 cursor-pointer font-thin"
                          type={"submit"}
                          value={"Update Changes"}
                        />
                      </form>
                    </div>
                  </div>

                  {/* button to delete the engineer */}
                  <button
                    onClick={() => handleDeleteEng(_id)}
                    class="btn modal-button btn-outline btn-xs btn-error h-5 sm:h-6  sm:px-3 uppercase  rounded-full text-white duration-1000 border"
                  >
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
