import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
  return (
    <header className="header">
      {/*============= header left ============= */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <ul className="header_top_left_list  ">
                  <span>Need Help? </span>
                  <span className="header_top_help">
                    <i className="ri-phone-fill"></i> +1 664-339-6689
                  </span>
                </ul>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*============= header middle ============= */}

      <div className="header_middle pb-0 b-0">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="3">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex  align-items-center gap-3">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-global-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Bangladesh</h4>
                  <h6>Netrokona, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am -7px</h6>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <div className="request_btn">
                <button className="header_btn btn text-end ">
                  <Link to="/contact">
                    <i className="ri-phone-line"></i>Request a call
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ===========Main Navigation ============== */}

      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
