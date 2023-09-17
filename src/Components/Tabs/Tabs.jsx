import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getAllDcotors } from "../../auth/doctor";
import Heading from "../Heading/Heading";

const MyTabs = () => {
  const [doctors, setdoctors] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  // console.log(category);

  useEffect(() => {
    // setLoading(true);
    getAllDcotors()
      .then((data) => {
        if (category) {
          const filtered = data.filter(
            (doctor) => doctor.category === category
          );
          setdoctors(filtered);
        } else {
          setdoctors(data);
        }

        // setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [category]);

  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getTabStyle = (tabName) => {
    return {
      backgroundColor: activeTab === tabName ? "#F7A582" : "transparent",
    };
  };

  return (
    <Tabs className={``}>
      <TabList className={`flex space-x-2`}>
        <Tab style={getTabStyle("Tab1")} onClick={() => handleTabClick("Tab1")}>
          Cavity Protection
        </Tab>
        <Tab style={getTabStyle("Tab2")} onClick={() => handleTabClick("Tab2")}>
          Cosmetic Dentisty
        </Tab>
        <Tab style={getTabStyle("Tab3")} onClick={() => handleTabClick("Tab3")}>
          Oral Surgery
        </Tab>
      </TabList>

      {doctors && doctors.length > 0 ? (
        doctors.map((doctor) => (
          <TabPanel key={doctor._id}>
            <img src={doctor.image} className="object-cover mt-5" alt="" />
            <h2 className="font-semibold mt-3 mb-3">{doctor.name}</h2>
            <p>{doctor.description}</p>
            <div className="mt-3">
              <Link to={`/doctor/${doctor._id}`}>
                {" "}
                <button className="border border-orange-400 px-3 py-2 rounded shadow text-orange-500 ">
                  More Details
                </button>
              </Link>
            </div>
          </TabPanel>
        ))
      ) : (
        <Heading
          title="No Service!"
          subtitle="Please Select Other Categories."
          center={true}
        ></Heading>
      )}
    </Tabs>
  );
};

export default MyTabs;
