import React, { useState } from "react";
// import docImage from "../../../assets/banner/doctor.png";
import docImages from "../../../assets/doctor.png";
import MyTabs from "../../../Components/Tabs/Tabs";
import Opening from "../../../Components/Opening/Opening";
import Banner from "../../../Components/Banner/Banner";
import Review from "../../../Components/ReviewSlider/Review";
import ExpertDocators from "../../../Components/ExpertDoctors/ExpertDocators";
import ContactUs from "../../../Components/ContactUs/ContactUs";
import Container from "../../../Components/Share/Container/Container";

// react tabs

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
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
        {/* doctor review  */}
        <div className="mt-16">
          <div className="text-center space-y-3">
            <h2 className="font-bold text-3xl">What Our Patients Says</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
              <br className=" hidden lg:block" />
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <Review></Review>
        </div>

        {/* Our Expert Doctors  */}
        <div className="my-32 ">
          <div className="text-center space-y-3 mb-10">
            <h4 className="text-4xl font-bold">Our Expert Doctors</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              deleniti doloremque minus molestiae, dolores repudiandae repellat
              aperiam culpa tempore dolor!
            </p>
          </div>

          <div>
            <ExpertDocators></ExpertDocators>
          </div>
        </div>

        {/* contact with us section  */}
        <ContactUs></ContactUs>
      </Container>
    </>
  );
};

export default Home;
