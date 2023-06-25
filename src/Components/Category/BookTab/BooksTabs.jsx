import React from "react";
import BookCard from "./BookCard";
import { useState } from "react";
import { Button, Modal } from "antd";

const BooksTabs = ({ items }) => {
  const [booking, setBooking] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleBooking = (item) => {
    // console.log(item);
    setBooking(item);
  };
  console.log(booking);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-14">
        {items.map((item) => (
          <BookCard
            key={item._id}
            item={item}
            handleBooking={handleBooking}
            booking={booking}
            showModal={showModal}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          ></BookCard>
        ))}
      </div>
    </>
  );
};

export default BooksTabs;
