import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import FieldCard from "../components/FieldCard";
import "./Professional.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jumbotron__professional__background__img from "../assets/jumbotron__professional__background__img.png";

class Professional extends React.Component {
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
        <div className="jumbotron__professional">
          <img
            src={jumbotron__professional__background__img}
            alt="jumbotron__professional-background-img"
            className="jumbotron__professional-background-img"
          />
          <div className="jumbotron__professional-content">
            <div className="jumbotron__professional-content-heading">
              Professional
            </div>
            <div className="jumbotron__professional-content-info">
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
            </div>
          </div>
        </div>
        <div className="professional__panel">
          <div className="professional__panel__content">
            <div className="professional__panel__content__card">
              <div className="professional__panel__content__card__img__holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="professional__panel__content__card__img"
                  viewBox="0 0 125.209 125.203"
                >
                  <g
                    id="Group_1146"
                    data-name="Group 1146"
                    transform="translate(-480.98 -336.806)"
                  >
                    <g id="job-interview" transform="translate(480.98 336.806)">
                      <g
                        id="Group_1100"
                        data-name="Group 1100"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_1081"
                          data-name="Group 1081"
                          transform="translate(61.254 22.249)"
                        >
                          <g
                            id="Group_1068"
                            data-name="Group 1068"
                            transform="translate(15.45)"
                          >
                            <path
                              id="Path_1406"
                              data-name="Path 1406"
                              d="M330.765,90.99h-7.743a9.369,9.369,0,0,0-9.369,9.369V109.4l2.267,1.365h15.744V92.638Z"
                              transform="translate(-313.653 -90.99)"
                              fill="#efc984"
                            />
                          </g>
                          <path
                            id="Path_1407"
                            data-name="Path 1407"
                            d="M300.088,292.687a11.539,11.539,0,0,0-8.289-11.072l-13.7-4.023.009-2.936h-6.129l-13.4,3.932a11.277,11.277,0,0,0-8.1,10.82v21.4h49.612Z"
                            transform="translate(-250.477 -229.741)"
                            fill="#4a80aa"
                          />
                          <g
                            id="Group_1069"
                            data-name="Group 1069"
                            transform="translate(26.599 44.915)"
                          >
                            <path
                              id="Path_1408"
                              data-name="Path 1408"
                              d="M388.5,278.589l-13.392-3.932H359.257l-.012,3.859,13.392,3.932a11.277,11.277,0,0,1,8.1,10.82V310.81H396.6v-21.4A11.277,11.277,0,0,0,388.5,278.589Z"
                              transform="translate(-359.245 -274.657)"
                              fill="#407093"
                            />
                          </g>
                          <path
                            id="Path_1409"
                            data-name="Path 1409"
                            d="M365.361,354.72l-4.92-21.939h-5.33l-4.92,21.939Z"
                            transform="translate(-325.805 -273.652)"
                            fill="#dd636e"
                          />
                          <g
                            id="Group_1079"
                            data-name="Group 1079"
                            transform="translate(15.449 0)"
                          >
                            <g
                              id="Group_1076"
                              data-name="Group 1076"
                              transform="translate(9.168 35.786)"
                            >
                              <g id="Group_1075" data-name="Group 1075">
                                <g id="Group_1074" data-name="Group 1074">
                                  <g id="Group_1073" data-name="Group 1073">
                                    <g id="Group_1072" data-name="Group 1072">
                                      <g id="Group_1071" data-name="Group 1071">
                                        <g
                                          id="Group_1070"
                                          data-name="Group 1070"
                                        >
                                          <path
                                            id="Path_1410"
                                            data-name="Path 1410"
                                            d="M365.856,249.153V237.326H351.14v11.827c0,4.064,7.358,4.425,7.358,4.425S365.856,253.216,365.856,249.153Z"
                                            transform="translate(-351.14 -237.326)"
                                            fill="#ffddce"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <path
                              id="Path_1411"
                              data-name="Path 1411"
                              d="M331.343,156.061a13.813,13.813,0,0,0,.321-3.073V137.315a22.151,22.151,0,0,1-8.433-1.068l-.005,0a2.99,2.99,0,0,0-3.928,2.839v1.551a2.833,2.833,0,0,1-2.833,2.833h-2.813V148.1a2.143,2.143,0,0,0,2.143,2.143.7.7,0,0,1,.7.665A13.719,13.719,0,0,0,327,163.376a13.937,13.937,0,0,0,4.339-7.315Z"
                              transform="translate(-313.652 -125.063)"
                              fill="#ffddce"
                            />
                            <g
                              id="Group_1077"
                              data-name="Group 1077"
                              transform="translate(17.112)"
                            >
                              <path
                                id="Path_1412"
                                data-name="Path 1412"
                                d="M395.5,96.436h-.137a1.375,1.375,0,0,1-1.375-1.375,4.071,4.071,0,0,0-4.071-4.071h-6.285v19.77H397.3l2.267-1.365v-8.889a4.071,4.071,0,0,0-4.071-4.071Z"
                                transform="translate(-383.628 -90.99)"
                                fill="#eabc6b"
                              />
                            </g>
                            <g
                              id="Group_1078"
                              data-name="Group 1078"
                              transform="translate(12.169 11.03)"
                            >
                              <path
                                id="Path_1413"
                                data-name="Path 1413"
                                d="M381.483,143.47a2.833,2.833,0,0,1-2.833-2.833v-1.55a2.99,2.99,0,0,0-3.928-2.839,22.132,22.132,0,0,1-6.364,1.107v15.158a13.4,13.4,0,0,1-4.944,10.523,13.71,13.71,0,0,0,18.038-12.127.7.7,0,0,1,.7-.665A2.143,2.143,0,0,0,384.3,148.1V143.47h-2.813Z"
                                transform="translate(-363.414 -136.095)"
                                fill="#ffcbbe"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_1080"
                            data-name="Group 1080"
                            transform="translate(18.546 43.903)"
                          >
                            <path
                              id="Path_1414"
                              data-name="Path 1414"
                              d="M329.519,270.744l-2.1.941a1.874,1.874,0,0,0-.559,3.033l5.8,5.812a2,2,0,0,0,2.683.1l4.551-3.8-7.759-5.8A2.6,2.6,0,0,0,329.519,270.744Z"
                              transform="translate(-326.317 -270.516)"
                              fill="#365e7d"
                            />
                            <path
                              id="Path_1415"
                              data-name="Path 1415"
                              d="M389.311,271.1l-7.44,5.761,4.277,3.657a2,2,0,0,0,2.691-.078l5.806-5.654a1.874,1.874,0,0,0-.545-3.054l-2.136-.952A2.6,2.6,0,0,0,389.311,271.1Z"
                              transform="translate(-368.285 -270.544)"
                              fill="#365e7d"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_1416"
                          data-name="Path 1416"
                          d="M202.831,426.784l0-24.14h-81.1v26.624h79.516A3.04,3.04,0,0,0,202.831,426.784Z"
                          transform="translate(-91.963 -304.181)"
                          fill="#ddb7a0"
                        />
                        <path
                          id="Path_1417"
                          data-name="Path 1417"
                          d="M438.324,402.645v23.868a2.909,2.909,0,0,1-2.854,2.756h13.485a5.23,5.23,0,0,0,5.23-5.23V402.645Z"
                          transform="translate(-328.977 -304.182)"
                          fill="#d6a889"
                        />
                        <g
                          id="Group_1096"
                          data-name="Group 1096"
                          transform="translate(9.78 40.774)"
                        >
                          <g
                            id="Group_1095"
                            data-name="Group 1095"
                            transform="translate(14.16 39.11)"
                          >
                            <g id="Group_1094" data-name="Group 1094">
                              <g id="Group_1093" data-name="Group 1093">
                                <g id="Group_1092" data-name="Group 1092">
                                  <g id="Group_1091" data-name="Group 1091">
                                    <g id="Group_1090" data-name="Group 1090">
                                      <g id="Group_1089" data-name="Group 1089">
                                        <g
                                          id="Group_1088"
                                          data-name="Group 1088"
                                        >
                                          <g
                                            id="Group_1087"
                                            data-name="Group 1087"
                                          >
                                            <g
                                              id="Group_1086"
                                              data-name="Group 1086"
                                            >
                                              <g
                                                id="Group_1085"
                                                data-name="Group 1085"
                                              >
                                                <g
                                                  id="Group_1084"
                                                  data-name="Group 1084"
                                                >
                                                  <g
                                                    id="Group_1083"
                                                    data-name="Group 1083"
                                                  >
                                                    <g
                                                      id="Group_1082"
                                                      data-name="Group 1082"
                                                    >
                                                      <path
                                                        id="Path_1418"
                                                        data-name="Path 1418"
                                                        d="M112.206,338.175v-11.5H97.895v11.5c0,3.952,7.155,4.3,7.155,4.3S112.206,342.126,112.206,338.175Z"
                                                        transform="translate(-97.895 -326.673)"
                                                        fill="#ffddce"
                                                      />
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <path
                            id="Path_1419"
                            data-name="Path 1419"
                            d="M61.645,214.034a8.659,8.659,0,0,0,5.819-8.183,21,21,0,0,0-.884-6.022,34.516,34.516,0,0,1-1.454-9.9v-.008A19.589,19.589,0,0,0,54.2,172.355a19.052,19.052,0,0,0-11.933,17.667v.008a33.544,33.544,0,0,1-1.413,9.624,20.4,20.4,0,0,0-.859,5.853,8.416,8.416,0,0,0,5.656,7.954,47.756,47.756,0,0,0,9.8,2.28A49.07,49.07,0,0,0,61.645,214.034Z"
                            transform="translate(-39.992 -170.983)"
                            fill="#407093"
                          />
                          <path
                            id="Path_1420"
                            data-name="Path 1420"
                            d="M123.007,195.416a33.555,33.555,0,0,1-1.413-9.624v-.008a19.045,19.045,0,0,0-27.015-17.292,19.044,19.044,0,0,1,11.077,17.292v.008a33.544,33.544,0,0,0,1.413,9.624,20.4,20.4,0,0,1,.859,5.853,8.416,8.416,0,0,1-5.656,7.954,47.754,47.754,0,0,1-7.693,1.971,47.754,47.754,0,0,0,23.631-1.971,8.416,8.416,0,0,0,5.656-7.954,20.419,20.419,0,0,0-.859-5.853Z"
                            transform="translate(-81.23 -166.744)"
                            fill="#365e7d"
                          />
                        </g>
                        <g
                          id="Group_1097"
                          data-name="Group 1097"
                          transform="translate(8.653)"
                        >
                          <path
                            id="Path_1421"
                            data-name="Path 1421"
                            d="M81.1,26.468V5.554c0-5.1-4.436-5.54-7.5-5.543H40.927a5.543,5.543,0,0,0-5.543,5.543V26.468a5.543,5.543,0,0,0,5.543,5.543H74.478l1.354-.073a5.438,5.438,0,0,0,5.267-5.47Z"
                            transform="translate(-35.384 -0.011)"
                            fill="#cbe2ff"
                          />
                        </g>
                        <path
                          id="Path_1422"
                          data-name="Path 1422"
                          d="M207.743.011h-16.07a5.543,5.543,0,0,1,5.543,5.543V26.468a5.544,5.544,0,0,1-4.393,5.423.767.767,0,0,0-.276.12h5.183a.808.808,0,0,1,.571.237l8.3,8.3a.978.978,0,0,0,1.67-.692V32.677a.8.8,0,0,1,.625-.786,5.544,5.544,0,0,0,4.393-5.423V5.554A5.543,5.543,0,0,0,207.743.011Z"
                          transform="translate(-144.8 -0.011)"
                          fill="#bed8fb"
                        />
                        <g
                          id="Group_1098"
                          data-name="Group 1098"
                          transform="translate(0 88.505)"
                        >
                          <path
                            id="Path_1423"
                            data-name="Path 1423"
                            d="M47.434,379.514c0-4.867-2.737-7.217-7.877-8.32l-2.9-.553a5.381,5.381,0,0,1-4.205-3.955,7.64,7.64,0,0,1-8.49-4.719l-.017-.042L7.878,365.031A10.967,10.967,0,0,0,0,375.554v17.839a5.23,5.23,0,0,0,5.241,5.23l41.017-.084,1.149-.881Z"
                            transform="translate(0 -361.925)"
                            fill="#e28086"
                          />
                        </g>
                        <path
                          id="Path_1424"
                          data-name="Path 1424"
                          d="M156.053,398.669a2.379,2.379,0,0,0,2.36-2.379V375.7a10.967,10.967,0,0,0-7.877-10.522l-16.068-3.06a7.584,7.584,0,0,1-7.1,4.827,5.382,5.382,0,0,0,4.33,4.608l2.9.553c5.14,1.1,7.877,3.454,7.877,8.32v18.261Z"
                          transform="translate(-96.217 -273.563)"
                          fill="#dd636e"
                        />
                        <g
                          id="Group_1099"
                          data-name="Group 1099"
                          transform="translate(87.842 72.467)"
                        >
                          <path
                            id="Path_1425"
                            data-name="Path 1425"
                            d="M369.023,300l-4.277-3.657-4.551,3.8a2,2,0,0,1-.993.444l2.716,4.665h5.33l2.686-4.814A1.989,1.989,0,0,1,369.023,300Z"
                            transform="translate(-359.202 -296.341)"
                            fill="#e28086"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="professional__panel__content__card__heading">
                Personal Interview
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="4"
              style={{ marginTop: 80 }}
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
            <div className="professional__panel__content__card">
              <div className="professional__panel__content__card__img__holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="professional__panel__content__card__img"
                  viewBox="0 0 120.045 116.102"
                >
                  <g
                    id="Group_1145"
                    data-name="Group 1145"
                    transform="translate(-774.994 -341.971)"
                  >
                    <g id="conversation" transform="translate(774.994 341.971)">
                      <path
                        id="Path_1426"
                        data-name="Path 1426"
                        d="M191.639,326.427h15.618c5.1,1.529,9.511,4.513,9.511,7.949v20.4h-34.64v-20.4C182.128,330.94,186.541,327.956,191.639,326.427Z"
                        transform="translate(-139.426 -251.864)"
                        fill="#4a80aa"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1427"
                        data-name="Path 1427"
                        d="M273.817,334.376v20.4h5.862v-20.4c0-3.436-4.413-6.42-9.511-7.949h-5.862C269.4,327.956,273.817,330.94,273.817,334.376Z"
                        transform="translate(-202.337 -251.864)"
                        fill="#407093"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1428"
                        data-name="Path 1428"
                        d="M89.406,438.6h9.225l7.55-1.05,7.477,1.05h29.616l7.364-1.449L158.3,438.6h9.232v14.13H89.406Z"
                        transform="translate(-68.444 -336.625)"
                        fill="#d09080"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1429"
                        data-name="Path 1429"
                        d="M0,372.511V342.458a6.752,6.752,0,0,1,6.726-6.733H17.832c.193,0,.379.013.572.026a5.157,5.157,0,0,1,4.613,2.02l9.032,11.963a2.065,2.065,0,0,0,1.848.924H45.215a5.147,5.147,0,1,1,0,10.295H30.188a5.135,5.135,0,0,1-4.1-2.047l-1.528-2.027v18.2H2.572A3.181,3.181,0,0,1,0,372.511Z"
                        transform="translate(0 -258.982)"
                        fill="#ff6978"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1430"
                        data-name="Path 1430"
                        d="M347.553,372.511V342.458a6.748,6.748,0,0,0-6.726-6.733h-11.1c-.193,0-.385.013-.572.026a5.162,5.162,0,0,0-4.619,2.02l-9.032,11.963a2.078,2.078,0,0,1-1.848.924H302.339a5.147,5.147,0,1,0,0,10.295h15.027a5.134,5.134,0,0,0,4.1-2.047L323,356.879v18.2h21.979A3.181,3.181,0,0,0,347.553,372.511Z"
                        transform="translate(-227.509 -258.982)"
                        fill="#ccf49f"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1431"
                        data-name="Path 1431"
                        d="M205.425,100.821h29.5l7.464,7.464c.591.592,1.269.246,1.269-.532v-6.932a6.932,6.932,0,0,0,6.912-6.912V76.463a6.932,6.932,0,0,0-6.912-6.912H205.425a6.933,6.933,0,0,0-6.912,6.912V93.91A6.932,6.932,0,0,0,205.425,100.821Z"
                        transform="translate(-151.97 -55.215)"
                        fill="#cbe2ff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1432"
                        data-name="Path 1432"
                        d="M22.164,47.042H53.2a9.2,9.2,0,0,0,9.172-9.172V17.58A9.2,9.2,0,0,0,53.2,8.408H13.424A9.2,9.2,0,0,0,4.252,17.58V37.87a9.2,9.2,0,0,0,9.172,9.172v6.939a.715.715,0,0,0,1.276.525Z"
                        transform="translate(-3.256 -8.408)"
                        fill="#cbe2ff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_1433"
                        data-name="Path 1433"
                        d="M50.937,46.173a1.761,1.761,0,0,1,0-3.523h33.53a1.761,1.761,0,0,1,0,3.523Zm0,19.055a1.758,1.758,0,0,1,0-3.516H67.706a1.758,1.758,0,1,1,0,3.516Zm0-9.53a1.758,1.758,0,0,1,0-3.516h33.53a1.758,1.758,0,1,1,0,3.516Z"
                        transform="translate(-37.652 -34.622)"
                        fill="#477b9e"
                      />
                      <g
                        id="Group_1101"
                        data-name="Group 1101"
                        transform="translate(1.455 0.458)"
                      >
                        <path
                          id="Path_1434"
                          data-name="Path 1434"
                          d="M233.856,252.116a9.776,9.776,0,0,1-19.553,0V241.642a5.489,5.489,0,0,1,5.476-5.47H232.4a1.308,1.308,0,0,1,1.455,1.456Z"
                          transform="translate(-165.513 -183.228)"
                          fill="#ffcbbe"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1435"
                          data-name="Path 1435"
                          d="M214.3,241.642V244.8h19.553v-7.171a1.308,1.308,0,0,0-1.455-1.456H219.78A5.489,5.489,0,0,0,214.3,241.642Z"
                          transform="translate(-165.513 -183.228)"
                          fill="#ffe5a0"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1436"
                          data-name="Path 1436"
                          d="M10.686,252.116a9.773,9.773,0,1,0,19.547,0V241.642a5.483,5.483,0,0,0-5.47-5.47H16.156a5.483,5.483,0,0,0-5.47,5.47Z"
                          transform="translate(-9.636 -183.228)"
                          fill="#ffcbbe"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1437"
                          data-name="Path 1437"
                          d="M437.5,252.116a9.777,9.777,0,0,1-19.553,0V241.642a5.487,5.487,0,0,1,5.47-5.47h8.614a5.487,5.487,0,0,1,5.47,5.47Z"
                          transform="translate(-321.409 -183.228)"
                          fill="#d8a595"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1438"
                          data-name="Path 1438"
                          d="M459.851,269.975a9.771,9.771,0,0,1-12.708,9.325,9.836,9.836,0,0,0,6.8-8.374,13.006,13.006,0,0,0,5.9-.611l.013-10.813v10.474Z"
                          transform="translate(-343.76 -201.088)"
                          fill="#d09080"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1439"
                          data-name="Path 1439"
                          d="M30.234,241.641v3.808a7.3,7.3,0,0,1-6.334-.572c-1.03-.585-1.21-.585-1.329.352-.359,2.751-1.6,10.328-11.877,7.224l-.007-10.813a5.479,5.479,0,0,1,5.47-5.47h8.607a5.483,5.483,0,0,1,5.47,5.47Z"
                          transform="translate(-9.637 -183.228)"
                          fill="#d09080"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1440"
                          data-name="Path 1440"
                          d="M417.945,241.641v3.808a7.317,7.317,0,0,0,6.341-.572c1.023-.585,1.2-.585,1.323.352.359,2.751,1.6,10.328,11.877,7.224l.013-10.813a5.487,5.487,0,0,0-5.47-5.47h-8.614a5.488,5.488,0,0,0-5.47,5.47Z"
                          transform="translate(-321.408 -183.228)"
                          fill="#477b9e"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1441"
                          data-name="Path 1441"
                          d="M458.48,241.642v10.474a9.088,9.088,0,0,1-.046.951,13.006,13.006,0,0,0,5.9-.611l.013-10.813a5.485,5.485,0,0,0-5.091-5.457,3.583,3.583,0,0,0-.379-.013H453.01A5.487,5.487,0,0,1,458.48,241.642Z"
                          transform="translate(-348.252 -183.228)"
                          fill="#365e7d"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1442"
                          data-name="Path 1442"
                          d="M46.7,281.369a9.817,9.817,0,0,1-6.846,9.325,9.771,9.771,0,0,0,12.708-9.325V274.7a7.266,7.266,0,0,1-5.862-.319Z"
                          transform="translate(-31.967 -212.481)"
                          fill="#f7beaf"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1443"
                          data-name="Path 1443"
                          d="M45.725,236.172a5.483,5.483,0,0,1,5.47,5.47v3.489a7.265,7.265,0,0,0,5.862.319v-3.808a5.483,5.483,0,0,0-5.47-5.47Z"
                          transform="translate(-36.46 -183.228)"
                          fill="#be694f"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1444"
                          data-name="Path 1444"
                          d="M250.345,280.283a9.817,9.817,0,0,1-6.846,9.325,9.771,9.771,0,0,0,12.707-9.325v-7.318h-5.862Z"
                          transform="translate(-187.863 -211.396)"
                          fill="#f7beaf"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1445"
                          data-name="Path 1445"
                          d="M267.944,237.628V244.8h5.862v-7.171a1.308,1.308,0,0,0-1.455-1.456h-5.862A1.308,1.308,0,0,1,267.944,237.628Z"
                          transform="translate(-205.462 -183.228)"
                          fill="#f2ce7e"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1446"
                          data-name="Path 1446"
                          d="M80.451,396.323a.391.391,0,0,0-.711.239v24.783H85.6v-18.2Z"
                          transform="translate(-62.5 -305.702)"
                          fill="#cf4351"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1447"
                          data-name="Path 1447"
                          d="M478.622,342.609v30.054a3.175,3.175,0,0,1-2.565,2.572h5.855a3.182,3.182,0,0,0,2.572-2.572V342.609a6.754,6.754,0,0,0-5.955-6.686,9.741,9.741,0,0,1-2.366,1.489A6.723,6.723,0,0,1,478.622,342.609Z"
                          transform="translate(-365.895 -259.591)"
                          fill="#b3e59f"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1448"
                          data-name="Path 1448"
                          d="M198.8,95.133a6.947,6.947,0,0,0,6.846,5.928h29.5l7.464,7.464c.591.592,1.269.246,1.269-.532v-6.932a6.932,6.932,0,0,0,6.912-6.912V76.7a6.929,6.929,0,0,0-5.928-6.839,6.776,6.776,0,0,1,.066.977V88.287a6.927,6.927,0,0,1-6.906,6.912H199.78A8.065,8.065,0,0,1,198.8,95.133Z"
                          transform="translate(-153.641 -55.913)"
                          fill="#bed8fb"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1449"
                          data-name="Path 1449"
                          d="M58,33.505a9.178,9.178,0,0,1-9.172,9.178H9.059a9.186,9.186,0,0,1-2.851-.459,9.2,9.2,0,0,0,8.713,6.314v6.939A.715.715,0,0,0,16.2,56l7.464-7.464H54.692a9.2,9.2,0,0,0,9.172-9.172V19.076a9.2,9.2,0,0,0-6.32-8.713A9.028,9.028,0,0,1,58,13.214V33.505Z"
                          transform="translate(-6.208 -10.363)"
                          fill="#bed8fb"
                          fill-rule="evenodd"
                        />
                        <path
                          id="Path_1450"
                          data-name="Path 1450"
                          d="M382.285,443.327h5.862v14.13h-5.862Z"
                          transform="translate(-294.109 -341.813)"
                          fill="#be694f"
                          fill-rule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="professional__panel__content__card__heading">
                Discussion of your ambitions and wishes
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="4"
              style={{ marginTop: 80 }}
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
            <div className="professional__panel__content__card">
              <div className="professional__panel__content__card__img__holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="professional__panel__content__card__img"
                  viewBox="0 0 109.795 123.27"
                >
                  <g id="drawing" transform="translate(0)">
                    <g
                      id="Group_1109"
                      data-name="Group 1109"
                      transform="translate(9.981 0)"
                    >
                      <g
                        id="Group_1104"
                        data-name="Group 1104"
                        transform="translate(0)"
                      >
                        <g id="Group_1103" data-name="Group 1103">
                          <path
                            id="Path_1485"
                            data-name="Path 1485"
                            d="M67,0h7.486V13.974H67Z"
                            transform="translate(-67)"
                            fill="#5289d9"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_1106"
                        data-name="Group 1106"
                        transform="translate(21.46)"
                      >
                        <g id="Group_1105" data-name="Group 1105">
                          <path
                            id="Path_1486"
                            data-name="Path 1486"
                            d="M153,0h7.486V13.974H153Z"
                            transform="translate(-153)"
                            fill="#5289d9"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_1107"
                        data-name="Group 1107"
                        transform="translate(42.92)"
                      >
                        <path
                          id="Path_1487"
                          data-name="Path 1487"
                          d="M239,0h7.486V13.974H239Z"
                          transform="translate(-239)"
                          fill="#5289d9"
                        />
                      </g>
                      <g
                        id="Group_1108"
                        data-name="Group 1108"
                        transform="translate(64.38)"
                      >
                        <path
                          id="Path_1488"
                          data-name="Path 1488"
                          d="M325,0h7.486V13.974H325Z"
                          transform="translate(-325)"
                          fill="#5289d9"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_1489"
                      data-name="Path 1489"
                      d="M118.829,83.933v75.36H27V48h91.829V60.726"
                      transform="translate(-27 -36.022)"
                      fill="#fcf5f5"
                    />
                    <g
                      id="Group_1110"
                      data-name="Group 1110"
                      transform="translate(45.914 11.978)"
                    >
                      <path
                        id="Path_1490"
                        data-name="Path 1490"
                        d="M211,48V159.293h45.914V48Z"
                        transform="translate(-211 -48)"
                        fill="#ebe1dd"
                      />
                    </g>
                    <g
                      id="Group_1111"
                      data-name="Group 1111"
                      transform="translate(33.937 63.631)"
                    >
                      <path
                        id="Path_1491"
                        data-name="Path 1491"
                        d="M163,331.446v18.216h11.978l4.741-12.477-4.741-12.574Z"
                        transform="translate(-163 -307.241)"
                        fill="#ff6c6c"
                      />
                      <path
                        id="Path_1492"
                        data-name="Path 1492"
                        d="M241.443,255,211,272.371v25.05h30.443Z"
                        transform="translate(-199.022 -255)"
                        fill="#ee7a27"
                      />
                    </g>
                    <g
                      id="Group_1112"
                      data-name="Group 1112"
                      transform="translate(5.49 32.689)"
                    >
                      <path
                        id="Path_1493"
                        data-name="Path 1493"
                        d="M76.7,131a27.7,27.7,0,1,0,12.726,52.3l6.238-24.856-6.238-24.357A27.575,27.575,0,0,0,76.7,131Z"
                        transform="translate(-49 -131)"
                        fill="#80a3ff"
                      />
                      <path
                        id="Path_1494"
                        data-name="Path 1494"
                        d="M225.972,168A27.7,27.7,0,0,0,211,143.39V192.6A27.7,27.7,0,0,0,225.972,168Z"
                        transform="translate(-170.575 -140.298)"
                        fill="#5c75e6"
                      />
                    </g>
                    <g
                      id="Group_1113"
                      data-name="Group 1113"
                      transform="translate(52.462 22.959)"
                    >
                      <path
                        id="Path_1495"
                        data-name="Path 1495"
                        d="M248.539,233.357l-.371.371c-5.116,5.116-10.747,11.283-10.927,21.69l11.158-7.748,5.522-8.932-1.111-4.3Z"
                        transform="translate(-237.241 -198.086)"
                        fill="#5f5ace"
                      />
                      <path
                        id="Path_1496"
                        data-name="Path 1496"
                        d="M237.241,271.6a.014.014,0,0,1,0,0c10.409-.178,16.673-5.912,21.79-11.029l.272-.272-1.2-4.037-4.183-1.345Z"
                        transform="translate(-237.241 -214.271)"
                        fill="#463fc7"
                      />
                      <path
                        id="Path_1497"
                        data-name="Path 1497"
                        d="M397.529,97.391l-5.382-5.382L381.6,102.556l1.6,3.748,3.779,1.633,6.455-4.81Z"
                        transform="translate(-345.577 -92.009)"
                        fill="#5f5ace"
                      />
                      <path
                        id="Path_1498"
                        data-name="Path 1498"
                        d="M413.714,113.576l-10.547,10.547,2.044,3.484,3.338,1.9L419.1,118.958Z"
                        transform="translate(-361.763 -108.194)"
                        fill="#463fc7"
                      />
                      <path
                        id="Path_1499"
                        data-name="Path 1499"
                        d="M287.9,164.382l24.724-24.724-5.382-5.381L282.518,159l5.361,5.36Z"
                        transform="translate(-271.22 -123.729)"
                        fill="#72bfee"
                      />
                      <path
                        id="Path_1500"
                        data-name="Path 1500"
                        d="M0,0H34.965V7.611H0Z"
                        transform="translate(16.667 40.656) rotate(-45)"
                        fill="#5289d9"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="professional__panel__content__card__heading">
                Drawing up a personal impression and present it to clients
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="4"
              style={{ marginTop: 80 }}
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
            <div className="professional__panel__content__card">
              <div className="professional__panel__content__card__img__holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="professional__panel__content__card__img"
                  viewBox="0 0 134.732 132.587"
                >
                  <g id="interview" transform="translate(0)">
                    <path
                      id="Path_1451"
                      data-name="Path 1451"
                      d="M330.115,359.27h-2.2v-3.283h2.2a1.406,1.406,0,0,0,1.4-1.4V336.649H334.8v17.934A4.692,4.692,0,0,1,330.115,359.27Z"
                      transform="translate(-240.878 -248.294)"
                      fill="#d4e1f4"
                    />
                    <path
                      id="Path_1452"
                      data-name="Path 1452"
                      d="M165.8,359.27h-2.2a4.692,4.692,0,0,1-4.687-4.687V336.649H162.2v17.934a1.406,1.406,0,0,0,1.4,1.4h2.2Z"
                      transform="translate(-118.107 -248.294)"
                      fill="#d4e1f4"
                    />
                    <path
                      id="Path_1453"
                      data-name="Path 1453"
                      d="M363.208,13.65a8.051,8.051,0,1,1-7.983,8.116A8.051,8.051,0,0,1,363.208,13.65Z"
                      transform="translate(-260.716 -13.65)"
                      fill="#c79a83"
                    />
                    <ellipse
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      cx="7.982"
                      cy="8.116"
                      rx="7.982"
                      ry="8.116"
                      transform="translate(59.384 0)"
                      fill="#efc597"
                    />
                    <path
                      id="Path_1454"
                      data-name="Path 1454"
                      d="M106.381,13.65A8.051,8.051,0,1,1,98.4,21.766,8.049,8.049,0,0,1,106.381,13.65Z"
                      transform="translate(-74.141 -13.65)"
                      fill="#ffd8b7"
                    />
                    <path
                      id="Path_1455"
                      data-name="Path 1455"
                      d="M132.855,161H21.337L9.73,188.628H144.462Z"
                      transform="translate(-9.73 -120.693)"
                      fill="#d4e1f4"
                    />
                    <path
                      id="Path_1456"
                      data-name="Path 1456"
                      d="M10,262H144.584v6.018H10Z"
                      transform="translate(-9.926 -194.065)"
                      fill="#b6c9e0"
                    />
                    <path
                      id="Path_1457"
                      data-name="Path 1457"
                      d="M435.5,284.33h8.094V318.8H435.5Z"
                      transform="translate(-319.033 -210.287)"
                      fill="#5d6b84"
                    />
                    <path
                      id="Path_1458"
                      data-name="Path 1458"
                      d="M47.78,284.33h8.094V318.8H47.78Z"
                      transform="translate(-37.371 -210.287)"
                      fill="#5d6b84"
                    />
                    <path
                      id="Path_1459"
                      data-name="Path 1459"
                      d="M220.277,397.64H186.913a3.185,3.185,0,0,0-3.173,3.176v2.24a3.185,3.185,0,0,0,3.173,3.176h33.364a3.187,3.187,0,0,0,3.176-3.176v-2.24A3.187,3.187,0,0,0,220.277,397.64Z"
                      transform="translate(-136.14 -292.601)"
                      fill="#fb6771"
                    />
                    <path
                      id="Path_1460"
                      data-name="Path 1460"
                      d="M223.614,254.723A3.236,3.236,0,0,0,220.43,252h-33.29A3.186,3.186,0,0,0,184,254.723l0,25a3.136,3.136,0,0,0,3.14,3.184h33.29a3.217,3.217,0,0,0,3.233-3.184Z"
                      transform="translate(-136.328 -186.8)"
                      fill="#fb6771"
                    />
                    <path
                      id="Path_1461"
                      data-name="Path 1461"
                      d="M231.719,472.91H218.963a5.353,5.353,0,0,0-5.353,5.354v1.605h23.462v-1.606a5.353,5.353,0,0,0-5.354-5.353Z"
                      transform="translate(-157.839 -347.282)"
                      fill="#4a5160"
                    />
                    <path
                      id="Path_1462"
                      data-name="Path 1462"
                      d="M243.94,429.05h6.869v12H243.94Z"
                      transform="translate(-179.873 -315.419)"
                      fill="#b6c9e0"
                    />
                    <path
                      id="Path_1463"
                      data-name="Path 1463"
                      d="M235.093,237.139H209.44a8.859,8.859,0,0,1,8.215-5.6h9.224A8.863,8.863,0,0,1,235.093,237.139Z"
                      transform="translate(-154.81 -171.937)"
                      fill="#49bdff"
                    />
                    <path
                      id="Path_1464"
                      data-name="Path 1464"
                      d="M234.071,164.6a8.615,8.615,0,0,1,8.381,8.65,8.381,8.381,0,1,1-16.763,0,8.615,8.615,0,0,1,8.381-8.65Z"
                      transform="translate(-166.615 -123.308)"
                      fill="#6d7486"
                    />
                    <path
                      id="Path_1465"
                      data-name="Path 1465"
                      d="M336.024,321.51h-7.1v4.415h7.1a2.207,2.207,0,1,0,0-4.415Z"
                      transform="translate(-241.607 -237.296)"
                      fill="#56568c"
                    />
                    <path
                      id="Path_1466"
                      data-name="Path 1466"
                      d="M283.153,365.1v5.857A3.043,3.043,0,0,1,280.108,374H271.65v-8.9Z"
                      transform="translate(-200.003 -268.963)"
                      fill="#4a5160"
                    />
                    <path
                      id="Path_1467"
                      data-name="Path 1467"
                      d="M241.01,365.1h8.381V374H241.01Z"
                      transform="translate(-177.744 -268.963)"
                      fill="#b6c9e0"
                    />
                    <path
                      id="Path_1468"
                      data-name="Path 1468"
                      d="M208.436,365.1V374h-9.221a3.043,3.043,0,0,1-3.045-3.045V365.1Z"
                      transform="translate(-145.17 -268.963)"
                      fill="#4a5160"
                    />
                    <path
                      id="Path_1469"
                      data-name="Path 1469"
                      d="M158.351,321.51h-7.1a2.207,2.207,0,1,0,0,4.415h7.285V321.51Z"
                      transform="translate(-110.932 -237.296)"
                      fill="#56568c"
                    />
                    <path
                      id="Path_1470"
                      data-name="Path 1470"
                      d="M350.018,82H339.752C334.344,82,330,87.006,330,92.414v11.2h29.816v-11.2C359.816,87.006,355.426,82,350.018,82Z"
                      transform="translate(-242.392 -63.303)"
                      fill="#adf8d1"
                    />
                    <path
                      id="Path_1471"
                      data-name="Path 1471"
                      d="M221.179,82H210.91C205.505,82,201,87.006,201,92.414v11.2h30.09v-11.2C231.09,87.006,226.585,82,221.179,82Z"
                      transform="translate(-148.679 -63.303)"
                      fill="#eadf53"
                    />
                    <path
                      id="Path_1472"
                      data-name="Path 1472"
                      d="M93.065,82H82.8C77.39,82,73,87.006,73,92.414v11.2h29.816v-11.2C102.816,87.006,98.473,82,93.065,82Z"
                      transform="translate(-55.693 -63.303)"
                      fill="#867af4"
                    />
                    <path
                      id="Path_1473"
                      data-name="Path 1473"
                      d="M377.145,99.53l1.753,9.776-3.329,2-3.329-2L374,99.53h3.14Z"
                      transform="translate(-273.077 -76.038)"
                      fill="#49bdff"
                    />
                    <path
                      id="Path_1474"
                      data-name="Path 1474"
                      d="M379.779,82.13v0l-1.228,4.757h-3.146l-1.226-4.76Z"
                      transform="translate(-274.486 -63.398)"
                      fill="#3090fc"
                    />
                    <path
                      id="Path_1475"
                      data-name="Path 1475"
                      d="M248.735,99.53l1.753,9.776-3.329,2-3.329-2,1.762-9.774h3.14Z"
                      transform="translate(-179.793 -76.038)"
                      fill="#6addc7"
                    />
                    <path
                      id="Path_1476"
                      data-name="Path 1476"
                      d="M251.362,82.13v0l-1.228,4.757h-3.148l-1.225-4.76Z"
                      transform="translate(-181.195 -63.398)"
                      fill="#61a3bc"
                    />
                    <path
                      id="Path_1477"
                      data-name="Path 1477"
                      d="M120.325,99.53l1.753,9.776-3.332,2-3.326-2,1.762-9.774h3.14Z"
                      transform="translate(-86.509 -76.038)"
                      fill="#eadf53"
                    />
                    <path
                      id="Path_1478"
                      data-name="Path 1478"
                      d="M122.949,82.13v0l-1.225,4.757h-3.149l-1.225-4.76Z"
                      transform="translate(-87.911 -63.398)"
                      fill="#edb740"
                    />
                    <path
                      id="Path_1479"
                      data-name="Path 1479"
                      d="M21.337,161,9.73,188.628h8.206L29.543,161Z"
                      transform="translate(-9.73 -120.693)"
                      fill="#a7bad1"
                    />
                    <path
                      id="Path_1480"
                      data-name="Path 1480"
                      d="M191.946,403.056v-2.24a3.185,3.185,0,0,1,3.173-3.176h-8.206a3.185,3.185,0,0,0-3.173,3.176v2.24a3.185,3.185,0,0,0,3.173,3.176h8.206A3.185,3.185,0,0,1,191.946,403.056Z"
                      transform="translate(-136.14 -292.601)"
                      fill="#e75163"
                    />
                    <path
                      id="Path_1481"
                      data-name="Path 1481"
                      d="M187.139,282.911h8.206a3.136,3.136,0,0,1-3.14-3.184l0-25A3.186,3.186,0,0,1,195.346,252h-8.206A3.186,3.186,0,0,0,184,254.723l0,25a3.136,3.136,0,0,0,3.14,3.184Z"
                      transform="translate(-136.328 -186.8)"
                      fill="#e75163"
                    />
                    <path
                      id="Path_1482"
                      data-name="Path 1482"
                      d="M10,262h8.206v6.018H10Z"
                      transform="translate(-9.926 -194.065)"
                      fill="#7f9cb2"
                    />
                    <g
                      id="Group_1102"
                      data-name="Group 1102"
                      transform="translate(14.453 45.76)"
                    >
                      <path
                        id="Path_1483"
                        data-name="Path 1483"
                        d="M66.286,184.218H64.207a1.641,1.641,0,0,1,0-3.283h2.079a1.641,1.641,0,0,1,0,3.283Z"
                        transform="translate(-62.566 -180.935)"
                        fill="#fff"
                      />
                      <path
                        id="Path_1484"
                        data-name="Path 1484"
                        d="M115.821,184.218H91.884a1.641,1.641,0,0,1,0-3.283h23.937a1.641,1.641,0,0,1,0,3.283Z"
                        transform="translate(-82.672 -180.935)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="professional__panel__content__card__heading">
                Preparation for your interview with the client
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="4"
              style={{ marginTop: 80 }}
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
            <div className="professional__panel__content__card">
              <div className="professional__panel__content__card__img__holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="professional__panel__content__card__img"
                  viewBox="0 0 115.155 111.331"
                >
                  <g id="question-mark" transform="translate(-0.001)">
                    <g
                      id="Group_1114"
                      data-name="Group 1114"
                      transform="translate(0.001 43.858)"
                    >
                      <path
                        id="Path_1501"
                        data-name="Path 1501"
                        d="M3.374,270.973A3.372,3.372,0,0,1,0,267.6V206.874A3.372,3.372,0,0,1,3.374,203.5H44.083a3.372,3.372,0,0,1,3.374,3.374v10.121H71.3a3.372,3.372,0,0,1,3.374,3.374v40.484a3.372,3.372,0,0,1-3.374,3.374H10.121A3.378,3.378,0,0,0,6.747,267.6,3.372,3.372,0,0,1,3.374,270.973Z"
                        transform="translate(0 -203.5)"
                        fill="#80a3ff"
                      />
                    </g>
                    <path
                      id="Path_1502"
                      data-name="Path 1502"
                      d="M199.962,216.995H176.121V206.874a3.372,3.372,0,0,0-3.374-3.374H166v60.726h33.962a3.372,3.372,0,0,0,3.374-3.374V220.368A3.372,3.372,0,0,0,199.962,216.995Z"
                      transform="translate(-128.664 -159.642)"
                      fill="#5c75e6"
                    />
                    <g
                      id="Group_1115"
                      data-name="Group 1115"
                      transform="translate(13.495 57.352)"
                    >
                      <path
                        id="Path_1503"
                        data-name="Path 1503"
                        d="M90.588,270.247H63.374a3.374,3.374,0,0,1,0-6.747H90.588a3.374,3.374,0,0,1,0,6.747Z"
                        transform="translate(-60 -263.5)"
                        fill="#f3f5f9"
                      />
                    </g>
                    <path
                      id="Path_1504"
                      data-name="Path 1504"
                      d="M172.747,263.5H166v6.747h6.747a3.374,3.374,0,0,0,0-6.747Z"
                      transform="translate(-128.664 -206.148)"
                      fill="#e2dff4"
                    />
                    <g
                      id="Group_1116"
                      data-name="Group 1116"
                      transform="translate(40.71 0)"
                    >
                      <path
                        id="Path_1505"
                        data-name="Path 1505"
                        d="M252.072,79.347a3.372,3.372,0,0,1-3.374-3.374,3.378,3.378,0,0,0-3.374-3.374H184.374A3.372,3.372,0,0,1,181,69.226V11.874A3.372,3.372,0,0,1,184.374,8.5h67.7a3.372,3.372,0,0,1,3.374,3.374v64.1A3.372,3.372,0,0,1,252.072,79.347Z"
                        transform="translate(-181 -8.5)"
                        fill="#ff9e58"
                      />
                    </g>
                    <path
                      id="Path_1506"
                      data-name="Path 1506"
                      d="M380.737,8.5H347V72.6h26.989a3.378,3.378,0,0,1,3.374,3.374,3.374,3.374,0,1,0,6.747,0v-64.1A3.372,3.372,0,0,0,380.737,8.5Z"
                      transform="translate(-268.955 -8.5)"
                      fill="#ee7a27"
                    />
                    <g
                      id="Question_Message_1_"
                      transform="translate(13.495 13.495)"
                    >
                      <g
                        id="Group_1117"
                        data-name="Group 1117"
                        transform="translate(54.429)"
                      >
                        <path
                          id="Path_1507"
                          data-name="Path 1507"
                          d="M322.242,78.621a10.257,10.257,0,0,1-5.06,8.772,3.4,3.4,0,0,0-1.687,2.9,3.374,3.374,0,0,1-6.747,0,10.23,10.23,0,0,1,3.374-7.49,6.152,6.152,0,0,1,1.687-1.282,3.4,3.4,0,0,0,1.687-2.9,3.374,3.374,0,0,0-6.747,0,3.374,3.374,0,0,1-6.747,0,10.121,10.121,0,1,1,20.242,0Z"
                          transform="translate(-302 -68.5)"
                          fill="#f3f5f9"
                        />
                      </g>
                      <g
                        id="Group_1118"
                        data-name="Group 1118"
                        transform="translate(61.368 30.655)"
                      >
                        <circle
                          id="Ellipse_22"
                          data-name="Ellipse 22"
                          cx="3.199"
                          cy="3.199"
                          r="3.199"
                          transform="translate(0 0)"
                          fill="#f3f5f9"
                        />
                      </g>
                      <g
                        id="Group_1119"
                        data-name="Group 1119"
                        transform="translate(0 70.847)"
                      >
                        <path
                          id="Path_1508"
                          data-name="Path 1508"
                          d="M104.307,390.247H63.374a3.374,3.374,0,1,1,0-6.747h40.934a3.374,3.374,0,1,1,0,6.747Z"
                          transform="translate(-60 -383.5)"
                          fill="#f3f5f9"
                        />
                      </g>
                      <g
                        id="Group_1120"
                        data-name="Group 1120"
                        transform="translate(0 57.352)"
                      >
                        <path
                          id="Path_1509"
                          data-name="Path 1509"
                          d="M104.307,330.247H63.374a3.374,3.374,0,0,1,0-6.747h40.934a3.374,3.374,0,1,1,0,6.747Z"
                          transform="translate(-60 -323.5)"
                          fill="#f3f5f9"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_1121"
                      data-name="Group 1121"
                      transform="translate(37.336 13.495)"
                    >
                      <path
                        id="Path_1510"
                        data-name="Path 1510"
                        d="M350.374,206.874A3.373,3.373,0,0,0,347,203.5v6.747A3.374,3.374,0,0,0,350.374,206.874Z"
                        transform="translate(-306.291 -173.137)"
                        fill="#e2dff4"
                      />
                      <path
                        id="Path_1511"
                        data-name="Path 1511"
                        d="M357.121,78.621a10.257,10.257,0,0,1-5.06,8.772,3.4,3.4,0,0,0-1.687,2.9A3.341,3.341,0,0,1,347,93.668V82.8a6.152,6.152,0,0,1,1.687-1.282,3.4,3.4,0,0,0,1.687-2.9A3.341,3.341,0,0,0,347,75.247V68.5A10.107,10.107,0,0,1,357.121,78.621Z"
                        transform="translate(-306.291 -68.5)"
                        fill="#e2dff4"
                      />
                      <path
                        id="Path_1512"
                        data-name="Path 1512"
                        d="M186.467,383.5H166v6.747h20.467a3.374,3.374,0,0,0,0-6.747Z"
                        transform="translate(-166 -312.653)"
                        fill="#e2dff4"
                      />
                      <path
                        id="Path_1513"
                        data-name="Path 1513"
                        d="M186.467,323.5H166v6.747h20.467a3.374,3.374,0,0,0,0-6.747Z"
                        transform="translate(-166 -266.148)"
                        fill="#e2dff4"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="professional__panel__content__card__heading">
                Advising and informing you about your application procedure
              </div>
            </div>
          </div>
        </div>
        <div className="professional__panel__vacination">
          <div className="professional__panel__vacination__left">
            <div className="professional__panel__vacination__left__heading">
              A Redirection to the Vacancies Site
            </div>
            <button className="professional__panel__vacination__left__btn">
              Click Here
            </button>
          </div>
          <div className="professional__panel__vacination__right">
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
                      <rect x="0.5" y="0.5" width="6" height="28" fill="none" />
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
                  Upload CV
                </div>
              </div>
            </div>
            <div className="professional__panel__vacination__right__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quis enim earum recusandae id obcaecati, soluta
              distinctio optio quod, ratione doloremque dolore corrupti vitae
              sint tempora suscipit itaque omnis exercitationem!
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
export default Professional;
