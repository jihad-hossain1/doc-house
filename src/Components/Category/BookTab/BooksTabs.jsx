import React from "react";
import BookCard from "./BookCard";

const BooksTabs = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-14">
      {items.map((item) => (
        <BookCard key={item._id} item={item}></BookCard>
      ))}
    </div>
  );
};

export default BooksTabs;
