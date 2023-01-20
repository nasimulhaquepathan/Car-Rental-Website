import React from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import "../../styles/car-listing.css";
import CarItem from "../UI/CarItem";
import carData from "../../assets/data/carData";

const CartListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Cart-listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc">Sort By</i>
                </span>
                <select>
                  <option>Select</option>
                  <option value="low">Low to High </option>
                  <option value="high">High to low</option>
                </select>
              </div>
            </Col>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CartListing;
