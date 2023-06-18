import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useState } from "react";
import { useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-10 px-4">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((revie, index) => (
          <SwiperSlide key={index}>
            <p className="px-4">
              {" "}
              <span>
                <FaQuoteLeft className="text-5xl text-gray-600"></FaQuoteLeft>
              </span>
              {revie.review}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
