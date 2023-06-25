import { Modal } from "antd";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const BookCard = ({
  item,
  handleBooking,
  showModal,
  booking,
  isModalOpen,
  handleOk,
  handleCancel,
  handleAppointment,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="border border-neutral-300 hover:shadow-md rounded-lg p-8  flex flex-col justify-center items-center">
        <img
          src={item?.image}
          className="object-cover rounded-lg w-28"
          alt=""
        />
        <div className="mt-3 space-y-2 flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">{item?.name}</h4>
          <h4 className=" font-semibold">{item?.schedule}</h4>
          <p>$ {item?.price}</p>
        </div>
        <div onClick={handleAppointment} className="text-center mt-5">
          <button
            onClick={() => handleBooking(item)}
            className="w-full rounded-lg bg-[#F7A582] font-semibold text-white  px-3 py-2 hover:shadow-md hover:bg-[#f58d60]"
          >
            <span onClick={user && showModal}>Book Now</span>
          </button>
        </div>
      </div>

      {/* booking modal  */}
      <Modal
        title={booking?.name}
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="" onSubmit={handleAppointment}>
          <div className="grid grid-cols-2 text-center gap-2 my-2">
            <p className="font-semibold bg-neutral-200 border border-neutral-100 py-4 px-2 rounded-md">
              {booking?.schedule}
            </p>
            <p className="font-semibold bg-neutral-200 border border-neutral-100 py-4 px-2 rounded-md">
              $ {booking?.price}
            </p>
          </div>
          <input
            type="date"
            name="date"
            required
            className="font-semibold border border-neutral-100 bg-neutral-200 rounded-md py-4 px-2 w-full my-2"
          />
          <input
            type="text"
            name="schedule"
            defaultValue={booking?.schedule}
            readOnly
            id=""
            className="hidden"
          />
          <input
            type="text"
            name="name"
            defaultValue={booking?.name}
            readOnly
            id=""
            className="hidden"
          />
          <input
            type="number"
            name="price"
            defaultValue={booking?.price}
            readOnly
            id=""
            className="hidden"
          />
          <input
            placeholder="Your FullName"
            type="text"
            required
            name="cname"
            className="font-semibold border border-neutral-100 bg-neutral-200 rounded-md py-4 px-2 w-full my-2"
          />
          <input
            placeholder="Your Contact Number"
            required
            type="text"
            name="number"
            className="font-semibold border border-neutral-100 bg-neutral-200 rounded-md py-4 px-2 w-full my-2"
          />
          <input
            defaultValue={user?.email}
            type="email"
            name="email"
            readOnly
            className="font-semibold border border-neutral-100 bg-neutral-200 rounded-md py-4 px-2 w-full my-2"
          />

          <input
            type="submit"
            value="submit"
            className="w-full uppercase  font-semibold text-white bg-[#07332F] hover:bg-[#052724] shadow hover:shadow-md rounded-md py-4 cursor-pointer mt-4"
          />
        </form>
      </Modal>
    </>
  );
};

export default BookCard;
