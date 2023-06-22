import React from "react";
import useUsers from "../../../hook/useUsers";

import UserCard from "./UserCard";

const ManageUser = () => {
  const [users] = useUsers();

  return (
    <div className="mx-5 my-7 ">
      <h4>Total User {users.length}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
        {users.map((isUser, index) => (
          <UserCard key={isUser._id} index={index} isUser={isUser}></UserCard>
        ))}
      </div>
      {/* modal components  */}
    </div>
  );
};

export default ManageUser;
