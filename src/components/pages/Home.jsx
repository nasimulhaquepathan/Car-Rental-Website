import React from "react";

import HeroSlider from "../UI/HeroSlider";
import Helmet from "../Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../UI/FindCarForm";
import AboutSection from "../UI/AboutSection";
import ServicesList from "../UI/ServicesList";
import CarData from "../../assets/data/carData";
import CarItem from "../UI/CarItem";
import BecomeDriverSection from "../UI/BecomeDriverSection";
import Testimonial from "../UI/Testimonial";
import BlogList from "../UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ========= hero section========== */}
      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ----- about section---------- */}
      <AboutSection />
      {/* ----- service section---------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">See our</h6>
              <h2 className="section_title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========car offer section ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-5">
              <h6 className="section_subtitle">Come with </h6>
              <h2 className="section_title">Hot Offer</h2>
            </Col>
            {CarData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========become a driver section ========== */}
      <BecomeDriverSection />

      {/* =========testimonial  section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="m-4 text-center">
              <h6 className="text-center">Our Clients says</h6>
              <h2 className="section_title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      {/* ========= blog  section ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="text-center">Explore Our Blogs</h6>
              <h2 className="section_title">Latest blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
