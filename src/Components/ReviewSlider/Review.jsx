import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
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
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 2,
          },
        }}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((revie, index) => (
          <SwiperSlide key={index}>
            <div className="md:mr-2 p-4 border border-[#F7A582] rounded">
              <div className="flex justify-between items-center">
                <div className=" flex space-x-3 items-center">
                  <div className="avatar">
                    <div className="w-20 rounded-full border border-[#f7a582]">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-950 font-semibold">
                      {user?.displayName}
                    </h4>
                    <p className="text-gray-500">IT Expert</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-5xl text-[#F7A582]"></FaQuoteLeft>
              </div>
              <p className="px-4 break-all">{revie.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
