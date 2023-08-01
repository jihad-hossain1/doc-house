import React from "react";
import useUsers from "../../../hook/useUsers";
import { FaUserCheck, FaUserShield } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ManageUser = () => {
  const [users, loading, refetch] = useUsers();

  const makeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          refetch();
          toast.success("make admin success");
        }
      })
      .catch((error) => {
        console.log(error?.message);
        if (error) {
          toast.error(error?.message);
        }
      });
  };
  return (
    <div className="mx-5 my-7">
      <Toaster></Toaster>
      <h4>Total User {users?.length}</h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Info</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.image ? user?.image : <p>No Image</p>}
                          alt="user Picture"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                  </div>
                </td>

                <td>
                  {" "}
                  <button className="border border-rose-200 shadow-sm hover:shadow text-sm px-1 rounded hover:bg-rose-700 hover:text-white">
                    Delete
                  </button>
                </td>
                <td className="">
                  {user?.role === "admin" ? (
                    <div className="flex items-center">
                      {" "}
                      <FaUserShield className="text-green-600 text-3xl"></FaUserShield>{" "}
                      <span className="text-sm ml-2">Admin</span>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => makeAdmin(user)}
                        className="border border-neutral-200 shadow-sm hover:shadow text-sm  rounded hover:border-green-600 flex items-center bg-green-950 text-white px-2 py-1"
                      >
                        <span className="mr-2"> make admin</span>{" "}
                        <FaUserCheck className="text-xl "> </FaUserCheck>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
