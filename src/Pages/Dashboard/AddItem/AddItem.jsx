import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_BB_KEY;
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers/TimeField";

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItem = () => {
  const [selectDoctorLebel, setSelectDoctorLebel] = useState(null);
  const [selectDoctorCategory, setselectDoctorCategory] = useState(null);
  const [selectLocation, setSelectLocation] = useState(null);
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [endTimeValue, setEndTimeValue] = useState(null);
  const doctorLebel = [
    { value: "seniorPhysiotherapist", label: "Senior Physiotherapist" },
    { value: "juniorPhysiotherapist", label: "Junior Physiotherapist" },
    { value: "professiorPhysiotherapist", label: "Professior Physiotherapist" },
  ];
  const doctorCategory = [
    { value: "TeethOrthodonatics", label: "TeethOrthodonatics" },
    { value: "CosmeticDentisty", label: "CosmeticDentisty" },
    { value: "CavityProtection", label: "CavityProtection" },
    { value: "PediatricDental", label: "PediatricDental" },
    { value: "OralSurgery", label: "OralSurgery" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
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
          const { name, email, description, price, rating } = data;
          const newItem = {
            name,
            email,
            image: imgUrl,
            category,
            description,
            price: parseFloat(price),
            rating: parseFloat(rating),
            doctorLabel: selectDoctorLebel,
            doctorCategory: selectDoctorCategory,
            location: selectLocation,
            dateTime: { value, timeValue, endTimeValue },
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

          <div className="flex space-x-2">
            <div className="w-full">
              <label htmlFor="html">Set your Location</label>

              <CreatableSelect
                isMulti
                defaultValue={selectLocation}
                onChange={setSelectLocation}
                // options={options}
              />
            </div>
            <div className="w-full">
              <label htmlFor="html">Select your Category</label>
              <Select
                defaultValue={selectDoctorCategory}
                onChange={setselectDoctorCategory}
                className="rounded"
                options={doctorCategory}
              />
            </div>
            <div className="w-full">
              <label htmlFor="html">Select your Label</label>
              <Select
                defaultValue={selectDoctorLebel}
                onChange={setSelectDoctorLebel}
                className="rounded"
                options={doctorLebel}
              />
            </div>
          </div>
          <div className="md:flex md:space-x-3">
            <div className="w-full">
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
            <div className="w-full">
              <label htmlFor="" className="font-semibold">
                Rating
              </label>
              <input
                required
                type="text"
                {...register("rating")}
                className="border w-full px-3 py-4"
              />
            </div>
          </div>
          <div className="md:flex md:space-x-3">
            {/* <DatePickers></DatePickers> */}
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(props) => (
                    <TextField required {...props}></TextField>
                  )}
                ></DatePicker>
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeField
                  label="Select Start Time"
                  value={timeValue}
                  onChange={(newValue) => setTimeValue(newValue)}
                  format="HH:mm"
                />
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeField
                  label="Select End Time"
                  value={endTimeValue}
                  onChange={(newValue) => setEndTimeValue(newValue)}
                  format="HH:mm"
                />
              </LocalizationProvider>
            </div>
            {/* <ResponsivePickers></ResponsivePickers> */}
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
              value="Add Doctor"
              className="text-white font-semibold border cursor-pointer  w-full px-3 py-4 mx-auto rounded-md bg-[#07332F]  hover:shadow-md shadow"
            />
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={() => reset()}
            className="border px-1 hover:border-neutral-300 hover:shadow shadow-sm rounded"
          >
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
