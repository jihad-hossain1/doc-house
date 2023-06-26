import React from "react";
import useCart from "../../../hook/useCart";
import { FaAmazonPay, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateBooking from "./UpdateBooking";
import BookingPayModal from "../Payment/BookingPayModal";
// import { FaAmazonPay } from "react-icons/fa6";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const [updateItem, setUpdateItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [bookingPay, setBookingPay] = useState();

  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BASE_URL}/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleUpdateBooking = (item) => {
    console.log(item._id);
    setUpdateItem(item);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlePayOk = () => {
    setIsPayModalOpen(false);
  };
  const handlePayCancel = () => {
    setIsPayModalOpen(false);
  };
  const showModalPay = () => {
    setIsPayModalOpen(true);
  };
  const handleBookingPayment = (item) => {
    // console.log(item);
    setBookingPay(item);
  };
  return (
    <div className="my-10">
      <h4 className="font-semibold text-3xl text-center pb-6">
        My Total Appointment:
        <span className="ml-3">{cart.length}</span>
      </h4>
      <div className="overflow-x-auto">
        <table className="table w-2/3 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Price</th>
              <th>Action</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id} index={index} item={item} className="">
                <th>{index + 1}</th>
                <td>
                  <ul className="text-sm">
                    <li className="font-semibold">{item?.cname}</li>
                    <li className="text-gray-600">{item?.number}</li>
                  </ul>
                </td>
                <td>{item?.date}</td>
                <td>{item?.schedule}</td>
                <td>{item?.name}</td>
                <td> ${item?.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdateBooking(item)}
                    className="mx-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-300"
                  >
                    <MdEdit
                      onClick={showModal}
                      className="text-green-500 text-2xl transition"
                    ></MdEdit>
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="mx-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-300"
                  >
                    <FaRegTrashAlt className="text-rose-500 text-2xl transition"></FaRegTrashAlt>
                  </button>
                </td>
                <td className="">
                  <button
                    onClick={() => handleBookingPayment(item)}
                    className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-300"
                  >
                    <FaAmazonPay
                      onClick={showModalPay}
                      className="text-[#07332F] text-3xl"
                    ></FaAmazonPay>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end w-2/3 mx-auto mt-10 gap-4">
        <h4 className="font-semibold">
          Total Pay Amount: <span className="ml-2 font-normal">${total}</span>
        </h4>

        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <FaAmazonPay className="text-[#07332F] text-3xl"></FaAmazonPay>
        </button>

        <button></button>
      </div>
      {/* bookingUpdate  */}
      <UpdateBooking
        updateItem={updateItem}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        refetch={refetch}
      ></UpdateBooking>
      {/* bookingPayment  */}
      <BookingPayModal
        bookingPay={bookingPay}
        isPayModalOpen={isPayModalOpen}
        handlePayOk={handlePayOk}
        handlePayCancel={handlePayCancel}
        refetch={refetch}
      ></BookingPayModal>
    </div>
  );
};

export default MyCart;
