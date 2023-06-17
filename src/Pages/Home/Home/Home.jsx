import React, { useState } from "react";
// import docImage from "../../../assets/banner/doctor.png";
import docImages from "../../../assets/doctor.png";
import MyTabs from "../../../Components/Tabs/Tabs";
import Opening from "../../../Components/Opening/Opening";

// react tabs

const Home = () => {
  return (
    <>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 md:space-x-10">
        <div className="border p-1 rounded-lg hover:shadow-md shadow">
          <img className="w-full" src={docImages} alt="" />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <MyTabs></MyTabs>
        </div>
      </div>
      {/* opening section  */}
      <div className="mt-20">
        <Opening></Opening>
      </div>
    </>
  );
};

export default Home;
