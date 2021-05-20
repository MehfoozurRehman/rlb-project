import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import FieldCard from "../components/FieldCard";
import "./Client.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jumbotron__client__background__img from "../assets/jumbotron__client__background__img.png";

class Client extends React.Component {
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
        <div className="jumbotron__client">
          <img
            src={jumbotron__client__background__img}
            alt="jumbotron__client-background-img"
            className="jumbotron__client-background-img"
          />
          <div className="jumbotron__client-content">
            <a href="#werving" className="jumbotron__client-content-card">
              <div className="jumbotron__client-content-card-text">
                Werving & Selectie
              </div>
            </a>
            <a
              href="#detachering"
              className="jumbotron__client-content-card-reverse"
            >
              <div className="jumbotron__client-content-card-text-reverse">
                Detachering
              </div>
            </a>
            <a href="#sourcing" className="jumbotron__client-content-card">
              <div className="jumbotron__client-content-card-text">
                Sourcing
              </div>
            </a>
            <a
              href="#interim"
              className="jumbotron__client-content-card-reverse"
            >
              <div className="jumbotron__client-content-card-text-reverse">
                Interim Solutions
              </div>
            </a>
            <a href="#rpo" className="jumbotron__client-content-card">
              <div className="jumbotron__client-content-card-text">
                RPO (Recruitment Process Outsourcing)
              </div>
            </a>
          </div>
        </div>
        <section className="client__section" id="werving">
          <div className="contact__about-section-content-left-card">
            <div className="contact__about-section-content-left-card-heading">
              <div className="contact__about-section-content-left-card-heading-icon"></div>
              Werving & Selectie
            </div>
            <div className="contact__about-section-content-left-card-info">
              A completed HBO or WO degree in Mechanical Engineering or related
              You have (internship) experience in a similar position to System
              Engineer You have experience in the mechanical engineering
              industry preferably as a System Engineer
            </div>
            <div className="contact__about-section-content-left-card-info">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees.
            </div>
          </div>
        </section>
        <section className="client__section-reverse" id="detachering">
          <div className="contact__about-section-content-left-card">
            <div className="contact__about-section-content-left-card-heading">
              <div className="contact__about-section-content-left-card-heading-icon"></div>
              Detachering
            </div>
            <div className="contact__about-section-content-left-card-info">
              A completed HBO or WO degree in Mechanical Engineering or related
              You have (internship) experience in a similar position to System
              Engineer You have experience in the mechanical engineering
              industry preferably as a System Engineer
            </div>
            <div className="contact__about-section-content-left-card-info">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees.
            </div>
          </div>
        </section>
        <section className="client__section" id="sourcing">
          <div className="contact__about-section-content-left-card">
            <div className="contact__about-section-content-left-card-heading">
              <div className="contact__about-section-content-left-card-heading-icon"></div>
              Sourcing
            </div>
            <div className="contact__about-section-content-left-card-info">
              A completed HBO or WO degree in Mechanical Engineering or related
              You have (internship) experience in a similar position to System
              Engineer You have experience in the mechanical engineering
              industry preferably as a System Engineer
            </div>
            <div className="contact__about-section-content-left-card-info">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees.
            </div>
          </div>
        </section>
        <section className="client__section-reverse" id="interim">
          <div className="contact__about-section-content-left-card">
            <div className="contact__about-section-content-left-card-heading">
              <div className="contact__about-section-content-left-card-heading-icon"></div>
              Interim Solutions
            </div>
            <div className="contact__about-section-content-left-card-info">
              A completed HBO or WO degree in Mechanical Engineering or related
              You have (internship) experience in a similar position to System
              Engineer You have experience in the mechanical engineering
              industry preferably as a System Engineer
            </div>
            <div className="contact__about-section-content-left-card-info">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees.
            </div>
          </div>
        </section>
        <section className="client__section" id="rpo">
          <div className="contact__about-section-content-left-card">
            <div className="contact__about-section-content-left-card-heading">
              <div className="contact__about-section-content-left-card-heading-icon"></div>
              RPO (Recruitment Process Outsourcing)
            </div>
            <div className="contact__about-section-content-left-card-info">
              A completed HBO or WO degree in Mechanical Engineering or related
              You have (internship) experience in a similar position to System
              Engineer You have experience in the mechanical engineering
              industry preferably as a System Engineer
            </div>
            <div className="contact__about-section-content-left-card-info">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees.
            </div>
          </div>
        </section>
        <Container
          style={{
            marginTop: "8em",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            paddingBottom: "8em",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div className="clients__panel">
            <div className="clients__panel__heading">
              Overview of Our Clients
            </div>
            <div className="clients__panel__content">
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
              <div className="clients__panel__content__card">Microsoft</div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Client;
