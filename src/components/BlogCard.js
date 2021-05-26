import React from "react";
import { Card, Nav } from "react-bootstrap";
import cardbg from "../assets/cardbg-min.png";
import { Link } from "react-router-dom";

class BlogCard extends React.Component {
  render() {
    return (
      <Nav.Link as={Link} to="/blog-artical" className="blog__card__link">
        <Card className="blog__card">
          <Card.Img
            variant="top"
            src={cardbg}
            style={{ width: "100%", maxHeight: "300px" }}
          />
          <Card.Body>
            <Card.Title style={{ color: "#242424", fontWeight: "bold" }}>
              Blog Name Here
            </Card.Title>
            <Card.Text>
              <div className="blog__card__content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                iure harum, fugiat reprehenderit quos est. Vel, quidem repellat
                consequatur
              </div>
              <div className="blog__card_credentials">
                <div className="blog__card__about">
                  <img
                    src={cardbg}
                    alt="blog__card__about__pic"
                    className="blog__card__about__pic"
                  />
                  <div>
                    <span>posted By</span>
                    <span className="blog__card__about__heading">John Doe</span>
                  </div>
                </div>
                <div className="timeStamp">10 Hours Ago</div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Nav.Link>
    );
  }
}
export default BlogCard;
