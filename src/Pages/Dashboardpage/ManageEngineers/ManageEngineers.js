import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const ManageEngineers = () => {
  const [manageEngrs, setManageEngrs] = useState([]);
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/engineer")
      .then((res) => res.json())
      .then((data) => setManageEngrs(data));
  }, []);

  // handle update engineer
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "submitted");
  };
  // console.log(errors);

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
                <th className="text-center">
                  {/* button to update the engineer */}
                  <label
                    for="my-modal-3"
                    class=" btn modal-button btn-outline btn-xs btn-success h-5 sm:h-6  sm:px-3 uppercase  rounded-full text-white duration-1000"
                  >
                    edit
                  </label>

                  {/* modal */}
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box relative">
                      <label
                        for="my-modal-3"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <form
                        className=" text-center"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input
                          className="p-2"
                          placeholder="Name"
                          {...register("name", {
                            required: true,
                            maxLength: 8,
                          })}
                        />{" "}
                        <label>
                          {errors.name?.name === "required" && (
                            <p className="text-red-600 text-sm font-semibold">
                              {errors.name?.message}
                            </p>
                          )}
                          {errors.name?.name === "maxLength" && (
                            <p className="text-red-600 text-sm font-semibold">
                              {errors.name?.message}
                            </p>
                          )}
                        </label>
                        <br />
                        <input
                          className="p-2 "
                          placeholder="Get Star"
                          {...register("star", {
                            required: true,
                            maxLength: 5,
                          })}
                        />{" "}
                        <label>
                          {errors.star?.star === "required" && (
                            <p className="text-red-600 text-sm font-semibold">
                              {errors.star?.message}
                            </p>
                          )}
                          {errors.star?.star === "maxLength" && (
                            <p className="text-red-600 text-sm font-semibold">
                              {errors.star?.message}
                            </p>
                          )}
                        </label>
                        <br />
                        <input
                          className="p-2"
                          placeholder="Review"
                          {...register("review")}
                        />{" "}
                        <label>
                          {errors.review?.review === "required" && (
                            <p className="text-red-600 text-sm font-semibold">
                              {errors.review?.message}
                            </p>
                          )}
                        </label>
                        <br />
                        
                        <br />
                        <input
                          className="btn btn-primary  mt-5"
                          type="submit"
                          value="Add Review"
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
