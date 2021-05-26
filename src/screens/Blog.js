import React from "react";
import "./Blog.scss";
import { Container, Jumbotron, Col, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import blogJumbotron from "../assets/blogbgpic-min.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Blog extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="jumbotron__about" style={{ height: "300px" }}>
          <img
            src={blogJumbotron}
            alt="jumbotron__about-background-img"
            className="jumbotron__about-background-img"
          />
          <div className="jumbotron__about-content">
            <div className="jumbotron__about-content-heading">Blog</div>
          </div>
        </div>
        <Container>
          <Col className="blog__card__col">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Col>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Blog;
