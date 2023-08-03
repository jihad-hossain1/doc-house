import React from "react";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { FaIndent, FaUserCheck } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useUsers from "../hook/useUsers";
import { useAdmin } from "../hook/useAdmin";
import { useInstructor } from "../hook/useInstructor";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const { users } = useUsers();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isAdmin, isAdminLoading] = useAdmin();
  // const isAdmin = users.map((admin) => admin.role);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Space className="lg:hidden">
          <div className="mt-4 ml-2">
            <Button type="secondary" onClick={showDrawer}>
              <FaIndent className="text-2xl hover:text-3xl "></FaIndent>
            </Button>
          </div>
        </Space>
        <Drawer
          title={user?.displayName}
          // placement={placement}
          placement="left"
          onClose={onClose}
          open={open}
          key={placement}
          width={270}
          // className="w-2/4 "
        >
          <ul className="space-y-6 text-xl">
            {(isAdmin && (
              <>
                <li>
                  <Link to={`manageUser`}>Manage Users</Link>
                </li>
                <li>
                  <Link to={`addItem`}>Add Doctor</Link>
                </li>
                <li>
                  <Link to={`addService`}>Add Service</Link>
                </li>
                <li>
                  <Link to={`/`}>Manage Doctors</Link>
                </li>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
              </>
            )) ||
              (isInstructor && (
                <>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                </>
              )) || (
                <>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li>
                    <Link to={`mycart`}>My Appointment</Link>
                  </li>
                  <li>
                    <Link to={`mybooking`}>My Booking</Link>
                  </li>
                </>
              )}
          </ul>
        </Drawer>
        <div className="lg:hidden">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          <div className=" min-h-screen border-0 border-r-2 px-5 pt-4">
            <ul className="space-y-6 text-xl">
              {(isAdmin && (
                <>
                  <li>
                    <Link to={`manageUser`}>Manage Users</Link>
                  </li>
                  <li>
                    <Link to={`addItem`}>Add Doctor</Link>
                  </li>
                  <li>
                    <Link to={`addService`}>Add Service</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Manage Doctors</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                </>
              )) ||
                (isInstructor && (
                  <>
                    <li>
                      <Link to={`/`}>Home</Link>
                    </li>
                  </>
                )) || (
                  <>
                    <li>
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                      <Link to={`mycart`}>My Appointment</Link>
                    </li>
                    <li>
                      <Link to={`mybooking`}>My Booking</Link>
                    </li>
                  </>
                )}
              {/* {(isAdmin && <li>admin</li>) ||
                (isInstructor && <li>instructor</li>) || <li>normal user</li>} */}
            </ul>
          </div>
          <div className="col-span-4  w-full min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
