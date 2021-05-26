import React from "react";
import "./Blog.scss";
import { Container, Jumbotron, Col, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import blogJumbotron from "../assets/blogArticalBgPic.png";
import userPic from "../assets/userPic.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

class BlogArtical extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Jumbotron className="jumbotron__blog__artical">
          <img
            src={blogJumbotron}
            alt="aboutJumbotronPic"
            style={{ width: "100%", minHeight: "100%" }}
          />
          <div className="blog__data">
            <div className="blog__data__top__row">
              <div className="blog__artical__details">
                <img src={userPic} alt="userPic" className="user__pic" />
                <div className="blog__artical__vol">
                  <div className="heading__posted__by">Posted by</div>
                  <div className="posted__by">John Snowri</div>
                  <div className="posted__time__stamp">3 Hours Ago</div>
                </div>
              </div>
              <div className="blog__artical__name">Blog Name Here</div>
            </div>
            <div className="blog__data__bottom__row">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut,
              consequatur veritatis eveniet error in accusamus ex neque natus
              quidem blanditiis quae ullam minus labore deserunt cupiditate,
              nisi, temporibus esse enim. Magnam optio ex sequi, incidunt
              aperiam deleniti doloremque fugiat, illum doloribus suscipit eaque
              adipisci? Repellat est quod similique accusamus fugiat. Neque
              sequi unde consectetur, quo quas nam temporibus, soluta vero quis
              cumque dolorum ea fugiat commodi iste aliquam? Error minima ab
              culpa cupiditate laboriosam eaque! Quidem, vel quae error odit
              sint, repellendus et nesciunt doloremque qui porro molestias
              fugiat! Praesentium expedita accusantium, optio nisi officia
              officiis dolore adipisci. Eum.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellat labore quibusdam, non recusandae ut
              dignissimos, optio cum rerum consectetur, cumque quis? Ex debitis
              aliquid assumenda reprehenderit dolores enim tempora natus nulla
              eius amet, et minima excepturi esse, aspernatur iure reiciendis
              incidunt nisi voluptate blanditiis atque? Enim alias quia, soluta
              ab aperiam illo iste eum sunt qui nobis repudiandae. Quidem
              molestias eaque aperiam alias, corrupti dignissimos odio
              explicabo. Iusto quibusdam numquam doloribus eaque sed similique
              mollitia labore, eum aperiam deleniti exercitationem earum officia
              possimus soluta repudiandae laboriosam dolorem rem. Explicabo
              soluta temporibus ad qui fuga doloribus incidunt! Provident,
              incidunt perferendis.
            </div>
          </div>
        </Jumbotron>
        <Container>
          <Col className="blogArtical__col">
            <Row className="popular__blog__post__title">Popular Blog Posts</Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </Col>
            </Row>
          </Col>
        </Container>
        <Footer />
      </>
    );
  }
}
export default BlogArtical;
