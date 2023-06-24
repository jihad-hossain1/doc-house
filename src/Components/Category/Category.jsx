import React from "react";
import { icons } from "../Icon/Icons";
import CategoryBox from "./CategoryBox";
import { Outlet } from "react-router-dom";
import useDoctors from "../../hook/useDoctors";

import teethIcon from "../../assets/icons/teeth.png";
import cosmeticIcon from "../../assets/icons/cosmetic.png";
import teethCleaningIcon from "../../assets/icons/teethClean.png";
import cavityIcon from "../../assets/icons/cavity.png";
import pediatricIcon from "../../assets/icons/pediatricDental.png";
import oralIcon from "../../assets/icons/oralSurgery.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [doctors] = useDoctors();
  const teethOrthodontics = doctors.filter(
    (service) => service.Category === "orthodontic"
  );
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
        {/* {icons.map((icon, index) => (
          <CategoryBox key={index} icon={icon.icon} label={icon.label}>
            {icon.label}
          </CategoryBox>
        ))} */}
        <Tabs>
          <TabList>
            <Tab className={`flex gap-2 cursor-pointer `}>
              <img src={teethIcon} alt="" />
              <span className="font-semibold">
                Teeth <br /> Orthodonatics
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
