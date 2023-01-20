import React from "react";
import "../../styles/our-member.css";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const OUR_MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "David Lisa",
    experience: "6 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Backhum",
    experience: "4 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Shawon Bhai",
    experience: "2 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt="" className="w-100" />
              <div className="single_member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>
            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section_description text-center text-black">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
