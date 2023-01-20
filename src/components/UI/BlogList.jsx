import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-6">
      <div className="blog_item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog_info p-3 ">
          <Link to={`/blog/${title}`} className="blog_title">
            {title}
          </Link>
          <p className="section_description text-black mt-2">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>
          <Link to={`/blog/${title}`} className="read_more ">
            Read More
          </Link>
          <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog_author mt-4">
              <i className="ri-user-line"></i>
              {author}
            </span>
            <div className="d-flex icon_info gap-2">
              <span className="d-flex gap-1 section_description">
                <i className="ri-calendar-line"></i>
                {date}
              </span>
              <span className="d-flex gap-1 section_description">
                <i className="ri-time-line"></i>
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
