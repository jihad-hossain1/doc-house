import { Elements } from "@stripe/react-stripe-js";
import { Modal } from "antd";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../../provider/AuthProvider";
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);

const BookingPayModal = ({
  bookingPay,
  isPayModalOpen,
  refetch,

  handlePayOk,
  handlePayCancel,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* booking pay  */}
      <Modal
        open={isPayModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handlePayOk}
        onCancel={handlePayCancel}
      >
        <h4 className="font-semibold text-[#F7A582]">
          <span className="">Hello'</span>
          {user?.displayName}
        </h4>
        <p className="font-bold">Please Pay for {bookingPay?.name}</p>
        <div className="my-2 ">
          <div className="text-neutral-600">
            Your Appointment:{" "}
            <span className="text-[#F7A582] font-semibold">
              {bookingPay?.date}
            </span>{" "}
            at <span>{bookingPay?.schedule}</span>
          </div>
          <p className="font-bold  py-4  ">Please Pay: ${bookingPay?.price}</p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            bookingPay={bookingPay}
            handlePayCancel={handlePayCancel}
            refetch={refetch}
          ></CheckoutForm>
        </Elements>
      </Modal>
    </div>
  );
};

export default BookingPayModal;
