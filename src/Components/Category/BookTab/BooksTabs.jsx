import React from "react";
import BookCard from "./BookCard";
import { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const BooksTabs = ({ items }) => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [bookLoad, setBookLoad] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 3000);
  };
  const handleAppointment = (e) => {
    if (user && user?.email) {
      e.preventDefault();
      const form = e.target;
      const cname = form.cname.value;
      const name = form.name.value;
      const number = form.number.value;
      const email = form.email.value;
      const date = form.date.value;
      const price = form.price.value;
      const schedule = form.schedule.value;
      const info = {
        name,
        cname,
        number,
        email,
        date,
        schedule,
        price: parseFloat(price),
      };
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/carts`, info)
        .then((data) => {
          console.log(data);
          if (data.data.insertedId) {
            setBookLoad(data.data.insertedId);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "booking saved on carts",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire({
        title: "Please login to booking the service",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    // console.log(info);
    form.reset();
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
            handleAppointment={handleAppointment}
            handleCancel={handleCancel}
            confirmLoading={confirmLoading}
            bookLoad={bookLoad}
          ></BookCard>
        ))}
      </div>
    </>
  );
};

export default BooksTabs;
