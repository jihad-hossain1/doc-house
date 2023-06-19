import React from "react";
import { FaMap, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div className="bg-[#07332F] min-h-16 rounded-md mt-5 grid grid-cols-1 md:grid-cols-2 p-10 gap-3 md:gap-7">
      <div className="text-white space-y-4 ">
        <h3 className="text-3xl font-semibold">Contact With Us</h3>
        <p className="pt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          quos obcaecati cupiditate atque possimus non nulla hic minima cumque,
          quisquam corporis maiores adipisci dolorum libero accusamus debitis ab
          odio beatae!
        </p>
        <p className=" flex items-center">
          <span className="mr-3">
            <FaPhone></FaPhone>
          </span>{" "}
          +880 xxx 0834 0234
        </p>
        <p className=" flex items-center">
          <span className="mr-3">
            <FaMap></FaMap>
          </span>{" "}
          ABc, Dhaka, Bangladesh
        </p>
      </div>
      <div className="inline-block">
        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
          <div className="md:flex md:space-x-2">
            <input
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="md:flex md:space-x-2">
            <input
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              type="text"
              placeholder="Mobile Number"
              {...register("number", { required: true })}
            />
            {errors.number && <span>This field is required</span>}
            <input
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              type="text"
              placeholder="Doctor Name"
              {...register("doctorName", { required: true })}
            />
            {errors.doctorName && <span>This field is required</span>}
          </div>
          <div className="md:flex md:space-x-2">
            <input
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              type="date"
              placeholder="Date"
              {...register("date", { required: true })}
            />
            {errors.date && <span>This field is required</span>}

            <select
              className="m-3 bg-[#12423ffb] px-3 py-4 text-white rounded-md w-full md:w-2/3"
              {...register("time")}
            >
              <option disabled={true} value="">
                --Choose Time--
              </option>
              <option value="morning">morning</option>
              <option value="evening">evening</option>
              <option value="night">night</option>
            </select>
            {errors.doctorName && <span>This field is required</span>}
          </div>

          <div className="text-center mt-5">
            <input
              className="m-3 bg-[#F7A582] font-semibold rounded-md px-4 py-3 w-full cursor-pointer hover:shadow-lg shadow"
              type="submit"
              value="Book Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
