import { Modal } from "antd";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const UpdateBooking = ({
  updateItem,
  isModalOpen,
  handleOk,
  handleCancel,
  refetch,
}) => {
  const updateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const cname = form.cname.value;
    const number = form.number.value;
    const date = form.date.value;
    const updateInfo = { cname, number, date };
    fetch(`${import.meta.env.VITE_BASE_URL}/cart/${updateItem?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "booking updated",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          refetch();
          handleCancel(true);
        }
        console.log(data);
      });
  };
  // console.log(updateItem);
  return (
    <>
      <Modal
        title={updateItem?.name}
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="" onSubmit={updateBook}>
          <input
            type="date"
            name="date"
            required
            className="font-semibold border border-neutral-100 bg-neutral-200 rounded-md py-4 px-2 w-full my-2"
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
            type="submit"
            value="submit"
            className="w-full uppercase  font-semibold text-white bg-[#07332F] hover:bg-[#052724] shadow hover:shadow-md rounded-md py-4 cursor-pointer mt-4"
          />
        </form>
      </Modal>
    </>
  );
};

export default UpdateBooking;
