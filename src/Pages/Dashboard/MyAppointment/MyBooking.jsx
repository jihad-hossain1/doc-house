import React from "react";
import useBookInfo from "../../../hook/useBookInfo";
import { useState } from "react";
import BookModalComponents from "../../../Components/BookModalComponents/BookModalComponents";

const MyBooking = () => {
  const [bookInfo] = useBookInfo();
  console.log(bookInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState();
  const showModal = (item) => {
    setItems(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="px-4 py-2">
      <h4 className="text-4xl text-center font-thin text-neutral-700 py-8">
        My Total Booking: {bookInfo?.length}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bookInfo.map((item) => (
          <div
            onClick={() => showModal(item)}
            key={item._id}
            className="border border-neutral-200 p-3 rounded shadow hover:shadow-md cursor-pointer"
          >
            <h4 className="text-gray-700 font-semibold text-xl">
              {item?.name}
            </h4>
            <p>
              Transaction Id:{" "}
              <span className="text-green-600">{item?.transactionId}</span>
            </p>
          </div>
        ))}
      </div>
      <BookModalComponents
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        items={items}
      ></BookModalComponents>
    </div>
  );
};

export default MyBooking;
