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
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
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
                    viewBox="0 0 157.456 125.051"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.844"
                        y1="1.137"
                        x2="0.387"
                        y2="0.307"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stop-color="#c6d1ff" />
                        <stop offset="0.583" stop-color="#e6d5f4" />
                        <stop offset="0.997" stop-color="#ffd9ec" />
                      </linearGradient>
                    </defs>
                    <g
                      id="_3062634"
                      data-name="3062634"
                      transform="translate(0 -52.685)"
                    >
                      <g
                        id="Group_994"
                        data-name="Group 994"
                        transform="translate(0 60.507)"
                      >
                        <path
                          id="Path_1199"
                          data-name="Path 1199"
                          d="M154.341,101.326c-6.875-17.495-28.055-27.986-45.993-21.043-20.476,7.925-13.687,40.493-32.285,47.079-10.047,3.558-24.9-9.731-35.049-11.769-18.7-3.755-35.637,9.443-39.806,27.719-4.254,18.646,2.569,43.549,23.055,48.61,24.4,6.028,37.114-15.908,57.585-22.207,21.007-6.464,44.365,8.8,61.756-9.772,12.849-13.722,17.546-41.293,10.738-58.616Z"
                          transform="translate(0 -78.118)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                      <g
                        id="Group_1005"
                        data-name="Group 1005"
                        transform="translate(16.856 52.685)"
                      >
                        <path
                          id="Path_1200"
                          data-name="Path 1200"
                          d="M188.064,129.07a21.995,21.995,0,0,0-42.57-7.77H65.964a6.15,6.15,0,0,0-6.151,6.151v68.09a6.15,6.15,0,0,0,6.151,6.151H174.33a6.15,6.15,0,0,0,6.151-6.151V145.677A21.937,21.937,0,0,0,188.064,129.07Z"
                          transform="translate(-58.275 -90.349)"
                          fill="#2626bc"
                          opacity="0.1"
                        />
                        <g
                          id="Group_1004"
                          data-name="Group 1004"
                          transform="translate(0 7.501)"
                        >
                          <g
                            id="Group_996"
                            data-name="Group 996"
                            transform="translate(1.537 15.761)"
                          >
                            <path
                              id="Path_1201"
                              data-name="Path 1201"
                              d="M174.329,208.717H65.963a6.15,6.15,0,0,1-6.151-6.151v-68.09a6.15,6.15,0,0,1,6.151-6.151H174.329a6.15,6.15,0,0,1,6.151,6.151v68.09A6.15,6.15,0,0,1,174.329,208.717Z"
                              transform="translate(-59.811 -128.326)"
                              fill="#9fb0fe"
                            />
                            <g
                              id="Group_995"
                              data-name="Group 995"
                              transform="translate(0 0.002)"
                            >
                              <path
                                id="Path_1202"
                                data-name="Path 1202"
                                d="M370.215,134.482v25.986a21.993,21.993,0,0,1-29.99-32.137h23.84a6.151,6.151,0,0,1,6.151,6.151Z"
                                transform="translate(-249.547 -128.331)"
                                fill="#8399fe"
                              />
                              <path
                                id="Path_1203"
                                data-name="Path 1203"
                                d="M180.479,134.482v7.753l-54.713,42.03a9.229,9.229,0,0,1-11.243,0L59.81,142.234v-7.753a6.151,6.151,0,0,1,6.151-6.151H174.328A6.151,6.151,0,0,1,180.479,134.482Z"
                                transform="translate(-59.81 -128.331)"
                                fill="#8399fe"
                              />
                              <path
                                id="Path_1204"
                                data-name="Path 1204"
                                d="M122.019,222.278l58.46,44.907a6.15,6.15,0,0,1-6.151,6.151H65.963a6.15,6.15,0,0,1-6.151-6.151l58.46-44.907A3.075,3.075,0,0,1,122.019,222.278Z"
                                transform="translate(-59.811 -192.945)"
                                fill="#8399fe"
                              />
                            </g>
                            <path
                              id="Path_1205"
                              data-name="Path 1205"
                              d="M229.635,237.018l-15.441,11.861a9.229,9.229,0,0,1-11.243,0L187.51,237.018l19.19-14.74a3.073,3.073,0,0,1,3.746,0Z"
                              transform="translate(-148.238 -192.944)"
                              fill="#6583fe"
                            />
                            <path
                              id="Path_1206"
                              data-name="Path 1206"
                              d="M118.272,179.384l-58.46-44.907a6.15,6.15,0,0,1,6.151-6.151H174.329a6.15,6.15,0,0,1,6.151,6.151l-58.46,44.907A3.076,3.076,0,0,1,118.272,179.384Z"
                              transform="translate(-59.811 -128.326)"
                              fill="#b7c5ff"
                            />
                          </g>
                          <g
                            id="Group_1002"
                            data-name="Group 1002"
                            transform="translate(47.429 78.08)"
                          >
                            <path
                              id="Path_1207"
                              data-name="Path 1207"
                              d="M345.234,340.859h-9.882a1.538,1.538,0,0,1-1.538-1.538v-6.813a1.538,1.538,0,0,1,1.538-1.538h9.882a1.538,1.538,0,0,1,1.538,1.538v6.813A1.538,1.538,0,0,1,345.234,340.859Z"
                              transform="translate(-295.442 -330.971)"
                              fill="#02ffb3"
                            />
                            <g
                              id="Group_1001"
                              data-name="Group 1001"
                              transform="translate(0 0.545)"
                            >
                              <g
                                id="Group_998"
                                data-name="Group 998"
                                transform="translate(21.527)"
                              >
                                <g id="Group_997" data-name="Group 997">
                                  <path
                                    id="Path_1208"
                                    data-name="Path 1208"
                                    d="M289.135,335.818h-8.559a1.538,1.538,0,1,1,0-3.075h8.559a1.538,1.538,0,1,1,0,3.075Z"
                                    transform="translate(-279.038 -332.743)"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                              <g
                                id="Group_1000"
                                data-name="Group 1000"
                                transform="translate(0 6.268)"
                              >
                                <g id="Group_999" data-name="Group 999">
                                  <path
                                    id="Path_1209"
                                    data-name="Path 1209"
                                    d="M240.662,356.2H210.576a1.538,1.538,0,1,1,0-3.075h30.087a1.538,1.538,0,1,1,0,3.075Z"
                                    transform="translate(-209.038 -353.125)"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Group_1003" data-name="Group 1003">
                            <circle
                              id="Ellipse_14"
                              data-name="Ellipse 14"
                              cx="21.994"
                              cy="21.994"
                              r="21.994"
                              transform="translate(85.801 1.538)"
                              fill="#ff5ba8"
                            />
                            <path
                              id="Path_1210"
                              data-name="Path 1210"
                              d="M162.608,124.139a23.571,23.571,0,1,0-14.412-4.95l-30.575,23.487a1.539,1.539,0,0,1-1.873,0l-57.8-44.4a4.621,4.621,0,0,1,4.558-3.9h70.537a1.538,1.538,0,1,0,0-3.075H62.5a7.7,7.7,0,0,0-7.688,7.688v68.09a7.7,7.7,0,0,0,7.688,7.688H170.867a7.7,7.7,0,0,0,7.688-7.688V126.441a1.538,1.538,0,0,0-3.075,0v37.517l-40.258-30.925L150.888,121a23.378,23.378,0,0,0,11.72,3.14Zm-64.461,8.894L57.888,163.958v-61.85Zm77.273,34.756a4.616,4.616,0,0,1-4.552,3.9H62.5a4.616,4.616,0,0,1-4.552-3.9l42.722-32.817,13.2,10.142a4.619,4.619,0,0,0,5.62,0l13.2-10.143Zm-33.268-67.182a20.456,20.456,0,1,1,20.456,20.456A20.479,20.479,0,0,1,142.152,100.607Z"
                              transform="translate(-54.813 -77.076)"
                              fill="#2626bc"
                            />
                          </g>
                          <path
                            id="Path_1211"
                            data-name="Path 1211"
                            d="M373.836,124.395l3.139,7.5-3.139,7.5a1.538,1.538,0,0,0,2.022,2.008l18.95-8.094a1.538,1.538,0,0,0,0-2.828l-18.95-8.094A1.538,1.538,0,0,0,373.836,124.395Z"
                            transform="translate(-275.641 -108.364)"
                            fill="#fff"
                          />
                          <path
                            id="Path_1212"
                            data-name="Path 1212"
                            d="M386.319,142.7l-9.449,4.038,2.289-5.474-2.291-5.474,9.452,4.038A1.609,1.609,0,0,1,386.319,142.7Z"
                            transform="translate(-277.826 -117.734)"
                            fill="#ffdbed"
                          />
                        </g>
                        <path
                          id="Path_1213"
                          data-name="Path 1213"
                          d="M320.792,61.6a4.457,4.457,0,1,1,3.153-1.3A4.444,4.444,0,0,1,320.792,61.6Zm0-5.84a1.383,1.383,0,1,0,.978.4A1.38,1.38,0,0,0,320.792,55.759Z"
                          transform="translate(-235.909 -52.685)"
                          fill="#00eca2"
                        />
                        <path
                          id="Path_1214"
                          data-name="Path 1214"
                          d="M208.5,439.243a4.457,4.457,0,1,1,3.153-1.3A4.446,4.446,0,0,1,208.5,439.243Zm0-5.84a1.383,1.383,0,1,0,.979.4A1.38,1.38,0,0,0,208.5,433.4Z"
                          transform="translate(-158.151 -314.192)"
                          fill="#00eca2"
                        />
                        <path
                          id="Path_1215"
                          data-name="Path 1215"
                          d="M278.161,81.045a1.532,1.532,0,0,1-1.087-.45l-1.834-1.834L273.4,80.594a1.538,1.538,0,0,1-2.174-2.175l2.922-2.922a1.538,1.538,0,0,1,2.174,0l2.922,2.922a1.537,1.537,0,0,1-1.087,2.625Z"
                          transform="translate(-204.364 -68.171)"
                          fill="#ff7eb8"
                        />
                        <path
                          id="Path_1216"
                          data-name="Path 1216"
                          d="M423.127,426.82a1.532,1.532,0,0,1-1.087-.45l-1.834-1.834-1.834,1.834a1.538,1.538,0,1,1-2.174-2.175l2.922-2.922a1.538,1.538,0,0,1,2.174,0l2.922,2.922a1.538,1.538,0,0,1-1.087,2.625Z"
                          transform="translate(-304.748 -307.61)"
                          fill="#ff7eb8"
                        />
                        <path
                          id="Path_1217"
                          data-name="Path 1217"
                          d="M162.265,431.57a1.532,1.532,0,0,1-1.087-.45l-1.834-1.834-1.834,1.834a1.538,1.538,0,0,1-2.174-2.175l2.922-2.922a1.538,1.538,0,0,1,2.174,0l2.922,2.922a1.537,1.537,0,0,1-1.087,2.625Z"
                          transform="translate(-124.109 -310.899)"
                          fill="#6583fe"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Application
                  </div>
                </div>
                <div className="middle__panel__content__card">
                  <svg
                    id="_3094881"
                    data-name="3094881"
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 144.18 140.663"
                  >
                    <g
                      id="Group_1006"
                      data-name="Group 1006"
                      transform="translate(0 68.573)"
                    >
                      <circle
                        id="Ellipse_15"
                        data-name="Ellipse 15"
                        cx="14.653"
                        cy="14.653"
                        r="14.653"
                        transform="translate(9.964)"
                        fill="#f1d0a5"
                      />
                      <path
                        id="Path_1218"
                        data-name="Path 1218"
                        d="M62.28,256.656a14.65,14.65,0,0,1-20,20,14.651,14.651,0,1,0,20-20Z"
                        transform="translate(-30.376 -254.713)"
                        fill="#f1b986"
                      />
                      <path
                        id="Path_1219"
                        data-name="Path 1219"
                        d="M0,365.543v9.993a2.9,2.9,0,0,0,2.9,2.9h43.43a2.9,2.9,0,0,0,2.9-2.9v-9.993A11.722,11.722,0,0,0,37.51,353.821H11.722A11.722,11.722,0,0,0,0,365.543Z"
                        transform="translate(0 -324.516)"
                        fill="#f6e266"
                      />
                      <path
                        id="Path_1220"
                        data-name="Path 1220"
                        d="M115.26,353.821h-7.033a11.722,11.722,0,0,1,11.722,11.722v12.894h4.132a2.9,2.9,0,0,0,2.9-2.9v-9.993A11.722,11.722,0,0,0,115.26,353.821Z"
                        transform="translate(-77.75 -324.516)"
                        fill="#f1d333"
                      />
                    </g>
                    <path
                      id="Path_1221"
                      data-name="Path 1221"
                      d="M5.861,6.244H76.192A5.861,5.861,0,0,1,82.053,12.1V58.993a5.861,5.861,0,0,1-5.861,5.861H59.676a1.16,1.16,0,0,0-.821.34L50.445,73.6a1.741,1.741,0,0,1-2.971-1.231V66.014a1.16,1.16,0,0,0-1.16-1.16H5.861A5.86,5.86,0,0,1,0,58.993V12.1A5.861,5.861,0,0,1,5.861,6.244Z"
                      transform="translate(0 -6.244)"
                      fill="#c8ea73"
                    />
                    <path
                      id="Path_1222"
                      data-name="Path 1222"
                      d="M210.032,47.87a12.308,12.308,0,0,0-12.308,12.308v38.1L200.9,95.1a1.16,1.16,0,0,1,.821-.34h16.516A5.861,5.861,0,0,0,224.1,88.9V47.87Z"
                      transform="translate(-142.045 -36.148)"
                      fill="#b7e445"
                    />
                    <g
                      id="Group_1007"
                      data-name="Group 1007"
                      transform="translate(94.948 86.742)"
                    >
                      <circle
                        id="Ellipse_16"
                        data-name="Ellipse 16"
                        cx="14.653"
                        cy="14.653"
                        r="14.653"
                        transform="translate(9.963)"
                        fill="#f1d0a5"
                      />
                      <path
                        id="Path_1223"
                        data-name="Path 1223"
                        d="M399.449,321.176a14.65,14.65,0,0,1-20,20,14.651,14.651,0,1,0,20-20Z"
                        transform="translate(-367.546 -319.233)"
                        fill="#f1b986"
                      />
                      <path
                        id="Path_1224"
                        data-name="Path 1224"
                        d="M337.171,430.063v9.993a2.9,2.9,0,0,0,2.9,2.9H383.5a2.9,2.9,0,0,0,2.9-2.9v-9.993a11.722,11.722,0,0,0-11.722-11.722H348.893a11.722,11.722,0,0,0-11.722,11.722Z"
                        transform="translate(-337.171 -389.036)"
                        fill="#4073c8"
                      />
                      <path
                        id="Path_1225"
                        data-name="Path 1225"
                        d="M452.431,418.341H445.4a11.722,11.722,0,0,1,11.722,11.722v12.894h4.132a2.9,2.9,0,0,0,2.9-2.9v-9.993A11.722,11.722,0,0,0,452.431,418.341Z"
                        transform="translate(-414.921 -389.036)"
                        fill="#30579d"
                      />
                    </g>
                    <path
                      id="Path_1226"
                      data-name="Path 1226"
                      d="M296.81,70.764H226.479a5.861,5.861,0,0,0-5.861,5.861v46.888a5.861,5.861,0,0,0,5.861,5.861H243a1.16,1.16,0,0,1,.821.34l8.411,8.411a1.741,1.741,0,0,0,2.971-1.231v-6.359a1.16,1.16,0,0,1,1.16-1.16h40.453a5.861,5.861,0,0,0,5.861-5.861V76.625a5.861,5.861,0,0,0-5.861-5.861Z"
                      transform="translate(-158.492 -52.595)"
                      fill="#ecf4ff"
                    />
                    <path
                      id="Path_1227"
                      data-name="Path 1227"
                      d="M468.759,70.764h-8.791a5.861,5.861,0,0,1,5.861,5.861v46.888a5.861,5.861,0,0,1-5.861,5.861h8.791a5.861,5.861,0,0,0,5.861-5.861V76.625A5.861,5.861,0,0,0,468.759,70.764Z"
                      transform="translate(-330.441 -52.595)"
                      fill="#cbe2ff"
                    />
                    <g
                      id="Group_1008"
                      data-name="Group 1008"
                      transform="translate(10.133 114.457)"
                    >
                      <path
                        id="Path_1228"
                        data-name="Path 1228"
                        d="M40.333,420.734v-5.861a2.176,2.176,0,0,0-4.351,0v5.861Z"
                        transform="translate(-35.982 -412.697)"
                        fill="#f1d333"
                      />
                      <path
                        id="Path_1229"
                        data-name="Path 1229"
                        d="M127.747,414.872a2.176,2.176,0,1,0-4.351,0v5.861h4.352v-5.861Z"
                        transform="translate(-98.78 -412.696)"
                        fill="#f1d333"
                      />
                    </g>
                    <g
                      id="Group_1009"
                      data-name="Group 1009"
                      transform="translate(105.08 132.626)"
                    >
                      <path
                        id="Path_1230"
                        data-name="Path 1230"
                        d="M377.5,485.254v-5.861a2.176,2.176,0,0,0-4.351,0v5.861Z"
                        transform="translate(-373.152 -477.217)"
                        fill="#30579d"
                      />
                      <path
                        id="Path_1231"
                        data-name="Path 1231"
                        d="M464.918,485.254v-5.861a2.176,2.176,0,1,0-4.351,0v5.861Z"
                        transform="translate(-435.951 -477.217)"
                        fill="#30579d"
                      />
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Conversation
                  </div>
                </div>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 102 123.228"
                  >
                    <g
                      id="_2936615"
                      data-name="2936615"
                      transform="translate(-44.098 0.001)"
                    >
                      <path
                        id="Path_1232"
                        data-name="Path 1232"
                        d="M204.148,86.542a8.408,8.408,0,0,1-.906,3.225,481.367,481.367,0,0,1-72.443-.319,8.426,8.426,0,0,1-.753-2.906,515.575,515.575,0,0,1-.309-72.721q.146-2.2.309-4.4a8.481,8.481,0,0,1,7.518-7.788,267.007,267.007,0,0,1,59.066,0,8.479,8.479,0,0,1,7.518,7.788q.688,9.191,1.046,18.383A515.493,515.493,0,0,1,204.148,86.542Z"
                        transform="translate(-64.167)"
                        fill="#e7ecf6"
                      />
                      <path
                        id="Path_1233"
                        data-name="Path 1233"
                        d="M160.825,125.872a8.45,8.45,0,0,1-.906,3.227,481.24,481.24,0,0,1-72.445-.321,8.427,8.427,0,0,1-.752-2.906,515.105,515.105,0,0,1-.939-61.309q.25-5.7.63-11.409.145-2.2.309-4.4a8.484,8.484,0,0,1,7.517-7.789,267.1,267.1,0,0,1,59.066,0,8.482,8.482,0,0,1,7.52,7.789q.687,9.192,1.046,18.384.247,6.256.339,12.507Q162.553,102.76,160.825,125.872Z"
                        transform="translate(-31.27 -29.864)"
                        fill="#f9f6f6"
                      />
                      <path
                        id="Path_1234"
                        data-name="Path 1234"
                        d="M160.825,201.015a8.45,8.45,0,0,1-.906,3.227,481.242,481.242,0,0,1-72.445-.321,8.427,8.427,0,0,1-.752-2.906,515.105,515.105,0,0,1-.939-61.309,114.287,114.287,0,0,1,35.311-.087,7.527,7.527,0,0,1,6.262,6.576c.05.433.1.866.144,1.3a7.533,7.533,0,0,0,7.527,6.718q13.592-.064,27.181.578Q162.553,177.9,160.825,201.015Z"
                        transform="translate(-31.27 -105.008)"
                        fill="#e7ecf6"
                      />
                      <path
                        id="Path_1235"
                        data-name="Path 1235"
                        d="M193.783,123.28H145.448a1.859,1.859,0,0,1,0-3.719h48.335a1.859,1.859,0,1,1,0,3.719Z"
                        transform="translate(-75.546 -90.786)"
                        fill="#9dc6fb"
                      />
                      <path
                        id="Path_1236"
                        data-name="Path 1236"
                        d="M228.361,167.655H190.985a1.859,1.859,0,0,1,0-3.719h37.376a1.859,1.859,0,1,1,0,3.719Z"
                        transform="translate(-110.123 -124.481)"
                        fill="#9dc6fb"
                      />
                      <path
                        id="Path_1237"
                        data-name="Path 1237"
                        d="M145.233,222.147l0,0q-.419,5.643-1.049,11.284a7.53,7.53,0,0,1-6.894,6.658,525.028,525.028,0,0,1-84.379,0,7.552,7.552,0,0,1-6.9-6.7,309.475,309.475,0,0,1,.058-69.186,7.538,7.538,0,0,1,6.4-6.6,114.511,114.511,0,0,1,35.637-.133,7.525,7.525,0,0,1,6.264,6.576q.074.649.144,1.3a7.535,7.535,0,0,0,7.528,6.719q18.222-.086,36.443,1.094a7.55,7.55,0,0,1,7.044,7.081,308.745,308.745,0,0,1-.291,41.908Z"
                        transform="translate(0 -118.562)"
                        fill="#e7a561"
                      />
                      <path
                        id="Path_1238"
                        data-name="Path 1238"
                        d="M58.367,242.558q-2.726-.191-5.455-.412a7.555,7.555,0,0,1-6.9-6.7,309.418,309.418,0,0,1,.057-69.186,7.537,7.537,0,0,1,6.4-6.6q3.312-.487,6.513-.812a7.823,7.823,0,0,0-4.087,6.015,321.846,321.846,0,0,0-.059,71.964A7.86,7.86,0,0,0,58.367,242.558Z"
                        transform="translate(-0.003 -120.616)"
                        fill="#e49542"
                      />
                      <g
                        id="Group_1013"
                        data-name="Group 1013"
                        transform="translate(77.638 88.93)"
                      >
                        <g
                          id="Group_1010"
                          data-name="Group 1010"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_1239"
                            data-name="Path 1239"
                            d="M188.857,395.024a6.386,6.386,0,0,1-2.656-.608,8.018,8.018,0,0,1-2.2-1.494,1.86,1.86,0,0,1,2.629-2.631c.09.087,1.686,1.594,3.224.74a2.554,2.554,0,0,0,1.285-2.247V371.36a1.859,1.859,0,0,1,3.719,0v17.423a6.275,6.275,0,0,1-3.2,5.5A5.71,5.71,0,0,1,188.857,395.024Z"
                            transform="translate(-183.457 -369.501)"
                            fill="#365e7d"
                          />
                        </g>
                        <g
                          id="Group_1012"
                          data-name="Group 1012"
                          transform="translate(15.413 0)"
                        >
                          <g
                            id="Group_1011"
                            data-name="Group 1011"
                            transform="translate(28.632)"
                          >
                            <path
                              id="Path_1240"
                              data-name="Path 1240"
                              d="M368.319,383.275a1.86,1.86,0,0,1-1.86-1.859V371.361a1.859,1.859,0,0,1,1.859-1.859h6.332a6.876,6.876,0,0,1,0,13.751c-1.372,0-6.324.022-6.324.022Zm1.859-10.054v6.327c1.559-.006,3.653-.014,4.473-.014a3.156,3.156,0,0,0,0-6.313Z"
                              transform="translate(-366.459 -369.502)"
                              fill="#365e7d"
                            />
                            <path
                              id="Path_1241"
                              data-name="Path 1241"
                              d="M368.319,426.689a1.86,1.86,0,0,1-1.86-1.859V413.068a1.859,1.859,0,0,1,1.859-1.859h7.438a7.727,7.727,0,0,1,0,15.454c-1.605,0-7.429.026-7.43.026h-.008Zm1.859-11.761v8.034c1.856-.008,4.566-.018,5.578-.018a4.008,4.008,0,0,0,0-8.016h-5.578Z"
                              transform="translate(-366.459 -401.171)"
                              fill="#365e7d"
                            />
                          </g>
                          <path
                            id="Path_1242"
                            data-name="Path 1242"
                            d="M260.255,395.02a12.759,12.759,0,1,1,12.759-12.759A12.774,12.774,0,0,1,260.255,395.02Zm0-21.8a9.04,9.04,0,1,0,9.04,9.04A9.05,9.05,0,0,0,260.255,373.221Z"
                            transform="translate(-247.496 -369.502)"
                            fill="#365e7d"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Your job
                  </div>
                </div>
                <div className="middle__panel__content__card">
                  <svg
                    id="_3145438"
                    data-name="3145438"
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 122.508 122.508"
                  >
                    <g id="Group_1024" data-name="Group 1024">
                      <g id="Group_1022" data-name="Group 1022">
                        <path
                          id="Path_1243"
                          data-name="Path 1243"
                          d="M15.721,0A15.738,15.738,0,0,0,0,15.721v89.395l21.812-2.286,4.405-45.916L21.812,0Z"
                          fill="#ca7a33"
                        />
                        <g
                          id="Group_1014"
                          data-name="Group 1014"
                          transform="translate(21.812)"
                        >
                          <path
                            id="Path_1244"
                            data-name="Path 1244"
                            d="M91.159,0V95.966l38.268-4.011L137.1,49.409,129.427,0Z"
                            transform="translate(-91.159)"
                            fill="#b1532b"
                          />
                          <path
                            id="Path_1245"
                            data-name="Path 1245"
                            d="M287.482,0H251.094V92.5l36.388-3.787Z"
                            transform="translate(-212.826)"
                            fill="#983424"
                          />
                        </g>
                        <g
                          id="Group_1017"
                          data-name="Group 1017"
                          transform="translate(0 88.716)"
                        >
                          <g
                            id="Group_1015"
                            data-name="Group 1015"
                            transform="translate(6.558 3.787)"
                          >
                            <path
                              id="Path_1246"
                              data-name="Path 1246"
                              d="M40.149,386.6a12.743,12.743,0,0,0-12.743,12.743c0,.122.006.244.009.365a12.741,12.741,0,0,0,12.734,12.378H80.928V386.6Z"
                              transform="translate(-27.406 -386.601)"
                              fill="#f7fcff"
                            />
                            <path
                              id="Path_1247"
                              data-name="Path 1247"
                              d="M277.288,399.72s0-.007,0-.011c.006-5.351,4.732-9.7,10.194-9.7L281.2,386.6H251.094v25.486h31.925l4.464-2.665C282.017,409.422,277.288,405.076,277.288,399.72Z"
                              transform="translate(-197.572 -386.601)"
                              fill="#ecf3fb"
                            />
                          </g>
                          <g id="Group_1016" data-name="Group 1016">
                            <path
                              id="Path_1248"
                              data-name="Path 1248"
                              d="M16.9,377.967h4.916l2.342-3.865-2.342-3.329H16.9a16.9,16.9,0,1,0,0,33.792h4.916l3.149-3.6-3.149-3.6H16.9a9.7,9.7,0,0,1,0-19.4Z"
                              transform="translate(0 -370.773)"
                              fill="#b1532b"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_1019"
                          data-name="Group 1019"
                          transform="translate(21.812 88.716)"
                        >
                          <path
                            id="Path_1249"
                            data-name="Path 1249"
                            d="M91.159,433.28h38.268l3.546-3.534-3.546-3.661H91.159Z"
                            transform="translate(-91.159 -412.851)"
                            fill="#ecf3fb"
                          />
                          <g id="Group_1018" data-name="Group 1018">
                            <path
                              id="Path_1250"
                              data-name="Path 1250"
                              d="M91.159,370.772v7.194h38.268l3.164-3.407-3.164-3.787Z"
                              transform="translate(-91.159 -370.772)"
                              fill="#983424"
                            />
                            <path
                              id="Path_1251"
                              data-name="Path 1251"
                              d="M91.159,489.129h38.268l4.1-3.086-4.1-4.1-38.268-.005Z"
                              transform="translate(-91.159 -455.337)"
                              fill="#983424"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_1252"
                          data-name="Path 1252"
                          d="M251.094,370.772h36.389v7.194H251.094Z"
                          transform="translate(-191.014 -282.056)"
                          fill="#7e2b1b"
                        />
                        <path
                          id="Path_1253"
                          data-name="Path 1253"
                          d="M277.966,433.281a9.485,9.485,0,0,1-.678-3.523s0-.007,0-.011a9.49,9.49,0,0,1,.737-3.661H251.094v7.194h26.872Z"
                          transform="translate(-191.014 -324.136)"
                          fill="#e0e6f5"
                        />
                        <g
                          id="Group_1020"
                          data-name="Group 1020"
                          transform="translate(39.99 21.097)"
                        >
                          <path
                            id="Path_1254"
                            data-name="Path 1254"
                            d="M200.984,88.171v7.165h11.99l3.546-3.583-3.546-3.582Z"
                            transform="translate(-192.884 -88.171)"
                            fill="#983424"
                          />
                          <path
                            id="Path_1255"
                            data-name="Path 1255"
                            d="M167.13,153.181v7.165h20.09l4.1-3.583-4.1-3.582Z"
                            transform="translate(-167.13 -137.626)"
                            fill="#983424"
                          />
                        </g>
                        <g
                          id="Group_1021"
                          data-name="Group 1021"
                          transform="translate(60.08 21.097)"
                        >
                          <path
                            id="Path_1256"
                            data-name="Path 1256"
                            d="M251.094,88.171h11.99v7.165h-11.99Z"
                            transform="translate(-251.094 -88.171)"
                            fill="#7e2b1b"
                          />
                          <path
                            id="Path_1257"
                            data-name="Path 1257"
                            d="M251.094,153.181h20.09v7.165h-20.09Z"
                            transform="translate(-251.094 -137.626)"
                            fill="#7e2b1b"
                          />
                        </g>
                      </g>
                      <path
                        id="Path_1258"
                        data-name="Path 1258"
                        d="M287.482,489.145v-7.184l-36.388,0v7.188Z"
                        transform="translate(-191.014 -366.638)"
                        fill="#7e2b1b"
                      />
                      <g
                        id="Group_1023"
                        data-name="Group 1023"
                        transform="translate(70.452 70.452)"
                      >
                        <path
                          id="Path_1259"
                          data-name="Path 1259"
                          d="M294.441,320.47A26.057,26.057,0,0,0,320.469,346.5l4.378-24.574-4.378-27.482A26.057,26.057,0,0,0,294.441,320.47Z"
                          transform="translate(-294.441 -294.442)"
                          fill="#fdd752"
                        />
                        <path
                          id="Path_1260"
                          data-name="Path 1260"
                          d="M403.221,294.442V346.5a26.028,26.028,0,0,0,0-52.056Z"
                          transform="translate(-377.193 -294.442)"
                          fill="#f8bd3f"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_1025"
                      data-name="Group 1025"
                      transform="translate(92.867 92.813)"
                    >
                      <path
                        id="Path_1261"
                        data-name="Path 1261"
                        d="M388.123,387.894v19.4h3.6l1.8-10.3-1.8-9.1Z"
                        transform="translate(-388.123 -387.894)"
                        fill="#f7fcff"
                      />
                    </g>
                    <path
                      id="Path_1262"
                      data-name="Path 1262"
                      d="M403.173,387.894h3.6v19.4h-3.6Z"
                      transform="translate(-306.705 -295.082)"
                      fill="#ecf3fb"
                    />
                    <g
                      id="Group_1026"
                      data-name="Group 1026"
                      transform="translate(92.867 82.006)"
                    >
                      <path
                        id="Path_1263"
                        data-name="Path 1263"
                        d="M388.123,346.329a3.6,3.6,0,0,0,3.6,3.6l.732-3.6-.732-3.6A3.6,3.6,0,0,0,388.123,346.329Z"
                        transform="translate(-388.123 -342.728)"
                        fill="#f7fcff"
                      />
                      <path
                        id="Path_1264"
                        data-name="Path 1264"
                        d="M403.173,342.728v7.2a3.6,3.6,0,0,0,0-7.2Z"
                        transform="translate(-399.572 -342.728)"
                        fill="#ecf3fb"
                      />
                    </g>
                  </svg>
                  <div className="middle__panel__content__card__heading">
                    Guidance
                  </div>
                </div>
                <div className="middle__panel__content__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="middle__panel__content__card__img"
                    viewBox="0 0 131.806 131.81"
                  >
                    <g
                      id="_4394641"
                      data-name="4394641"
                      transform="translate(-0.007)"
                    >
                      <g
                        id="Group_1027"
                        data-name="Group 1027"
                        transform="translate(0.007 30.729)"
                      >
                        <path
                          id="Path_1265"
                          data-name="Path 1265"
                          d="M29.178,144.436h6.2a1.18,1.18,0,0,0,1.153-1.863L20.107,120.34a2.21,2.21,0,0,0-1.73-.974,2.212,2.212,0,0,0-1.738.974L.227,142.574a1.18,1.18,0,0,0,1.153,1.863h6.2v15.158c0,19.846,11.767,26.479,20.548,29.539a.8.8,0,0,0,1.054-.753Z"
                          transform="translate(-0.007 -119.365)"
                          fill="#a7e9a6"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1028"
                        data-name="Group 1028"
                        transform="translate(95.074 31.041)"
                      >
                        <path
                          id="Path_1266"
                          data-name="Path 1266"
                          d="M376.851,165.309h-6.2a1.184,1.184,0,0,0-1.153,1.87l16.412,22.226a2.03,2.03,0,0,0,3.468,0l16.42-22.226a1.184,1.184,0,0,0-1.153-1.87h-6.2V150.151c0-19.846-11.773-26.479-20.549-29.532a.8.8,0,0,0-1.053.753v43.937Z"
                          transform="translate(-369.282 -120.574)"
                          fill="#a7e9a6"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1029"
                        data-name="Group 1029"
                        transform="translate(30.852 95.069)"
                      >
                        <path
                          id="Path_1267"
                          data-name="Path 1267"
                          d="M144.893,376.854v-6.2a1.184,1.184,0,0,0-1.87-1.153L120.8,385.918a2.03,2.03,0,0,0,0,3.468l22.226,16.42a1.184,1.184,0,0,0,1.87-1.153v-6.2H160.05c19.845,0,26.478-11.774,29.531-20.549a.8.8,0,0,0-.753-1.053H144.893Z"
                          transform="translate(-119.821 -369.285)"
                          fill="#a7e9a6"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1030"
                        data-name="Group 1030"
                        transform="translate(31.157 0)"
                      >
                        <path
                          id="Path_1268"
                          data-name="Path 1268"
                          d="M150.587,7.569c-19.846,0-26.478,11.767-29.538,20.549a.8.8,0,0,0,.753,1.054h43.943v6.2a1.18,1.18,0,0,0,1.863,1.153L189.84,20.1a2.03,2.03,0,0,0,0-3.468L167.607.22a1.18,1.18,0,0,0-1.863,1.153v6.2Z"
                          transform="translate(-121.004 0)"
                          fill="#a7e9a6"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1031"
                        data-name="Group 1031"
                        transform="translate(57.701 0)"
                      >
                        <path
                          id="Path_1269"
                          data-name="Path 1269"
                          d="M224.11,7.663c6.772,4.115,10.684,11.253,8.907,21.509h9.289v6.2a1.18,1.18,0,0,0,1.863,1.153L266.4,20.1a2.03,2.03,0,0,0,0-3.468L244.169.22a1.18,1.18,0,0,0-1.863,1.153v6.2H227.149q-1.566,0-3.039.093Z"
                          transform="translate(-224.11 0)"
                          fill="#7fdbae"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1032"
                        data-name="Group 1032"
                        transform="translate(64.94 102.638)"
                      >
                        <path
                          id="Path_1270"
                          data-name="Path 1270"
                          d="M257.048,398.686c1.27,12.235-.764,18.852-4.816,21.6h6.141c19.845,0,26.478-11.774,29.531-20.549a.8.8,0,0,0-.753-1.053Z"
                          transform="translate(-252.232 -398.686)"
                          fill="#7fdbae"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1033"
                        data-name="Group 1033"
                        transform="translate(102.642 31.041)"
                      >
                        <path
                          id="Path_1271"
                          data-name="Path 1271"
                          d="M398.681,124.979c7.357,3.959,14.6,11.394,14.6,26.964v14.924a2.977,2.977,0,0,0,2.977,2.977,1.182,1.182,0,0,1,1.153,1.87l-11.565,15.111,1.9,2.58a2.03,2.03,0,0,0,3.468,0l16.42-22.226a1.184,1.184,0,0,0-1.153-1.87h-6.2V150.151c0-19.846-11.773-26.479-20.549-29.532a.8.8,0,0,0-1.053.753v3.607Z"
                          transform="translate(-398.681 -120.574)"
                          fill="#7fdbae"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_1034"
                        data-name="Group 1034"
                        transform="translate(14.761 30.729)"
                      >
                        <path
                          id="Path_1272"
                          data-name="Path 1272"
                          d="M63.575,142.784V185.9a39.3,39.3,0,0,0,7.1,3.227.8.8,0,0,0,1.055-.753V144.436h6.2a1.18,1.18,0,0,0,1.153-1.863L62.663,120.34a2.03,2.03,0,0,0-3.468,0l-1.878,2.541,11.744,16.358a1.184,1.184,0,0,1-1.153,1.87H64.845c-1.185,0-1.27.623-1.27,1.675Z"
                          transform="translate(-57.317 -119.365)"
                          fill="#7fdbae"
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
                    Register Directly
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
                    placeholder="Email Address"
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
                left: "-300px",
                top: "-50px",
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
                stroke-width="120"
              >
                <rect width="542.924" height="542.924" rx="40" stroke="none" />
                <rect
                  x="60"
                  y="60"
                  width="422.924"
                  height="422.924"
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
                <div className="clients__panel__content__card"></div>
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
