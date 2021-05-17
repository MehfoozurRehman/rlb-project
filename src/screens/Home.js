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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.scss";
import Header from "../components/Header";
import homepageCompanyJumbotron from "../assets/homepageCompanyJumbotron.png";
import homepageCompanyJumbotronBg from "../assets/homepageCompanyJumbotronBg.png";
import Footer from "../components/Footer";
import FieldCard from "../components/FieldCard";
import side__panel__left__img from "../assets/side__panel__left__img.png";
import side__panel__right__img from "../assets/side__panel__right__img.png";
import get__in__touch__panel__bg from "../assets/get__in__touch__panel__bg.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.showComments = this.showComments.bind(this);
  }

  showComments() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  isCheckedFreelancer() {
    const check = document.querySelector(".checkbox__btn__freelancer");
    if (!check.classList.contains("checked")) {
      check.classList.add("checked");
    } else {
      check.classList.remove("checked");
    }
  }
  isCheckedEmployment() {
    const check = document.querySelector(".checkbox__btn__Employment");
    if (!check.classList.contains("checked")) {
      check.classList.add("checked");
    } else {
      check.classList.remove("checked");
    }
  }
  render() {
    return (
      <>
        <Header />
        <Container fluid style={{ padding: "0em" }}>
          <Jumbotron className="jumbotron__box">
            <img
              src={homepageCompanyJumbotron}
              alt="homepageCompanyJumbotronPic"
              className="jumbotron__img"
            />
            <div className="jumbotron__container">
              <Form>
                <Col>
                  <Row className="jumbotron__heading">
                    Get the Best Job
                    <br />
                    <span>You Deserve</span>
                  </Row>
                  <Row className="form__row">
                    <Col className="form__col">
                      <InputGroup className="input__box">
                        <FormControl
                          type="text"
                          placeholder="It is up to you to choose from 4234 vacancies"
                          variant="dark"
                          className="input__field"
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text
                            className="input__icon"
                            id="inputGroup-sizing-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 27 27"
                            >
                              <defs>
                                <clipPath id="clip-path">
                                  <rect width="27" height="27" fill="none" />
                                </clipPath>
                              </defs>
                              <g id="Search" clip-path="url(#clip-path)">
                                <rect
                                  id="Rectangle_693"
                                  data-name="Rectangle 693"
                                  width="20"
                                  height="20"
                                  fill="none"
                                />
                                <path
                                  id="Path_208"
                                  data-name="Path 208"
                                  d="M26.9,24.531l-5.583-5.583a11.584,11.584,0,0,0,2.369-7.106A11.77,11.77,0,0,0,11.843,0,11.77,11.77,0,0,0,0,11.843,11.77,11.77,0,0,0,11.843,23.686a11.584,11.584,0,0,0,7.106-2.369L24.531,26.9ZM3.384,11.843a8.377,8.377,0,0,1,8.459-8.459A8.377,8.377,0,0,1,20.3,11.843,8.377,8.377,0,0,1,11.843,20.3,8.377,8.377,0,0,1,3.384,11.843Z"
                                  fill="#ee7a27"
                                />
                              </g>
                            </svg>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="form__col" style={{ maxWidth: "200px" }}>
                      <Button variant="dark" className="button__override">
                        Start
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="button__svg"
                          viewBox="0 0 23 23"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect width="23" height="23" fill="none" />
                            </clipPath>
                          </defs>
                          <g
                            id="Forward_arrow"
                            data-name="Forward arrow"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_10"
                              data-name="Path 10"
                              d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
              <img
                src={homepageCompanyJumbotronBg}
                alt="homepageCompanyJumbotronBg"
                className="homepageCompanyJumbotronBg"
              />
            </div>
          </Jumbotron>
          <Container
            style={{
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              padding: "8em 0em",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="887"
              height="887"
              viewBox="0 0 887 887"
              style={{ position: "absolute", left: "-500px", top: "40%" }}
            >
              <g
                id="Ellipse_3"
                data-name="Ellipse 3"
                fill="#fbfbfb"
                stroke="#ee7a27"
                stroke-width="150"
                opacity="0.05"
              >
                <circle cx="443.5" cy="443.5" r="443.5" stroke="none" />
                <circle cx="443.5" cy="443.5" r="368.5" fill="none" />
              </g>
            </svg>
            <Row className="field__card__heading">Choose Your Field</Row>
            <Row className="field__card__row">
              <FieldCard
                title="Engineering"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
              <FieldCard
                title="Development"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
              <FieldCard
                title="Sales"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
              <FieldCard
                title="Manufacturing Supply Chain"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
              <FieldCard
                title="Finance"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
              <FieldCard
                title="IT"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              repudiandae necessitatibus voluptatibus doloribus voluptatem
              expedita iste esse dignissimos voluptas eveniet asperiores cumque
              sit porro vero a sint, eaque quibusdam itaque nobis ratione
              praesentium impedit iusto! Eligendi tempore quos rem."
                link="#"
              />
            </Row>
            <Row>
              <Button variant="primary" style={{ height: "40px" }}>
                Find 1676 Technical Vacanciess
              </Button>
            </Row>
          </Container>
          <Container
            style={{
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              paddingBottom: "8em",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Row style={{ width: "100vw" }}>
              <div className="side__panel__left">
                <img
                  src={side__panel__left__img}
                  alt="side__panel__left__img"
                  className="side__panel__left__img"
                />
                <div className="side__panel__left__content">
                  <div className="side__panel__left__heading">
                    We find the job for you
                  </div>
                  <div className="side__panel__left__info">
                    Sign up as a job seeker and put us to work.
                  </div>
                  <div className="side__panel__left__btn">
                    <Button
                      variant="dark"
                      className="button__override__reverse"
                    >
                      Register Directly
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
            <Row className="middle__panel">
              <div className="middle__panel__heading">How it Works</div>
              <div className="middle__panel__content">
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 78.988 98.031"
                  >
                    <g
                      id="_3135689"
                      data-name="3135689"
                      transform="translate(-49.729)"
                    >
                      <g
                        id="Group_1060"
                        data-name="Group 1060"
                        transform="translate(49.729)"
                      >
                        <g id="Group_1049" data-name="Group 1049">
                          <g id="Group_1048" data-name="Group 1048">
                            <path
                              id="Path_1370"
                              data-name="Path 1370"
                              d="M109.372,85.062V4.338A4.338,4.338,0,0,0,105.034,0H54.067a4.338,4.338,0,0,0-4.338,4.338V85.062A4.338,4.338,0,0,0,54.067,89.4h50.967A4.338,4.338,0,0,0,109.372,85.062Z"
                              transform="translate(-49.729 0)"
                              fill="#008aba"
                            />
                            <path
                              id="Path_1371"
                              data-name="Path 1371"
                              d="M341.8,0h-12.49a4.338,4.338,0,0,1,4.338,4.338V85.062a4.338,4.338,0,0,1-4.338,4.338H341.8a4.338,4.338,0,0,0,4.338-4.338V4.338A4.338,4.338,0,0,0,341.8,0Z"
                              transform="translate(-275.776)"
                              fill="#07baf8"
                            />
                            <path
                              id="Path_1372"
                              data-name="Path 1372"
                              d="M150.094,134.477a4.338,4.338,0,0,0,4.338-4.338V49.415a4.338,4.338,0,0,0-4.334-4.338H99.143a4.338,4.338,0,0,0-4.338,4.338v80.725a4.338,4.338,0,0,0,4.338,4.338Z"
                              transform="translate(-86.174 -36.446)"
                              fill="#f4fbff"
                            />
                            <path
                              id="Path_1373"
                              data-name="Path 1373"
                              d="M386.806,45.076H374.3a4.338,4.338,0,0,1,4.338,4.338v80.725a4.338,4.338,0,0,1-4.338,4.338h12.505a4.338,4.338,0,0,0,4.338-4.338V49.414A4.338,4.338,0,0,0,386.806,45.076Z"
                              transform="translate(-312.156 -36.445)"
                              fill="#e4f6ff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_1056"
                          data-name="Group 1056"
                          transform="translate(15.844 18.051)"
                        >
                          <g
                            id="Group_1050"
                            data-name="Group 1050"
                            transform="translate(1.361)"
                          >
                            <path
                              id="Path_1374"
                              data-name="Path 1374"
                              d="M158.194,119.667H142.635a3.05,3.05,0,0,1-3.05-3.05V97.325a3.05,3.05,0,0,1,3.05-3.05h15.559a3.05,3.05,0,0,1,3.05,3.05v19.293a3.05,3.05,0,0,1-3.05,3.049Z"
                              transform="translate(-139.585 -94.275)"
                              fill="#bed8fb"
                            />
                            <path
                              id="Path_1375"
                              data-name="Path 1375"
                              d="M150.915,176.018a11.386,11.386,0,0,0-10.711,7.526,3.049,3.049,0,0,0,2.931,2.215h15.559a3.049,3.049,0,0,0,2.931-2.215,11.385,11.385,0,0,0-10.711-7.526Z"
                              transform="translate(-140.085 -160.367)"
                              fill="#ee7a27"
                            />
                            <circle
                              id="Ellipse_17"
                              data-name="Ellipse 17"
                              cx="4.858"
                              cy="4.858"
                              r="4.858"
                              transform="translate(5.972 7.08)"
                              fill="#ee7a27"
                            />
                          </g>
                          <g
                            id="Group_1055"
                            data-name="Group 1055"
                            transform="translate(0 34.641)"
                          >
                            <g id="Group_1051" data-name="Group 1051">
                              <path
                                id="Path_1376"
                                data-name="Path 1376"
                                d="M185.377,278.157h-51.42a1.479,1.479,0,1,1,0-2.959h51.42a1.479,1.479,0,0,1,0,2.959Z"
                                transform="translate(-132.478 -275.198)"
                                fill="#407093"
                              />
                            </g>
                            <g
                              id="Group_1052"
                              data-name="Group 1052"
                              transform="translate(0 9.532)"
                            >
                              <path
                                id="Path_1377"
                                data-name="Path 1377"
                                d="M185.377,327.94h-51.42a1.479,1.479,0,1,1,0-2.959h51.42a1.479,1.479,0,1,1,0,2.959Z"
                                transform="translate(-132.478 -324.981)"
                                fill="#407093"
                              />
                            </g>
                            <g
                              id="Group_1053"
                              data-name="Group 1053"
                              transform="translate(0 19.064)"
                            >
                              <path
                                id="Path_1378"
                                data-name="Path 1378"
                                d="M185.377,377.723h-51.42a1.479,1.479,0,1,1,0-2.959h51.42a1.479,1.479,0,1,1,0,2.959Z"
                                transform="translate(-132.478 -374.764)"
                                fill="#407093"
                              />
                            </g>
                            <g
                              id="Group_1054"
                              data-name="Group 1054"
                              transform="translate(0 28.596)"
                            >
                              <path
                                id="Path_1379"
                                data-name="Path 1379"
                                d="M185.377,427.507h-51.42a1.479,1.479,0,1,1,0-2.959h51.42a1.479,1.479,0,0,1,0,2.959Z"
                                transform="translate(-132.478 -424.548)"
                                fill="#407093"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_1059"
                          data-name="Group 1059"
                          transform="translate(48.369 25.358)"
                        >
                          <g
                            id="Group_1057"
                            data-name="Group 1057"
                            transform="translate(0 7.819)"
                          >
                            <path
                              id="Path_1380"
                              data-name="Path 1380"
                              d="M322.728,176.237H303.833a1.479,1.479,0,1,1,0-2.959h18.895a1.479,1.479,0,1,1,0,2.959Z"
                              transform="translate(-302.354 -173.278)"
                              fill="#407093"
                            />
                          </g>
                          <g id="Group_1058" data-name="Group 1058">
                            <path
                              id="Path_1381"
                              data-name="Path 1381"
                              d="M322.728,135.4H303.833a1.479,1.479,0,1,1,0-2.959h18.895a1.479,1.479,0,1,1,0,2.959Z"
                              transform="translate(-302.354 -132.44)"
                              fill="#407093"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="middle__panel__content__card__heading">
                    Application
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="4"
                  style={{ margin: "auto 0px" }}
                  viewBox="0 0 88 4"
                >
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x2="84"
                    transform="translate(2 2)"
                    fill="none"
                    stroke="#ee7a27"
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke-dasharray="4 10"
                  />
                </svg>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 81.327 75.927"
                  >
                    <g
                      id="Group_1068"
                      data-name="Group 1068"
                      transform="translate(-709.599 -2451.297)"
                    >
                      <g
                        id="_2983720"
                        data-name="2983720"
                        transform="translate(709.599 2434.301)"
                      >
                        <path
                          id="Path_1382"
                          data-name="Path 1382"
                          d="M52.925,32.569A27.9,27.9,0,0,0,0,44.793a27.5,27.5,0,0,0,2.659,11.88L.048,69.739a2.384,2.384,0,0,0,2.8,2.8l13.228-2.615a27.406,27.406,0,0,0,5.517,1.93,32.6,32.6,0,0,1,31.334-39.29Z"
                          transform="translate(0)"
                          fill="#008aba"
                        />
                        <path
                          id="Path_1383"
                          data-name="Path 1383"
                          d="M214.521,184.678a27.716,27.716,0,0,0,1.193-2.941h-.087a27.827,27.827,0,0,0-25.028-36.7v0a27.8,27.8,0,1,0-1.335,55.562,27.493,27.493,0,0,0,11.844-2.66c14.487,2.864,13.357,2.661,13.69,2.661a2.384,2.384,0,0,0,2.336-2.85Z"
                          transform="translate(-135.854 -107.674)"
                          fill="#ee7a27"
                        />
                      </g>
                      <circle
                        id="Ellipse_18"
                        data-name="Ellipse 18"
                        cx="4"
                        cy="4"
                        r="4"
                        transform="translate(745 2495)"
                        fill="#fff"
                      />
                      <circle
                        id="Ellipse_19"
                        data-name="Ellipse 19"
                        cx="4"
                        cy="4"
                        r="4"
                        transform="translate(759 2495)"
                        fill="#fff"
                      />
                      <circle
                        id="Ellipse_20"
                        data-name="Ellipse 20"
                        cx="4"
                        cy="4"
                        r="4"
                        transform="translate(773 2495)"
                        fill="#fff"
                      />
                    </g>
                  </svg>

                  <div className="middle__panel__content__card__heading">
                    Conversation
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="4"
                  style={{ margin: "auto 0px" }}
                  viewBox="0 0 88 4"
                >
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x2="84"
                    transform="translate(2 2)"
                    fill="none"
                    stroke="#ee7a27"
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke-dasharray="4 10"
                  />
                </svg>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 85.533 74.812"
                  >
                    <g
                      id="_3281289"
                      data-name="3281289"
                      transform="translate(0 -32.088)"
                    >
                      <g
                        id="Group_1062"
                        data-name="Group 1062"
                        transform="translate(0 32.088)"
                      >
                        <path
                          id="Path_1384"
                          data-name="Path 1384"
                          d="M196.648,35.883a16.83,16.83,0,0,0-3.715-1.983,27.346,27.346,0,0,0-19.58,0,16.828,16.828,0,0,0-3.715,1.983,2.811,2.811,0,0,0-1.107,2.235v4.41l2.811,1.5,2.811-1.5V39.711a21.2,21.2,0,0,1,17.978,0v2.818l2.811,1.5,2.811-1.5v-4.41A2.81,2.81,0,0,0,196.648,35.883Z"
                          transform="translate(-140.378 -32.088)"
                          fill="#ee7a27"
                        />
                        <g
                          id="Group_1061"
                          data-name="Group 1061"
                          transform="translate(28.155 10.441)"
                        >
                          <path
                            id="Path_1385"
                            data-name="Path 1385"
                            d="M168.533,94.589v3.1l2.811,1.5,2.811-1.5v-3.1Z"
                            transform="translate(-168.533 -94.589)"
                            fill="#d66e41"
                          />
                          <path
                            id="Path_1386"
                            data-name="Path 1386"
                            d="M315.427,94.589H309.8v3.1l2.811,1.5,2.811-1.5Z"
                            transform="translate(-286.205 -94.589)"
                            fill="#d66e41"
                          />
                        </g>
                        <path
                          id="Path_1387"
                          data-name="Path 1387"
                          d="M13.247,298.286V323.26a5.368,5.368,0,0,0,5.368,5.368H88.986a5.368,5.368,0,0,0,5.368-5.368V298.286Z"
                          transform="translate(-11.034 -253.816)"
                          fill="#008aba"
                        />
                        <path
                          id="Path_1388"
                          data-name="Path 1388"
                          d="M13.247,279.705v3.1c4.46,3.541,16.247,10.415,40.553,10.415s36.094-6.874,40.553-10.415v-3.1H13.247Z"
                          transform="translate(-11.034 -238.339)"
                          fill="#2b4d66"
                        />
                        <path
                          id="Path_1389"
                          data-name="Path 1389"
                          d="M1.98,139.2c4.274,3.48,16.045,10.6,40.787,10.6s36.512-7.122,40.787-10.6c1.253-1.02,1.98-4.052,1.98-5.668v-15a5.368,5.368,0,0,0-5.368-5.368H5.368A5.368,5.368,0,0,0,0,118.537v15c0,1.616.727,4.648,1.98,5.668Z"
                          transform="translate(0 -99.624)"
                          fill="#008aba"
                        />
                        <path
                          id="Path_1390"
                          data-name="Path 1390"
                          d="M83.553,239.242c-4.274,3.48-16.045,10.6-40.787,10.6s-36.512-7.122-40.787-10.6A5.369,5.369,0,0,1,0,235.078v3.1a5.369,5.369,0,0,0,1.98,4.164c4.274,3.48,16.045,10.6,40.787,10.6s36.512-7.122,40.787-10.6a5.369,5.369,0,0,0,1.98-4.164v-3.1A5.369,5.369,0,0,1,83.553,239.242Z"
                          transform="translate(0 -201.167)"
                          fill="#365e7d"
                        />
                        <path
                          id="Path_1391"
                          data-name="Path 1391"
                          d="M230.925,316.283c2.777,0,5.028-2.062,5.028-6.532V306.7a1.789,1.789,0,0,0-1.789-1.789h-6.478A1.789,1.789,0,0,0,225.9,306.7v3.049C225.9,314.221,228.148,316.283,230.925,316.283Z"
                          transform="translate(-188.159 -259.336)"
                          fill="#ffe27a"
                        />
                        <path
                          id="Path_1392"
                          data-name="Path 1392"
                          d="M230.925,338.9a5.028,5.028,0,0,1-5.028-5.028v3.1a5.028,5.028,0,0,0,10.057,0v-3.1A5.028,5.028,0,0,1,230.925,338.9Z"
                          transform="translate(-188.159 -283.459)"
                          fill="#f9cf58"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Your job
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="4"
                  style={{ margin: "auto 0px" }}
                  viewBox="0 0 88 4"
                >
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x2="84"
                    transform="translate(2 2)"
                    fill="none"
                    stroke="#ee7a27"
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke-dasharray="4 10"
                  />
                </svg>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 82.857 82.857"
                  >
                    <g id="flat" transform="translate(-24 -24)">
                      <path
                        id="Path_1393"
                        data-name="Path 1393"
                        d="M232,32h8.571V42H232Z"
                        transform="translate(-170.857 -6.571)"
                        fill="#ffb401"
                      />
                      <path
                        id="Path_1394"
                        data-name="Path 1394"
                        d="M221.478,109.912l1.879,7.516h8.571l1.879-7.516Z"
                        transform="translate(-162.214 -70.571)"
                        fill="#ffb401"
                      />
                      <path
                        id="Path_1395"
                        data-name="Path 1395"
                        d="M216,24h14.286v1.429A4.286,4.286,0,0,1,226,29.714h-5.714A4.286,4.286,0,0,1,216,25.429Z"
                        transform="translate(-157.714)"
                        fill="#ffcc4d"
                      />
                      <rect
                        id="Rectangle_812"
                        data-name="Rectangle 812"
                        width="13"
                        height="5"
                        rx="2.5"
                        transform="translate(58.928 35.928)"
                        fill="#ffcc4d"
                      />
                      <path
                        id="Path_1396"
                        data-name="Path 1396"
                        d="M232,152h8.571v60H232Z"
                        transform="translate(-170.857 -105.143)"
                        fill="#ffc431"
                      />
                      <path
                        id="Path_1397"
                        data-name="Path 1397"
                        d="M61.143,196H35.429L24,186l11.429-10H61.143Z"
                        transform="translate(0 -124.857)"
                        fill="#008aba"
                      />
                      <path
                        id="Path_1398"
                        data-name="Path 1398"
                        d="M104,224h2.857v2.857H104Z"
                        transform="translate(-65.714 -164.286)"
                        fill="#4976f2"
                      />
                      <path
                        id="Path_1399"
                        data-name="Path 1399"
                        d="M136,224h8.571v2.857H136Z"
                        transform="translate(-92 -164.286)"
                        fill="#4976f2"
                      />
                      <path
                        id="Path_1400"
                        data-name="Path 1400"
                        d="M280,260h25.714l11.429-10-11.429-10H280Z"
                        transform="translate(-210.286 -177.429)"
                        fill="#ef5e3b"
                      />
                      <path
                        id="Path_1401"
                        data-name="Path 1401"
                        d="M360,288h8.571v2.857H360Z"
                        transform="translate(-276 -216.857)"
                        fill="#e04f2b"
                      />
                      <path
                        id="Path_1402"
                        data-name="Path 1402"
                        d="M320,288h4.286v2.857H320Z"
                        transform="translate(-243.143 -216.857)"
                        fill="#e04f2b"
                      />
                      <path
                        id="Path_1403"
                        data-name="Path 1403"
                        d="M94,340H75.429L64,330l11.429-10H94Z"
                        transform="translate(-32.857 -243.143)"
                        fill="#f78e00"
                      />
                      <g
                        id="Group_1063"
                        data-name="Group 1063"
                        transform="translate(44 85.428)"
                      >
                        <path
                          id="Path_1404"
                          data-name="Path 1404"
                          d="M136,368h2.857v2.857H136Z"
                          transform="translate(-136 -368)"
                          fill="#e67a00"
                        />
                        <path
                          id="Path_1405"
                          data-name="Path 1405"
                          d="M168,368h5.714v2.857H168Z"
                          transform="translate(-162.286 -368)"
                          fill="#e67a00"
                        />
                      </g>
                    </g>
                  </svg>

                  <div className="middle__panel__content__card__heading">
                    Guidance
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="4"
                  style={{ margin: "auto 0px" }}
                  viewBox="0 0 88 4"
                >
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x2="84"
                    transform="translate(2 2)"
                    fill="none"
                    stroke="#ee7a27"
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke-dasharray="4 10"
                  />
                </svg>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 82.855 82.857"
                  >
                    <g
                      id="_4394641"
                      data-name="4394641"
                      transform="translate(-0.007)"
                    >
                      <g
                        id="Group_1027"
                        data-name="Group 1027"
                        transform="translate(0.007 19.317)"
                      >
                        <path
                          id="Path_1265"
                          data-name="Path 1265"
                          d="M18.344,135.125h3.894a.742.742,0,0,0,.725-1.171L12.642,119.978a1.389,1.389,0,0,0-1.087-.612,1.39,1.39,0,0,0-1.092.612L.146,133.954a.742.742,0,0,0,.725,1.171H4.765v9.528c0,12.475,7.4,16.645,12.917,18.569a.5.5,0,0,0,.663-.473Z"
                          transform="translate(-0.007 -119.365)"
                          fill="#ee7a27"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1028"
                        data-name="Group 1028"
                        transform="translate(59.767 19.513)"
                      >
                        <path
                          id="Path_1266"
                          data-name="Path 1266"
                          d="M374.04,148.695h-3.894a.744.744,0,0,0-.725,1.176l10.317,13.972a1.276,1.276,0,0,0,2.18,0l10.322-13.972a.744.744,0,0,0-.725-1.176h-3.894v-9.528c0-12.475-7.4-16.645-12.917-18.564a.5.5,0,0,0-.662.473v27.619Z"
                          transform="translate(-369.282 -120.574)"
                          fill="#ee7a27"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1029"
                        data-name="Group 1029"
                        transform="translate(19.397 59.761)"
                      >
                        <path
                          id="Path_1267"
                          data-name="Path 1267"
                          d="M135.582,374.043v-3.895a.744.744,0,0,0-1.176-.725L120.435,379.74a1.276,1.276,0,0,0,0,2.18l13.971,10.322a.744.744,0,0,0,1.176-.725v-3.895h9.528c12.475,0,16.644-7.4,18.564-12.917a.5.5,0,0,0-.473-.662H135.582Z"
                          transform="translate(-119.821 -369.285)"
                          fill="#47e"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1030"
                        data-name="Group 1030"
                        transform="translate(19.588 0)"
                      >
                        <path
                          id="Path_1268"
                          data-name="Path 1268"
                          d="M139.6,4.758c-12.475,0-16.644,7.4-18.568,12.917a.5.5,0,0,0,.473.663h27.623v3.895a.742.742,0,0,0,1.171.725l13.976-10.322a1.276,1.276,0,0,0,0-2.18L150.3.138a.742.742,0,0,0-1.171.725V4.758Z"
                          transform="translate(-121.004 0)"
                          fill="#008aba"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1031"
                        data-name="Group 1031"
                        transform="translate(36.274 0)"
                      >
                        <path
                          id="Path_1269"
                          data-name="Path 1269"
                          d="M224.11,4.817c4.257,2.587,6.716,7.074,5.6,13.521h5.839v3.895a.742.742,0,0,0,1.171.725L250.7,12.635a1.276,1.276,0,0,0,0-2.18L236.719.138a.742.742,0,0,0-1.171.725V4.758H226.02q-.985,0-1.91.059Z"
                          transform="translate(-224.11 0)"
                          fill="#47e"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1032"
                        data-name="Group 1032"
                        transform="translate(40.825 64.519)"
                      >
                        <path
                          id="Path_1270"
                          data-name="Path 1270"
                          d="M255.259,398.686c.8,7.691-.48,11.85-3.027,13.58h3.86c12.475,0,16.644-7.4,18.564-12.917a.5.5,0,0,0-.473-.662Z"
                          transform="translate(-252.232 -398.686)"
                          fill="#008aba"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1033"
                        data-name="Group 1033"
                        transform="translate(64.525 19.513)"
                      >
                        <path
                          id="Path_1271"
                          data-name="Path 1271"
                          d="M398.681,123.343c4.624,2.489,9.175,7.162,9.175,16.95v9.381a1.871,1.871,0,0,0,1.871,1.871.743.743,0,0,1,.725,1.176l-7.27,9.5,1.2,1.622a1.276,1.276,0,0,0,2.18,0L416.88,149.87a.744.744,0,0,0-.725-1.176H412.26v-9.528c0-12.475-7.4-16.645-12.917-18.564a.5.5,0,0,0-.662.473v2.267Z"
                          transform="translate(-398.681 -120.574)"
                          fill="#fc9043"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1034"
                        data-name="Group 1034"
                        transform="translate(9.282 19.317)"
                      >
                        <path
                          id="Path_1272"
                          data-name="Path 1272"
                          d="M61.251,134.086v27.106a24.706,24.706,0,0,0,4.466,2.029.5.5,0,0,0,.663-.473V135.125h3.894A.742.742,0,0,0,71,133.954L60.677,119.978a1.276,1.276,0,0,0-2.18,0l-1.181,1.6L64.7,131.857a.744.744,0,0,1-.725,1.176H62.049C61.3,133.033,61.251,133.425,61.251,134.086Z"
                          transform="translate(-57.317 -119.365)"
                          fill="#fc9043"
                          fill-rule="evenodd"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Continued
                  </div>
                </div>
              </div>
            </Row>
            <Row
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className="side__panel__right">
                <img
                  src={side__panel__right__img}
                  alt="side__panel__left__img"
                  className="side__panel__right__img"
                />
                <div className="side__panel__right__content">
                  <div className="side__panel__left__heading">
                    We find the job for you
                  </div>
                  <div className="side__panel__left__info">
                    Sign up as a job seeker and put us to work.
                  </div>
                  <Button variant="dark" className="button__override__reverse">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </Row>
          </Container>
          <Container
            style={{
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              paddingBottom: "8em",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div className="email__list__form__container">
              <Form className="email__list__form">
                <div className="email__list__form__heading">
                  Sign Up For the Newsletter
                </div>
                <div className="email__list__form__content">
                  <FormControl
                    type="text"
                    placeholder="Enter your email address here"
                    variant="dark"
                    className="input__field"
                  />
                  <Button
                    variant="dark"
                    style={{ width: "150px", fontSize: "14px", height: "50px" }}
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially.
                </div>
                <div className="get__in__touch__panel__btn">
                  <Button variant="dark" className="button__override__reverse">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </Container>
          <Container
            style={{
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              paddingBottom: "8em",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div className="clients__panel">
              <div className="clients__panel__heading">Trusted Clients</div>
              <div className="clients__panel__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus doloribus mollitia minima quam hic, at commodi cum
                nostrum reiciendis numquam.
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
        </Container>
        <Footer />
      </>
    );
  }
}
export default Home;
