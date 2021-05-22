import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import FieldCard from "../components/FieldCard";
import "./JobDetails.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jumbotron__contact__background__img from "../assets/jumbotron__contact__background__img.png";
import contact_about_section_content_right_header_img from "../assets/contact_about_section_content_right_header_img.png";
import contact_form_section_content_img from "../assets/contact_form_section_content_img.png";

class JobDetails extends React.Component {
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
        <div className="jumbotron__contact">
          <img
            src={jumbotron__contact__background__img}
            alt="jumbotron__contact-background-img"
            className="jumbotron__contact-background-img"
          />
          <div className="jumbotron__contact-content">
            <div className="jumbotron__contact-content-left">
              <div className="jumbotron__contact-content-left-heading">
                Junior System Engineer Werktuigbouwkunde
              </div>
              <div className="jumbotron__contact-content-left-row">
                <div className="jumbotron__contact-content-left-row-entity">
                  <svg
                    id="Group_976"
                    data-name="Group 976"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.978"
                    height="22.708"
                    viewBox="0 0 16.978 22.708"
                  >
                    <path
                      id="Path_1187"
                      data-name="Path 1187"
                      d="M841.492,50.845a6.426,6.426,0,0,0-.032,3.028,1.8,1.8,0,0,1-.628,1.625,2.928,2.928,0,0,0-.915,1.6,1.922,1.922,0,0,1-1.5,1.547,3.537,3.537,0,0,0-1.56.869,1.689,1.689,0,0,1-2.032.311,2.3,2.3,0,0,0-2.179,0,1.684,1.684,0,0,1-2.087-.365,2.7,2.7,0,0,0-1.352-.754,2.144,2.144,0,0,1-1.726-1.822,2.044,2.044,0,0,0-.678-1.207,2.342,2.342,0,0,1-.72-2.5,3.619,3.619,0,0,0,0-1.708,2.141,2.141,0,0,1,.673-2.348,2.744,2.744,0,0,0,.8-1.5,2.01,2.01,0,0,1,1.563-1.582,2.865,2.865,0,0,0,1.639-.984,1.7,1.7,0,0,1,1.857-.545,3.684,3.684,0,0,0,2.229,0,1.744,1.744,0,0,1,1.916.59,2.6,2.6,0,0,0,1.5.911,2.069,2.069,0,0,1,1.667,1.674,3.015,3.015,0,0,0,.939,1.6A1.774,1.774,0,0,1,841.492,50.845ZM837.85,52.27a4.242,4.242,0,0,0-4.075-4.279,4.4,4.4,0,0,0-4.2,4.2,4.275,4.275,0,0,0,4.117,4.249A4.062,4.062,0,0,0,837.85,52.27Z"
                      transform="translate(-825.251 -44.427)"
                      fill="#ee7a27"
                    />
                    <path
                      id="Path_1188"
                      data-name="Path 1188"
                      d="M878.469,141.933a3.43,3.43,0,0,0,3.784-.73,6.448,6.448,0,0,1,1.928-.82c.275-.1.341.184.417.366.577,1.4,1.16,2.8,1.711,4.217.269.689-.141,1.183-.888,1.129-.026,0-.051-.013-.077-.017a3.046,3.046,0,0,0-3.232,1.14c-.843,1.087-1.292.933-1.817-.367-.578-1.431-1.17-2.856-1.753-4.284A.694.694,0,0,1,878.469,141.933Z"
                      transform="translate(-869.414 -125.232)"
                      fill="#ee7a27"
                    />
                    <path
                      id="Path_1189"
                      data-name="Path 1189"
                      d="M829.427,142.244c-.663,1.617-1.243,3.036-1.826,4.454a12.139,12.139,0,0,1-.5,1.151.623.623,0,0,1-1.088.2,2.478,2.478,0,0,1-.5-.5c-.738-1.186-1.855-1.272-3.079-1.126-1.008.12-1.353-.367-.966-1.305.519-1.257,1.053-2.509,1.536-3.779.2-.513.346-.675.944-.427a11.149,11.149,0,0,1,2.33,1.235A3.187,3.187,0,0,0,829.427,142.244Z"
                      transform="translate(-821.317 -125.599)"
                      fill="#ee7a27"
                    />
                  </svg>
                  MBO/ HBO
                </div>
                <div className="jumbotron__contact-content-left-row-entity">
                  <svg
                    id="pin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.869"
                    height="23.078"
                    viewBox="0 0 15.869 23.078"
                  >
                    <path
                      id="Path_1190"
                      data-name="Path 1190"
                      d="M94.734,3.951A7.831,7.831,0,0,0,88.08,0c-.118,0-.237,0-.355,0a7.832,7.832,0,0,0-6.655,3.95,8.034,8.034,0,0,0-.1,7.938l5.723,10.475.008.014a1.391,1.391,0,0,0,2.413,0l.008-.014L94.839,11.89a8.034,8.034,0,0,0-.1-7.938ZM87.9,10.457a3.245,3.245,0,1,1,3.245-3.245A3.249,3.249,0,0,1,87.9,10.457Z"
                      transform="translate(-79.968 0)"
                      fill="#ee7a27"
                    />
                  </svg>
                  Location
                </div>
              </div>
              <div className="jumbotron__contact-content-left-info">
                Geplaatst op 27 november 2020 - Sluit op 27 december 2020
              </div>
            </div>
            <div className="jumbotron__contact-content-right">
              <div className="jumbotron__contact-content-right-container">
                <div className="jumbotron__contact-content-right-container-header">
                  <button className="jumbotron__contact-content-right-container-header-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.249"
                      height="25"
                      viewBox="0 0 29.249 29"
                    >
                      <g
                        id="Group_985"
                        data-name="Group 985"
                        transform="translate(0 0.434)"
                      >
                        <g
                          id="Rectangle_775"
                          data-name="Rectangle 775"
                          transform="translate(11.125 -0.434)"
                          fill="#707070"
                          stroke="#707070"
                          stroke-width="1"
                        >
                          <rect width="7" height="29" stroke="none" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="6"
                            height="28"
                            fill="none"
                          />
                        </g>
                        <g
                          id="Rectangle_776"
                          data-name="Rectangle 776"
                          transform="translate(29.249 10.78) rotate(90)"
                          fill="#707070"
                          stroke="#707070"
                          stroke-width="1"
                        >
                          <rect width="5.958" height="29.249" stroke="none" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="4.958"
                            height="28.249"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <div className="jumbotron__contact-content-right-container-header-right">
                    <div className="jumbotron__contact-content-right-container-header-right-heading">
                      Lorem, ipsum.
                    </div>
                    <div className="jumbotron__contact-content-right-container-header-right-info">
                      Deel jouw cv
                    </div>
                  </div>
                </div>
                <div className="jumbotron__contact-content-right-container-row">
                  <div className="jumbotron__contact-content-right-container-row-info">
                    Als je op verstuur klikt, ga je akkoord met de voorwaarden
                  </div>
                  <button className="jumbotron__contact-content-right-container-row-btn">
                    Verstuur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__about-section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "-600px", left: "-500px" }}
            width="887"
            height="887"
            viewBox="0 0 887 887"
          >
            <g
              id="Ellipse_12"
              data-name="Ellipse 12"
              fill="#fbfbfb"
              stroke="#ee7a27"
              stroke-width="150"
              opacity="0.05"
            >
              <circle cx="443.5" cy="443.5" r="443.5" stroke="none" />
              <circle cx="443.5" cy="443.5" r="368.5" fill="none" />
            </g>
          </svg>
          <div className="contact__about-section-content">
            <div className="contact__about-section-content-left">
              <div className="contact__about-section-content-left-card">
                <div className="contact__about-section-content-left-card-heading">
                  <div className="contact__about-section-content-left-card-heading-icon"></div>
                  More about the company
                </div>
                <div className="contact__about-section-content-left-card-info">
                  Location: Rotterdam
                </div>
                <div className="contact__about-section-content-left-card-info">
                  region This leading machine builder is responsible for
                  designing, developing, building and installing high-quality
                  machines all over the world. With their expertise in the food
                  industry, they are able to respond seamlessly to the needs of
                  their customers. Within this young progressive company there
                  is an open culture and a lot of investment in the employees.
                </div>
              </div>
              <div className="contact__about-section-content-left-card">
                <div className="contact__about-section-content-left-card-heading">
                  <div className="contact__about-section-content-left-card-heading-icon"></div>
                  Job Description
                </div>
                <div className="contact__about-section-content-left-card-info">
                  A completed HBO or WO degree in Mechanical Engineering or
                  related You have (internship) experience in a similar position
                  to System Engineer You have experience in the mechanical
                  engineering industry preferably as a System Engineer
                </div>
                <div className="contact__about-section-content-left-card-info">
                  region This leading machine builder is responsible for
                  designing, developing, building and installing high-quality
                  machines all over the world. With their expertise in the food
                  industry, they are able to respond seamlessly to the needs of
                  their customers. Within this young progressive company there
                  is an open culture and a lot of investment in the employees.
                </div>
              </div>
            </div>
            <div className="contact__about-section-content-right">
              <div className="contact__about-section-content-right-header">
                <div className="contact__about-section-content-right-header-heading">
                  Advisor Mechanical Engineers
                </div>
                <img
                  src={contact_about_section_content_right_header_img}
                  alt="contact__about-section-content-right-header-img"
                  className="contact__about-section-content-right-header-img"
                />
              </div>
              <div className="contact__about-section-content-right-link">
                <svg
                  id="envelope"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.416"
                  height="18.312"
                  viewBox="0 0 24.416 18.312"
                >
                  <g
                    id="Group_989"
                    data-name="Group 989"
                    transform="translate(0 0)"
                  >
                    <g id="Group_988" data-name="Group 988">
                      <path
                        id="Path_1194"
                        data-name="Path 1194"
                        d="M7.094,65.486c3.351,2.838,9.231,7.831,10.959,9.387a1.021,1.021,0,0,0,1.477,0c1.73-1.558,7.61-6.551,10.961-9.389a.508.508,0,0,0,.072-.7,2.02,2.02,0,0,0-1.6-.784H8.619a2.02,2.02,0,0,0-1.6.784A.508.508,0,0,0,7.094,65.486Z"
                        transform="translate(-6.584 -64)"
                        fill="#ee7a27"
                      />
                      <path
                        id="Path_1195"
                        data-name="Path 1195"
                        d="M24.121,126.459a.506.506,0,0,0-.542.074c-3.716,3.15-8.459,7.188-9.951,8.533a2.06,2.06,0,0,1-2.839,0C9.2,133.631,3.871,129.1.837,126.532A.509.509,0,0,0,0,126.92v12.792a2.037,2.037,0,0,0,2.035,2.035H22.381a2.037,2.037,0,0,0,2.035-2.035V126.92A.508.508,0,0,0,24.121,126.459Z"
                        transform="translate(0 -123.435)"
                        fill="#ee7a27"
                      />
                    </g>
                  </g>
                </svg>
                abcd@gmail.com
              </div>
              <div className="contact__about-section-content-right-link">
                <svg
                  id="phone-call"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.443"
                  height="24.494"
                  viewBox="0 0 24.443 24.494"
                >
                  <g
                    id="Group_987"
                    data-name="Group 987"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_1193"
                      data-name="Path 1193"
                      d="M24.341,17.976l-3.418-3.418a2.274,2.274,0,0,0-3.784.855,2.326,2.326,0,0,1-2.686,1.465c-2.442-.61-5.738-3.784-6.348-6.348A2.213,2.213,0,0,1,9.569,7.844a2.274,2.274,0,0,0,.855-3.784L7.006.641a2.438,2.438,0,0,0-3.3,0L1.39,2.96C-.93,5.4,1.634,11.872,7.372,17.61s12.208,8.424,14.649,5.982l2.32-2.32A2.438,2.438,0,0,0,24.341,17.976Z"
                      transform="translate(-0.539 0)"
                      fill="#0672a0"
                    />
                  </g>
                </svg>
                3454564564554
              </div>
              <div className="contact__about-section-content-right-link">
                <svg
                  id="whatsapp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.886"
                  height="24.886"
                  viewBox="0 0 24.886 24.886"
                >
                  <path
                    id="Path_1514"
                    data-name="Path 1514"
                    d="M12.446,0H12.44A12.435,12.435,0,0,0,2.369,19.736L.818,24.358,5.6,22.83A12.441,12.441,0,1,0,12.446,0Z"
                    fill="#4caf50"
                  />
                  <path
                    id="Path_1515"
                    data-name="Path 1515"
                    d="M121.737,128.968a3.511,3.511,0,0,1-2.442,1.756c-.65.138-1.5.249-4.358-.936-3.657-1.515-6.011-5.231-6.195-5.472a7.107,7.107,0,0,1-1.478-3.753,3.972,3.972,0,0,1,1.272-3.028,1.808,1.808,0,0,1,1.272-.446c.154,0,.292.008.417.014.366.016.549.037.79.614.3.723,1.031,2.509,1.118,2.692a.741.741,0,0,1,.053.673,2.15,2.15,0,0,1-.4.571c-.184.212-.358.373-.541.6-.168.2-.358.409-.146.775a11.044,11.044,0,0,0,2.019,2.509,9.148,9.148,0,0,0,2.918,1.8.787.787,0,0,0,.877-.138,15.054,15.054,0,0,0,.972-1.288.694.694,0,0,1,.893-.271c.336.117,2.114,1,2.479,1.177s.607.271.7.425A3.1,3.1,0,0,1,121.737,128.968Z"
                    transform="translate(-102.05 -111.397)"
                    fill="#fafafa"
                  />
                </svg>
                WhatsApp
              </div>
              <div className="contact__about-section-content-right-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.886"
                  height="22.886"
                  viewBox="0 0 22.886 22.886"
                >
                  <path
                    id="linkedin"
                    d="M20.816,0H2.07A2.07,2.07,0,0,0,0,2.07V20.815a2.07,2.07,0,0,0,2.07,2.07H20.815a2.07,2.07,0,0,0,2.07-2.07V2.07A2.07,2.07,0,0,0,20.816,0ZM7.082,19.761a.6.6,0,0,1-.6.6H3.915a.6.6,0,0,1-.6-.6V9.011a.6.6,0,0,1,.6-.6H6.479a.6.6,0,0,1,.6.6ZM5.2,7.395A2.436,2.436,0,1,1,7.633,4.959,2.436,2.436,0,0,1,5.2,7.395ZM20.484,19.81a.554.554,0,0,1-.554.554H17.178a.554.554,0,0,1-.554-.554V14.767c0-.752.221-3.3-1.966-3.3-1.7,0-2.04,1.741-2.109,2.523V19.81a.554.554,0,0,1-.554.554H9.334a.554.554,0,0,1-.554-.554V8.962a.554.554,0,0,1,.554-.554H12a.554.554,0,0,1,.554.554V9.9A3.778,3.778,0,0,1,16.1,8.228c4.407,0,4.381,4.117,4.381,6.379v5.2Z"
                    fill="#019ad3"
                  />
                </svg>
                Linkedin
              </div>
            </div>
          </div>
        </div>
        <div className="contact__requirements-section">
          <div className="contact__requirements-section-content">
            <div className="contact__requirements-section-content-heading">
              Job Requirement
            </div>
            <div className="contact__requirements-section-content-info">
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
        <div className="contact__form-section">
          <img
            src={contact_form_section_content_img}
            alt="contact_form_section_content_img"
            className="contact__form-section-content-img"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="463.488"
            height="463.489"
            viewBox="0 0 1063.488 1063.489"
            style={{
              position: "absolute",
              top: "-250px",
              right: "-220px",
              zIndex: 2,
            }}
          >
            <g
              id="Rectangle_795"
              data-name="Rectangle 795"
              transform="translate(531.744) rotate(45)"
              fill="none"
              stroke="#f8f8f8"
              stroke-width="100"
            >
              <rect width="602" height="602" rx="40" stroke="none" />
              <rect
                x="75"
                y="75"
                width="602"
                height="602"
                rx="40"
                fill="none"
              />
            </g>
          </svg>
          <div className="contact__form-section-content">
            <div className="contact__form-section-content-left">
              <div className="contact__form-section-content-left-sub-heading">
                Apply now
              </div>
              <div className="contact__form-section-content-left-heading">
                Junior System Engineer Mechanical Engineering
              </div>
              <ul className="contact__form-section-content-left-list">
                <li className="contact__form-section-content-left-list-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40.5"
                    height="19"
                    viewBox="0 0 40.5 19"
                  >
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      x2="23"
                      transform="translate(0 10.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1"
                    />
                    <circle
                      id="Ellipse_10"
                      data-name="Ellipse 10"
                      cx="9.5"
                      cy="9.5"
                      r="9.5"
                      transform="translate(21.5)"
                      fill="#fff"
                    />
                  </svg>
                  Your resume
                </li>
                <li className="contact__form-section-content-left-list-item">
                  Your ambitions
                </li>
                <li className="contact__form-section-content-left-list-item">
                  Your selection of conversations
                </li>
                <li className="contact__form-section-content-left-list-item">
                  Your job choice
                </li>
              </ul>
            </div>
            <form className="contact__form-section-content-form">
              <div className="contact__form-section-content-form-row">
                <button
                  className="contact__form-section-content-form-upload-btn"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.782"
                    height="15"
                    viewBox="0 0 23.782 23"
                  >
                    <g
                      id="Group_990"
                      data-name="Group 990"
                      transform="translate(0 0)"
                    >
                      <rect
                        id="Rectangle_775"
                        data-name="Rectangle 775"
                        width="6"
                        height="23"
                        transform="translate(8.94 0)"
                        fill="#fff"
                      />
                      <rect
                        id="Rectangle_776"
                        data-name="Rectangle 776"
                        width="4.844"
                        height="23.782"
                        transform="translate(23.782 9.055) rotate(90)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </button>
                <div className="contact__form-section-content-form-row-heading">
                  Upload Your CV
                </div>
              </div>
              <input
                type="text"
                placeholder="Important"
                className="contact__form-section-content-input"
              />
              <input
                type="text"
                placeholder="Surname"
                className="contact__form-section-content-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact__form-section-content-input"
              />
              <input
                type="phone"
                placeholder="Phone"
                className="contact__form-section-content-input"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Message"
                className="contact__form-section-content-textarea"
              ></textarea>
              <Button
                variant="dark"
                className="contact__form-section-content-btn"
                type="submit"
              >
                Submit
              </Button>
              <div className="contact__form-section-content-slogan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.21"
                  height="16.28"
                  viewBox="0 0 12.21 16.28"
                >
                  <path
                    id="padlock"
                    d="M13.684,6.1h-.509V4.07a4.07,4.07,0,0,0-8.14,0V6.1H4.526A1.528,1.528,0,0,0,3,7.631v7.122A1.528,1.528,0,0,0,4.526,16.28h9.157a1.528,1.528,0,0,0,1.526-1.526V7.631A1.528,1.528,0,0,0,13.684,6.1ZM6.392,4.07a2.713,2.713,0,1,1,5.427,0V6.1H6.392Zm3.392,7.273v1.545a.678.678,0,1,1-1.357,0V11.343a1.357,1.357,0,1,1,1.357,0Z"
                    transform="translate(-3)"
                    fill="#009bd1"
                  />
                </svg>
                We handle your data confidentially
              </div>
            </form>
          </div>
        </div>
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
          <Row className="field__card__heading">See all similar jobs</Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
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
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default JobDetails;
