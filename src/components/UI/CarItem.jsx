import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { id, imgUrl, model, carName, automatic, speed, price } = props.item;
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car_item">
        <div className="car_img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        <div className="car_item-content mt-4">
          <h4 className="section_title text-center">{carName}</h4>
          <h6 className="rent_price text-center mt-2">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line">{model}</i>
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line">{automatic}</i>
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line">{speed}</i>
            </span>
          </div>
          <button className=" w-50 car_item-btn car_btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>
          <button className=" w-50 car_item-btn car_btn-rent car_btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
