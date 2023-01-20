import React from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import AboutSection from "../UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../UI/BecomeDriverSection";
import driveImg from "../../assets/all-images/drive.jpg";
import OurMembers from "../UI/OurMembers";
import "../../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About" />
      <AboutSection aboutClass="aboutPage" />
      <section className="about_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-content">
                <h2 className="section_title">
                  We Are Committed to Provide Safe Ride Soluitons
                </h2>
                <p className="section_description text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  pariatur ratione aliquid fuga maiores voluptatem molestiae
                  esse praesentium reiciendis! Itaque, sunt assumenda. Ut fuga
                  eaque aut numquam sapiente quis dignissimos!
                </p>
                <p className="section_description text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section_subtitle">Need Any Help?</h6>
                    <h6>+8801629558696</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Experts</h6>
              <h4 className="section_subtitle">Our Members</h4>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
