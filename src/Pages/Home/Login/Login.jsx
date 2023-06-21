import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // const captchaRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Complete",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((errors) => {
        console.log(errors.message);
        toast.error(`${errors.message}`);
      });
  };

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
            value="LogIn"
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
