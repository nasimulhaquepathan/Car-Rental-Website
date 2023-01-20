import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../../assets/data/blogData.js";
import Helmet from "../Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../../assets/all-images/ava-1.jpg";

import "../../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section_title mt-4">{blog.title}</h2>

                <div className="blog_publisher d-flex align-items-center gap-4 mb-4 pt-3">
                  <span className="blog_author fw-bold">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section_description text-black pt-0">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section_description text-black pt-0">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section_description text-black">
                  {blog.description}
                </p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-5">"{blog.quote}"</blockquote>
                </h6>
                <p className="section_description text-black ">
                  {blog.description}
                </p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single_comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment_content ">
                    <h6 className=" fw-bold ">David Visa</h6>
                    <p className="section_description mb-0  text-black">
                      14 July, 2022
                    </p>
                    <p className="section_description text-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =========comment form ========= */}
                <div className="leave_comment-form mt-5">
                  <h4>Leave a Comments</h4>
                  <p className="section_description text-black">
                    You must sign-in to make or comment a post
                  </p>
                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 px-3 py-2"
                        placeholder="Comment.."
                      ></textarea>
                    </FormGroup>
                    <Button className="btn comment_btn mt-3">
                      Post a Comment
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="recent_post mb-4 ">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent_blog-post mb-4" key={item.id}>
                  <div className="recent_blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2 " />
                    <h6>
                      <Link to={`/blog/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
