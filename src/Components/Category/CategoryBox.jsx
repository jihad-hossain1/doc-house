import React from "react";
import queryString from "query-string";
import {
  Navigate,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const CategoryBox = ({ icon, label }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const navigate = useNavigate();
  console.log(value);

  const handleClickByCategory = () => {
    let currentQuary = {};
    if (params) {
      currentQuary = queryString.parse(params.toString());
    }
    const updateQuary = {
      ...currentQuary,
      category: label,
    };
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updateQuary,
      },
      {
        skipNull: true,
      }
    );
    navigate(url);
  };

  return (
    <div
      onClick={handleClickByCategory}
      className="shadow-md rounded p-4 flex justify-center items-center  cursor-pointer overflow-hidden gap-3"
    >
      <img
        src={icon}
        className=" object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20"
        alt=""
      />

      <h4 className="font-semibold">{label}</h4>
    </div>
  );
};

export default CategoryBox;
