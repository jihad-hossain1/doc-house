import React from "react";
import MyTabs from "../Tabs/Tabs";
import useService from "../../hook/useService";
import { Link } from "react-router-dom";

const SevicesHome = ({ docImages }) => {
  const [services] = useService();
  console.log(services);
  return (
    // < >
    //   <div className="container px-6 py-10 mx-auto ">
    //     <h1 className="text-2xl font-semibold  lg:text-5xl dark:text-gray-500">
    //       Our Services
    //     </h1>

    //     <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
    //       <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
    //         <p className="mt-3 text-sm text-gray-900 dark:text-white md:text-sm">
    //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    //           quae ab illo inve ntore veritatis et quasi architecto beatae vitae
    //           dicta sunt explicabo.
    //         </p>
    //         {/* <MyTabs></MyTabs> */}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <img
    //       className="rounded-md object-cover"
    //       src="https://i.ibb.co/rpYsBBF/dd-1.jpg"
    //       alt=""
    //     />
    //   </div>
    // </>
    <>
      {/* <MyTabs></MyTabs> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our <br /> Best Services
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-error rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-error rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-error rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div className="space-y-3" key={service?._id}>
                  <span className="inline-block p-3 text-error bg-blue-100 rounded-xl dark:text-white dark:bg-error">
                    {service?.category}
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    {service?.name}
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://i.ibb.co/rpYsBBF/dd-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SevicesHome;
