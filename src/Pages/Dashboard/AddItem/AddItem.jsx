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
  const [selectPassYear, setSelectPassYear] = useState(null);
  const [selectCollage, setSelectCollage] = useState(null);
  const [selectCourse, setSelectCourse] = useState(null);
  const [selectPassYear2, setSelectPassYear2] = useState(null);
  const [selectCollage2, setSelectCollage2] = useState(null);
  const [selectCourse2, setSelectCourse2] = useState(null);
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [endTimeValue, setEndTimeValue] = useState(null);
  const [selectAwardName, setSelectAwardName] = useState(null);
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
          const {
            name,
            email,
            description,
            price,
            rating,
            category,
            aboutAward,
            awardDate,
          } = data;
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
            education: {
              selectCollage,
              selectCourse,
              selectCourse,
              selectCollage2,
              selectCourse2,
              selectCourse2,
            },
            award: {
              selectAwardName,
              aboutAward,
              awardDate,
            },
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
      <h4 className="text-3xl text-center text-slate-600 font-bold">
        Add Your Doctor
      </h4>
      <div className="max-w-[1200px] mx-auto xl:px-44 md:px-10 sm:px-2 px-4 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:flex md:space-x-3 items-center ">
            <div className="w-full">
              <label htmlFor="" className="font-semibold">
                Doctor Name
              </label>
              <input
                required
                type="text"
                {...register("name")}
                className="border w-full px-3 py-4"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="font-semibold">
                Doctor Email
              </label>
              <input
                required
                type="email"
                {...register("email")}
                className="border w-full px-3 py-4"
              />
            </div>
          </div>

          <div className="md:flex md:space-x-2">
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
            <div className="w-full mb-4 md:mb-0">
              <label htmlFor="html">Set your Location</label>

              <CreatableSelect
                isMulti
                defaultValue={selectLocation}
                onChange={setSelectLocation}
                // options={options}
              />
            </div>
            {/* <div className="w-full mb-4 md:mb-0">
              <label htmlFor="html">Select your Category</label>
              <Select
                defaultValue={selectDoctorCategory}
                onChange={setselectDoctorCategory}
                className="rounded"
                options={doctorCategory}
              />
            </div> */}
            <div className="w-full mb-4 md:mb-0">
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
          <div className="md:flex md:space-x-3 gap-2">
            {/* <DatePickers></DatePickers> */}
            <div className="">
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
          {/* Education 1 */}
          <div>
            <h4 className="text-center font-semibold text-xl underline py-3">
              Educational Information
            </h4>
            <div className="grid md:flex items-center md:space-x-3 gap-3 md:gap-0">
              <div className="w-full">
                <label htmlFor="html">Course Name</label>
                <CreatableSelect
                  required
                  isMulti
                  defaultValue={selectCourse}
                  onChange={setSelectCourse}
                  // options={options}
                />
              </div>
              <div className="w-full">
                <label htmlFor="html">Collage Name</label>
                <CreatableSelect
                  required
                  isMulti
                  defaultValue={selectCollage}
                  onChange={setSelectCollage}
                  // options={options}
                />
              </div>
              <div className="w-full">
                <label htmlFor="html">Year</label>
                <CreatableSelect
                  required
                  isMulti
                  defaultValue={selectPassYear}
                  onChange={setSelectPassYear}
                  // options={options}
                />
              </div>
            </div>
          </div>
          {/* Education 2  */}
          <div>
            <h4 className="text-center font-semibold text-xl underline py-3">
              Educational Information (Optionals)
            </h4>
            <div className="grid md:flex items-center md:space-x-3 gap-3 md:gap-0">
              <div className="w-full">
                <label htmlFor="html">Course Name</label>
                <CreatableSelect
                  isMulti
                  defaultValue={selectCourse2}
                  onChange={setSelectCourse2}
                  // options={options}
                />
              </div>
              <div className="w-full">
                <label htmlFor="html">Collage Name</label>
                <CreatableSelect
                  isMulti
                  defaultValue={selectCollage2}
                  onChange={setSelectCollage2}
                  // options={options}
                />
              </div>
              <div className="w-full">
                <label htmlFor="html">Year</label>
                <CreatableSelect
                  isMulti
                  defaultValue={selectPassYear2}
                  onChange={setSelectPassYear2}
                  // options={options}
                />
              </div>
            </div>
          </div>
          {/* Award optional */}
          <div>
            {/* TODO : add award */}
            <h4 className="text-center font-semibold text-xl underline py-3">
              {" "}
              Award ( Optionals ){" "}
            </h4>
            <div className="grid md:flex items-center md:space-x-3 gap-3 md:gap-0">
              <div className="w-full">
                <label htmlFor="html">Award Name</label>
                <CreatableSelect
                  isMulti
                  defaultValue={selectAwardName}
                  onChange={setSelectAwardName}
                  // options={options}
                />
              </div>
              <div className="w-full">
                <label htmlFor="html">Award Year</label>
                <input
                  className="w-full border py-2 rounded px-2"
                  type="date"
                  name=""
                  {...register("awardDate")}
                  id=""
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <label htmlFor="html">
                Award Details <span className="text-red-600">*</span>
                <span className="text-sm text-gray-600">
                  max-word 1000
                </span>{" "}
              </label>
              <textarea
                type="text"
                maxLength={1000}
                className="border w-full rounded p-2 focus:outline-border outline-neutral-200 "
                placeholder="write about award details"
                {...register("aboutAward", { maxLength: 1000 })}
              />
            </div>
          </div>
          {/* Discription / About me */}
          <div className="w-full mt-2">
            <label htmlFor="html">
              About Doctor Details <span className="text-red-600">*</span>
              <span className="text-sm text-gray-600">max-word 1000</span>{" "}
            </label>
            <textarea
              type="text"
              maxLength={1000}
              className="border w-full rounded p-2 focus:outline-border outline-neutral-200 "
              placeholder="write about award details"
              {...register("description", { maxLength: 1000 })}
            />
          </div>
          {/* Experienc  */}
          <div className="flex">
            <input type="text" name="" {...register("expName")} id="" />
          </div>
          {/* Photo Upload  */}
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
