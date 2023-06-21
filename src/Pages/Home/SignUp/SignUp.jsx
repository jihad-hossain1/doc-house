import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { saveUser } from "../../../auth/auth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_BB_KEY_ANOTHER;

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { error, setError } = useState("");
  const from = location.state?.from?.pathname || "/";
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const handleToast = () => {
    toast.success("successfull");
  };

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;

        createUser(email, password).then((result) => {
          updateUserProfile(name, imgUrl)
            .then(() => {
              saveUser(result.user);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Register Complete",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.log(error);
              toast.error(`${error}`);
            });
        });
      });
  };

  // upload picture

  const handleGoogleSignIn = () => {
    console.log("clck");
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto xl:px-44 md:px-10 sm:px-2 px-4 mt-10">
      <Toaster />
      <h2 className="text-3xl font-bold text-neutral-600 text-center my-4">
        Sign Up to Doc House
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="border w-full px-3 py-4"
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            required
            type="email"
            name="email"
            className="border w-full px-3 py-4"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            required
            type="password"
            name="password"
            className="border w-full px-3 py-4"
          />
          {/* TODO: PASSWORD VALIDATION  */}
        </div>
        <div>
          <input
            required
            type="file"
            className="border w-full px-3 py-4"
            name="image"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            className="border cursor-pointer  w-full mx-auto rounded-md bg-[#F7A582] py-4 px-3 hover:shadow-md shadow"
          />
        </div>
      </form>
      <div className="divider"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="border cursor-pointer  w-full mx-auto rounded-md bg-[#F7A582] py-4 px-3 hover:shadow-md shadow text-white font-bold"
        >
          {" "}
          Sign With <span className="uppercase">Google</span>
        </button>
      </div>
      <div className="text-center mt-5">
        Already registered? Go to
        <Link to={`/login`} className="font-bold text-[#F7A582] ml-2">
          SIGN IN
        </Link>
      </div>
      <div className="text-center mt-5 py-3  ">
        Go to
        <Link to={`/`} className="ml-2  text-[#F7A582]  font-bold">
          Home
        </Link>
      </div>
      <div>
        <button onClick={handleToast}>test mod</button>
      </div>
    </div>
  );
};

export default SignUp;
