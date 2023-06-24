import React from "react";

const BookCard = ({ item }) => {
  return (
    <div className="border rounded-lg p-3 inline-block">
      <img src={item.image} className="object-cover rounded-lg" alt="" />
      <div className="mt-3 space-y-2">
        <h4 className="text-xl font-semibold">{item.name}</h4>
        <p>$ {item.price}</p>
      </div>
      <div className="text-center mt-3">
        <button className="w-full rounded-lg border border-[#F7A582] hover:bg-[#F7A582] font-semibold hover:text-white text-[#F7A582] px-3 py-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookCard;
