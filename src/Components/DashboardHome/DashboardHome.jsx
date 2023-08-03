import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-24">
      {user && (
        <div className=" flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt=""
            className="rounded-md border border-orange-200 p-1 shadow hover:shadow-md w-32"
          />
          <h2 className="text-3xl font-extralight">{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
