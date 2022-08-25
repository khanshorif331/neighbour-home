import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { DarkModeContext } from "../../App";
import Loading from "../../Shared/Loading/Loading";

const UserDetails = () => {
  const [userLoading, setUserLoading] = useState(true);
  const [darkMode] = useContext(DarkModeContext);
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: user,
    refetch,
  } = useQuery(["singleUser"], () =>
    fetch(`https://neighbour-home--server.herokuapp.com/user/${id}`).then(
      (res) => {
        setUserLoading(false);
        return res.json();
      }
    )
  );

  const makeUser5Admin = () => {
    const userData = {
      role: "admin",
    };
    axios
      .put(
        `https://neighbour-home--server.herokuapp.com/user?email=${user.email}`,
        userData
      )
      .then((data) => {
        console.log(data.data);

        toast.success(`${user.email} has been Successfully Made Admin!`);
        refetch();
      });
  };

  const deleteUserAdmin = () => {
    const userData = {
      role: "",
    };
    // console.log(userData);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete from admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://neighbour-home--server.herokuapp.com/user?email=${user.email}`,
            userData
          )
          .then((data) => {
            // console.log(data.data);
            Swal.fire(
              "Deleted!",
              `${user.email} has been Deleted from admin.`,
              "success"
            );
            refetch();
          });
        // .catch(error => {
        // console.log(error?.response?.data);
        //      if (error?.response?.status === 403) {
        //           toast.error("You are Not Admin")
        //      }
        // })
      }
    });
  };

  if (isLoading || userLoading) return <Loading />;
  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="pb-10 sm:py-0 sm:mt-[129px] h-[80vh] flex items-center mt-[80px] mb-10 w-10/12 mx-auto"
    >
      <div
        class={`${
          darkMode ? "bg-gray-700" : "bg-white"
        }   w-11/12 mx-auto shadow overflow-hidden sm:rounded-lg`}
      >
        <div className="px-4 py-4 sm:px-6">
          <h3
            class={`${
              darkMode ? "text-teal-400" : "text-primary"
            }  text-2xl leading-6 font-medium `}
          >
            User Information
          </h3>
          <p
            class={`${
              darkMode ? "text-gray-100" : "text-gray-600"
            }  mt-1 text-sm `}
          >
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="border-t text-left border-gray-200">
          <dl>
            <div
              class={`${
                darkMode ? "bg-gray-500" : "bg-gray-50"
              }  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Full name
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.name}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-600" : "bg-white"
              }   px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Email address
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.email}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-500" : "bg-gray-50"
              }  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Number
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.phone}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-600" : "bg-white"
              }   px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Address
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.address}, {user.country}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-500" : "bg-gray-50"
              }  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Zip
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.zip}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-600" : "bg-white"
              }   px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Role
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }  mt-1 text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user.role}
              </dd>
            </div>
            <div
              class={`${
                darkMode ? "bg-gray-500" : "bg-gray-50"
              }  px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt
                class={`text-sm font-medium my-3 ${
                  darkMode ? "text-gray-200" : "text-gray-500"
                } `}
              >
                Action
              </dt>
              <dd
                class={`${
                  darkMode ? "text-white" : "text-gray-900"
                }   text-sm  sm:mt-0 sm:col-span-2`}
              >
                {user?.role === "admin" ? (
                  <button
                    style={{marginLeft:"0"}}
                    onClick={deleteUserAdmin}
                    className={`${darkMode && "hover:text-white hover:btn-ghost" } btn btn-xs  btn-warning leading-5`}
                  >
                    Delete Admin
                  </button>
                ) : (
                  <button 
                    style={{marginLeft:"0"}}
                    onClick={makeUser5Admin}
                    className={`${darkMode && "hover:text-white hover:btn-ghost" } btn btn-xs  btn-success leading-5`}
                  >
                    Make Admin
                  </button>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* <div className='text-center sm:text-right mt-5 mr-3'>
              <label
                  onClick={() => setMyinfoModal(true)}
                  for="profile-modal"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} className="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">{profile.data ? "Update Profile" : "Add Profile"}</label>
          </div>

          {
              myInfoModal && <MyProfileModal
                  refetch={refetch}
                  profile={profile?.data}
                  setMyinfoModal={setMyinfoModal}></MyProfileModal>
          } */}
    </div>
  );
};

export default UserDetails;
