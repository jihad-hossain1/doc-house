import React from "react";

const About = ({ doctorDetails }) => {
  const { email, description, education } = doctorDetails;
  return (
    <>
      <div>
        <p className="text-xl font-bold mb-4">About Me</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div>
            <h4 className="text-xl font-bold">Education</h4>
            <div>
              {education?.selectCollage?.map((e, index) => (
                <div key={index}>
                  <h4>{e?.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4 className="text-xl font-bold">Award</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
