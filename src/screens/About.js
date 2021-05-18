import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormControl,
  Row,
  Col,
  Image,
  InputGroup,
  Nav,
  Accordion,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./About.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import get__in__touch__panel__bg from "../assets/get__in__touch__panel__bg.png";
import jumbotron__about__background__img from "../assets/jumbotron__about__background__img.png";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 0,
    };
  }
  render() {
    const resultNo = 22;
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    return (
      <>
        <Header />
        <div className="jumbotron__about">
          <img
            src={jumbotron__about__background__img}
            alt="jumbotron__about-background-img"
            className="jumbotron__about-background-img"
          />
          <div className="jumbotron__about-content">
            <div className="jumbotron__about-content-heading">About Us</div>
            <div className="jumbotron__about-content-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.
            </div>
          </div>
        </div>
        <div className="about__panel">
          <div className="about__panel__heading">Our Story</div>
          <div className="about__panel__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially.
          </div>
        </div>
        <Container
          style={{
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            paddingBottom: "8em",
            flexDirection: "column",
            position: "relative",
            maxWidth: "100vw",
          }}
          className="svg__container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              left: "-320px",
              top: "-140px",
              zIndex: "2",
            }}
            viewBox="0 0 767.81 767.811"
            width="600px"
          >
            <g
              id="Rectangle_768"
              data-name="Rectangle 768"
              transform="translate(767.81 383.905) rotate(135)"
              fill="none"
              stroke="#ee7a27"
              stroke-width="50"
            >
              <rect width="242.924" height="222.924" rx="40" stroke="none" />
              <rect
                x="60"
                y="60"
                width="322.924"
                height="322.924"
                rx="20"
                fill="#ffffff"
              />
            </g>
          </svg>
          <div className="get__in__touch__panel">
            <img
              src={get__in__touch__panel__bg}
              alt="get__in__touch__panel__bg"
              className="get__in__touch__panel__bg"
            />
            <div className="get__in__touch__panel__content">
              <div className="get__in__touch__panel__heading">
                Lorem Ipsum is simply dummy text of thee 1500s
              </div>
              <div className="get__in__touch__panel__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially.
              </div>
              <div className="get__in__touch__panel__btn">
                <Button variant="dark" className="button__override__reverse">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
export default About;
