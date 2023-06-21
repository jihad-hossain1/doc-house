import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user && (
        <div className=" flex flex-col items-center">
          <h2 className="text-3xl font-extralight">Wellcome Your Dashboard</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
