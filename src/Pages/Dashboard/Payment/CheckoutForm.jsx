import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ bookingPay, handlePayCancel }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingPay.price) {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, {
          price: bookingPay?.price,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          ...bookingPay,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/bookingInfo`, paymentInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "payment complete",
                showConfirmButton: false,
                timer: 1500,
              });
              handlePayCancel(true);
              navigate("/dashboardLayout/mycart");
            }
          });
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-7">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="text-center mt-8">
          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-[#07332F] hover:bg-[#02201e] text-xl rounded-md text-white font-semibold py-2"
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-rose-500 py-2 text-center">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
