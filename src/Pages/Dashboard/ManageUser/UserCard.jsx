import React from "react";

const UserCard = ({ index, isUser }) => {
  const { image, _id, name, email } = isUser;
  //   console.log(data);
  return (
    <div className="rounded shadow hover:shadow-md p-3 hover:border inline-block  ">
      <div className="font-semibold px-1  relative">
        <div className="absolute top-0 right-0">{index + 1}</div>
      </div>
      <img
        src={image ? image : <p>No Image</p>}
        className="w-16 rounded-3xl border p-1"
        alt="User"
      />
      <h4 className="font-semibold">{name}</h4>
      <p className="truncate hover:text-clip">{email}</p>
      <div className="divider"></div>

      <div className="flex space-x-3 ">
        {/* TODO: USER ROLE  */}
        <button className="border border-gray-600 px-1 rounded ">User</button>
        <button className="border border-gray-600 px-1 rounded">Admin</button>
      </div>
    </div>
  );
};

export default UserCard;
