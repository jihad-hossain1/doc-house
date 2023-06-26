import React from "react";
import useBookInfo from "../../../hook/useBookInfo";

const MyBooking = () => {
  const [bookInfo] = useBookInfo();
  console.log(bookInfo);
  return (
    <div>
      <h4 className="text-4xl text-center font-thin text-neutral-700 py-8">
        My Total Booking: {bookInfo?.length}
      </h4>
    </div>
  );
};

export default MyBooking;
