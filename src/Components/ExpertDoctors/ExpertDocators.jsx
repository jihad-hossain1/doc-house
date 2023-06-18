import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllDcotors } from "../../auth/doctor";

const ExpertDocators = () => {
  const [getExpertDoctors, setExpertDoctors] = useState([]);

  useEffect(() => {
    getAllDcotors()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpertDoctors(data);
      });
  }, []);
  return <div>{getExpertDoctors.length}</div>;
};

export default ExpertDocators;
