import { Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({
  item,
  handleBooking,
  showModal,
  booking,
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <>
      <div className="border border-neutral-300 hover:shadow-md rounded-lg p-8  flex flex-col justify-center items-center">
        <img src={item.image} className="object-cover rounded-lg w-28" alt="" />
        <div className="mt-3 space-y-2 flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">{item.name}</h4>
          <h4 className=" font-semibold">{item.schedule}</h4>
          <p>$ {item.price}</p>
        </div>
        <div className="text-center mt-5">
          <button
            onClick={() => handleBooking(item)}
            className="w-full rounded-lg bg-[#F7A582] font-semibold text-white  px-3 py-2 hover:shadow-md hover:bg-[#f58d60]"
          >
            <Link onClick={showModal}>Book Now</Link>
          </button>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>price: {booking?.schedule}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default BookCard;
