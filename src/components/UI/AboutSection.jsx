import React from "react";
import "../../styles/about-section.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about_section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "200px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">Welcome to car rent service</h2>
              <p className="section_description text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                facere sapiente facilis dolorem alias quia repellat error maxime
                laboriosam velit. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quidem, odio velit veniam est ipsam
                dignissimos vitae fuga repellendus sit quas?
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2 text-black">
                  <i className="ri-checkbox-circle-line"></i>lorem ipsm dalar
                  sit
                </p>
                <p className="section_description d-flex align-items-center gap-2 text-black">
                  <i className="ri-checkbox-circle-line"></i>lorem ipsm dalar
                  sit
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2 text-black">
                  <i className="ri-checkbox-circle-line"></i>lorem ipsm dalar
                  sit
                </p>
                <p className="section_description d-flex align-items-center gap-2 text-black">
                  <i className="ri-checkbox-circle-line"></i>lorem ipsm dalar
                  sit
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} className="w-100" alt="about_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
