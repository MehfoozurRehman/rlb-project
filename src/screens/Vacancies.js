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
import "./Vacancies.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import get__in__touch__panel__bg from "../assets/get__in__touch__panel__bg.png";
import jumbotron__vacancies__background__img from "../assets/jumbotron__vacancies__background__img.png";

function RangeInput() {
  const [value, onChange] = React.useState(1);
  return (
    <div className="search__result__container__vacancies-filter-panel-input-range">
      <input
        type="range"
        className="search__result__container__vacancies-filter-panel-input-range-input"
        min="1"
        max="30"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <div className="search__result__container__vacancies-filter-panel-input-range-buble">
        {value} km
      </div>
    </div>
  );
}
function ResultsCard({ name, bank, location, price }) {
  return (
    <div className="search__result__container__vacancies-results-panel-card">
      <div className="search__result__container__vacancies-results-panel-card-heading">
        {name}
      </div>
      <div className="search__result__container__vacancies-results-panel-card-content">
        <div className="search__result__container__vacancies-results-panel-card-content-left">
          <div className="search__result__container__vacancies-results-panel-card-info-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.978"
              height="22.708"
              fill="currentColor"
              viewBox="0 0 16.978 22.708"
            >
              <g
                id="Group_975"
                data-name="Group 975"
                transform="translate(-821.317 -44.427)"
              >
                <path
                  id="Path_1187"
                  data-name="Path 1187"
                  d="M841.492,50.845a6.426,6.426,0,0,0-.032,3.028,1.8,1.8,0,0,1-.628,1.625,2.928,2.928,0,0,0-.915,1.6,1.922,1.922,0,0,1-1.5,1.547,3.537,3.537,0,0,0-1.56.869,1.689,1.689,0,0,1-2.032.311,2.3,2.3,0,0,0-2.179,0,1.684,1.684,0,0,1-2.087-.365,2.7,2.7,0,0,0-1.352-.754,2.144,2.144,0,0,1-1.726-1.822,2.044,2.044,0,0,0-.678-1.207,2.342,2.342,0,0,1-.72-2.5,3.619,3.619,0,0,0,0-1.708,2.141,2.141,0,0,1,.673-2.348,2.744,2.744,0,0,0,.8-1.5,2.01,2.01,0,0,1,1.563-1.582,2.865,2.865,0,0,0,1.639-.984,1.7,1.7,0,0,1,1.857-.545,3.684,3.684,0,0,0,2.229,0,1.744,1.744,0,0,1,1.916.59,2.6,2.6,0,0,0,1.5.911,2.069,2.069,0,0,1,1.667,1.674,3.015,3.015,0,0,0,.939,1.6A1.774,1.774,0,0,1,841.492,50.845ZM837.85,52.27a4.242,4.242,0,0,0-4.075-4.279,4.4,4.4,0,0,0-4.2,4.2,4.275,4.275,0,0,0,4.117,4.249A4.062,4.062,0,0,0,837.85,52.27Z"
                  transform="translate(-3.934 0)"
                />
                <path
                  id="Path_1188"
                  data-name="Path 1188"
                  d="M878.469,141.933a3.43,3.43,0,0,0,3.784-.73,6.448,6.448,0,0,1,1.928-.82c.275-.1.341.184.417.366.577,1.4,1.16,2.8,1.711,4.217.269.689-.141,1.183-.888,1.129-.026,0-.051-.013-.077-.017a3.046,3.046,0,0,0-3.232,1.14c-.843,1.087-1.292.933-1.817-.367-.578-1.431-1.17-2.856-1.753-4.284A.694.694,0,0,1,878.469,141.933Z"
                  transform="translate(-48.097 -80.805)"
                />
                <path
                  id="Path_1189"
                  data-name="Path 1189"
                  d="M829.427,142.244c-.663,1.617-1.243,3.036-1.826,4.454a12.139,12.139,0,0,1-.5,1.151.623.623,0,0,1-1.088.2,2.478,2.478,0,0,1-.5-.5c-.738-1.186-1.855-1.272-3.079-1.126-1.008.12-1.353-.367-.966-1.305.519-1.257,1.053-2.509,1.536-3.779.2-.513.346-.675.944-.427a11.149,11.149,0,0,1,2.33,1.235A3.187,3.187,0,0,0,829.427,142.244Z"
                  transform="translate(0 -81.172)"
                />
              </g>
            </svg>
            <div className="search__result__container__vacancies-results-panel-card-info">
              {bank}
            </div>
          </div>
          <div className="search__result__container__vacancies-results-panel-card-info-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.869"
              height="23.078"
              fill="currentColor"
              viewBox="0 0 15.869 23.078"
            >
              <g id="pin" transform="translate(-79.968 0)">
                <path
                  id="Path_1190"
                  data-name="Path 1190"
                  d="M94.734,3.951A7.831,7.831,0,0,0,88.08,0c-.118,0-.237,0-.355,0a7.832,7.832,0,0,0-6.655,3.95,8.034,8.034,0,0,0-.1,7.938l5.723,10.475.008.014a1.391,1.391,0,0,0,2.413,0l.008-.014L94.839,11.89a8.034,8.034,0,0,0-.1-7.938ZM87.9,10.457a3.245,3.245,0,1,1,3.245-3.245A3.249,3.249,0,0,1,87.9,10.457Z"
                />
              </g>
            </svg>

            <div className="search__result__container__vacancies-results-panel-card-info">
              {location}
            </div>
          </div>
          <div className="search__result__container__vacancies-results-panel-card-info-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              fill="currentColor"
              viewBox="0 0 14 24"
            >
              <text
                id="_"
                data-name="$"
                transform="translate(7 19)"
                font-size="20"
                font-family="Montserrat-SemiBold, Montserrat"
                font-weight="600"
              >
                <tspan x="-6.29" y="0">
                  $
                </tspan>
              </text>
            </svg>
            <div className="search__result__container__vacancies-results-panel-card-info">
              {price}
            </div>
          </div>
        </div>
        <div className="search__result__container__vacancies-results-panel-card-content-right">
          <button className="search__result__container__vacancies-results-panel-card-content-right-secondary-btn">
            More info
          </button>
          <button className="search__result__container__vacancies-results-panel-card-content-right-primary-btn">
            Apply Directy
          </button>
        </div>
      </div>
    </div>
  );
}

class Vacancies extends React.Component {
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
    const optionsRange = [
      { value: "chocolate", label: "10 km" },
      { value: "strawberry", label: "5 km" },
    ];

    return (
      <>
        <Header />
        <div className="jumbotron__vacancies">
          <img
            src={jumbotron__vacancies__background__img}
            alt="jumbotron__vacancies-background-img"
            className="jumbotron__vacancies-background-img"
          />
          <div className="jumbotron__vacancies-content">
            <div className="jumbotron__vacancies-content-heading">
              Lorem Ipsum is simply dummy text of thee 1500s
            </div>
            <form action="" className="jumbotron__vacancies-content-form">
              <input
                type="text"
                className="jumbotron__vacancies-content-input"
                placeholder="Enter job here"
              />
              <div className="jumbotron__vacancies-content-divider"></div>
              <input
                type="text"
                className="jumbotron__vacancies-content-input"
                placeholder="Zip code or place"
              />
              <div className="jumbotron__vacancies-content-divider"></div>
              <div className="range__select">
                <Select
                  // defaultValue={}
                  name="colors"
                  options={optionsRange}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="10km"
                />
              </div>
              <button
                type="search"
                className="jumbotron__vacancies-content-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                      fill="#fbfbfb"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="search__result__container__vacancies">
          <form className="search__result__container__vacancies-filter-panel">
            <div className="search__result__container__vacancies-filter-panel-row">
              <div className="search__result__container__vacancies-filter-panel-heading">
                Filter
              </div>
              <button
                type="reset"
                className="search__result__container__vacancies-filter-panel-heading-row-btn"
              >
                Remove all
              </button>
            </div>
            <div className="search__result__container__vacancies-filter-panel-row">
              <div className="search__result__container__vacancies-filter-panel-sub-heading">
                Distance
              </div>
            </div>
            <div className="search__result__container__vacancies-filter-panel-row">
              <input
                type="text"
                placeholder="Zip code or place"
                className="search__result__container__vacancies-filter-panel-input"
              />
            </div>
            <div className="search__result__container__vacancies-filter-panel-row">
              <RangeInput />
            </div>
            <div className="search__result__container__vacancies-filter-panel-row">
              <div className="search__result__container__vacancies-filter-panel-info">
                Max 30 Kilometres
              </div>
            </div>
            <div className="search__result__container__vacancies-filter-panel-catagory">
              <Accordion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="search__result__container__vacancies-filter-panel-catagory-heading"
                >
                  Specialisms
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="search__result__container__vacancies-filter-panel-catagory-container">
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-1">Engineering</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-2">Development</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-3"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-3">Sales</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-4"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-4">
                      Manufacturing Supply Chain
                    </label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-5"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-5">Finance</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-16"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-16">IT</label>
                  </div>
                </Accordion.Collapse>
              </Accordion>
              <Accordion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="search__result__container__vacancies-filter-panel-catagory-heading"
                >
                  Training direction
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="search__result__container__vacancies-filter-panel-catagory-container">
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-6"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-6">
                      (Field) Service Engineers
                    </label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-7"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-7">
                      (Field) Service Engineers
                    </label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-8"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-8">
                      (Field) Service Engineers
                    </label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-9"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-9">
                      (Field) Service Engineers
                    </label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-10"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-10">
                      (Field) Service Engineers
                    </label>
                  </div>
                </Accordion.Collapse>
              </Accordion>
              <Accordion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="search__result__container__vacancies-filter-panel-catagory-heading"
                >
                  Education
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="search__result__container__vacancies-filter-panel-catagory-container">
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-11"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-11">MBO</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-12"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-12">HBO</label>
                    <input
                      className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                      id="styled-checkbox-13"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-13">WO</label>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </form>
          <div className="search__result__container__vacancies-results-panel">
            <div className="search__result__container__vacancies-results-panel-heading-row">
              <div className="search__result__container__vacancies-results-panel-heading">
                {resultNo} Results
              </div>
              <div className="search__result__container__vacancies-results-panel-heading-select-box">
                <div className="search__result__container__vacancies-results-panel-heading-select-box-heading">
                  Sort By:
                </div>
                <div style={{ width: "200px" }}>
                  <Select
                    // defaultValue={}
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="search__result__container__vacancies-results-panel-card-container">
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
              <ResultsCard
                name="Job Name Display Here"
                bank="MBO / HBO"
                location="location"
                price="4324.54"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" style={{ fontSize: 14 }}>
                Load More
              </Button>
            </div>
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
                  Apply Directly
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
export default Vacancies;
