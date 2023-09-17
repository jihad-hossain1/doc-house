import React from "react";
import MyTabs from "../Tabs/Tabs";

const SevicesHome = ({ docImages }) => {
  return (
    <>
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-2xl font-semibold  lg:text-5xl dark:text-gray-500">
          Our Services
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="mt-3 text-sm text-gray-900 dark:text-white md:text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <MyTabs></MyTabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevicesHome;
