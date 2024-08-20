import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [serviceDetailsData, setServiceDetailsData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetailsData(data));
  }, []);

  console.log(serviceDetailsData);
  return (
    <div className="service-details">
      <div className="service-details-banner">
        <h2>Service Details of {serviceDetailsData.title}</h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
