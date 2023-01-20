import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import BlogList from "../UI/BlogList";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
