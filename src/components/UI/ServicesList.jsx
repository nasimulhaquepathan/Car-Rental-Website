import React from "react";
import "../../styles/service-list.css";
import servicesData from "../../assets/data/serviceData";
import { Col } from "reactstrap";

const ServicesList = () => {
  return (
    <>
      {servicesData?.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service_item">
      <span className="mb-3 d-inline-block">
        <div className="icon">
          <i className={item.icon} />
        </div>
      </span>

      <h6>{item.title}</h6>
      <small className="section_description ">{item.desc}</small>
    </div>
  </Col>
);
export default ServicesList;
