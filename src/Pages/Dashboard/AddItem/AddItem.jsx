import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_BB_KEY;

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        if (dataResponse.success) {
          const imgUrl = dataResponse.data.display_url;
          console.log("photo uploaded url", imgUrl);
          // console.log(imgUrl);
          const { name, email, category, description, price } = data;
          const newItem = {
            name,
            email,
            image: imgUrl,
            category,
            description,
            price: parseFloat(price),
          };
          console.log(newItem);
          axios
            .post(`${import.meta.env.VITE_BASE_URL}/addADoctor`, newItem)
            .then((data) => {
              if (data.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div className="mt-10 py-10">
      <div className="max-w-[1200px] mx-auto xl:px-44 md:px-10 sm:px-2 px-4 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="" className="font-semibold">
              Name
            </label>
            <input
              required
              type="text"
              {...register("name")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
              required
              type="email"
              {...register("email")}
              className="border w-full px-3 py-4"
            />
          </div>
          {/* <div>
            <label htmlFor="" className="font-semibold">
              Category
            </label>
            <input
              required
              type="text"
              {...register("category")}
              className="border w-full px-3 py-4"
            />
          </div> */}

          <div className="w-full">
            <select
              {...register("category")}
              name="category"
              className="border px-2 py-4 rounded w-full"
            >
              <option disabled selected>
                Select Service Category
              </option>
              <option value="TeethOrthodonatics">Teeth Orthodonatics</option>
              <option value="CosmeticDentisty">Cosmetic Dentisty</option>
              <option value="TeethCleaning">Teeth Cleaning</option>
              <option value="CavityProtection">Cavity Protection</option>
              <option value="PediatricDental">Pediatric Dental</option>
              <option value="OralSurgery">Oral Surgery</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Price
            </label>
            <input
              required
              type="text"
              {...register("price")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Description
            </label>
            <input
              required
              type="text"
              {...register("description")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <input
              required
              type="file"
              className="border w-full px-3 py-14 rounded-xl"
              {...register("image")}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Add Item"
              className="border cursor-pointer  w-full px-3 py-4 mx-auto rounded-md bg-[#F7A582]  hover:shadow-md shadow"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
