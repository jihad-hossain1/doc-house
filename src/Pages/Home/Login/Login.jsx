import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-[1200px] mx-auto xl:px-44 md:px-10 sm:px-2 px-4 mt-10">
      <h2 className="text-3xl font-bold text-neutral-600 text-center my-4">
        Log to Doc House
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="" className="font-semibold ">
            Username or Email Address
          </label>
          <input
            required
            type="email"
            {...register("email")}
            className="border w-full px-3 py-4"
          />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <input
            required
            type="password"
            {...register("password")}
            className="border w-full px-3 py-4"
          />
        </div>

        <div>
          <input
            type="submit"
            value="submit"
            className="border cursor-pointer  w-full px-3 py-4 mx-auto rounded-md bg-[#F7A582]  hover:shadow-md shadow"
          />
        </div>
      </form>
      <div className="text-center mt-5">
        Please register at first. Go to
        <Link to={`/signup`} className="ml-2  text-[#F7A582]  font-bold">
          SIGN UP
        </Link>
      </div>
      <div className="text-center mt-5 py-3  ">
        Go to
        <Link to={`/`} className="ml-2  text-[#F7A582]  font-bold">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
