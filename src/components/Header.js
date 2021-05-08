import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgrond = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgrond);
  window.addEventListener("mouseover", changeBackgrond);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={navbar ? "nav__bar active" : "nav__bar"}
    >
      <Navbar.Brand as={Link} to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200.285"
          height="50.838"
          viewBox="0 0 220.285 63.838"
        >
          <g
            id="Group_1042"
            data-name="Group 1042"
            transform="translate(-35.012 -14.732)"
          >
            <g
              id="Group_1040"
              data-name="Group 1040"
              transform="translate(122.75 71.077)"
            >
              <path
                id="Path_1316"
                data-name="Path 1316"
                d="M269.777,166.277a7.287,7.287,0,0,1,1.344-.113,2.216,2.216,0,0,1,1.569.443,1.351,1.351,0,0,1,.427,1.03,1.424,1.424,0,0,1-1.023,1.384v.024a1.353,1.353,0,0,1,.8,1.095,8.636,8.636,0,0,0,.418,1.489h-.724a7.237,7.237,0,0,1-.362-1.3c-.161-.749-.451-1.03-1.086-1.054h-.66v2.35h-.7Zm.7,2.471h.716c.749,0,1.224-.41,1.224-1.03,0-.7-.507-1.006-1.247-1.014a2.857,2.857,0,0,0-.692.065Z"
                transform="translate(-269.777 -165.915)"
                fill="#fff"
              />
              <path
                id="Path_1317"
                data-name="Path 1317"
                d="M285.983,172.292a1.248,1.248,0,0,0,1.336,1.352,2.566,2.566,0,0,0,1.079-.2l.121.507a3.125,3.125,0,0,1-1.3.25,1.815,1.815,0,0,1-1.915-1.972,1.891,1.891,0,0,1,1.827-2.1,1.65,1.65,0,0,1,1.61,1.835,2.706,2.706,0,0,1-.024.33Zm2.076-.507a1.008,1.008,0,0,0-.982-1.151,1.174,1.174,0,0,0-1.087,1.151Z"
                transform="translate(-279.503 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1318"
                data-name="Path 1318"
                d="M303.83,173.979a2.585,2.585,0,0,1-1.119.233,1.857,1.857,0,0,1-1.94-2,1.979,1.979,0,0,1,2.092-2.069,2.361,2.361,0,0,1,.982.2l-.161.547a1.644,1.644,0,0,0-.821-.185,1.469,1.469,0,0,0-.024,2.93,2.01,2.01,0,0,0,.869-.193Z"
                transform="translate(-289.188 -168.41)"
                fill="#fff"
              />
              <path
                id="Path_1319"
                data-name="Path 1319"
                d="M315.8,171.431c0-.459-.008-.853-.032-1.215h.62l.024.765h.032a1.168,1.168,0,0,1,1.078-.853.751.751,0,0,1,.2.024v.668a1.067,1.067,0,0,0-.241-.024.993.993,0,0,0-.95.909,1.994,1.994,0,0,0-.032.33v2.076h-.7Z"
                transform="translate(-298.577 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1320"
                data-name="Path 1320"
                d="M330.786,173.2c0,.4.008.757.032,1.063h-.628l-.04-.636h-.016a1.466,1.466,0,0,1-1.288.724c-.612,0-1.344-.338-1.344-1.706v-2.277h.708v2.157c0,.741.225,1.24.869,1.24a1,1,0,0,0,1-1.006v-2.39h.708Z"
                transform="translate(-305.929 -168.545)"
                fill="#fff"
              />
              <path
                id="Path_1321"
                data-name="Path 1321"
                d="M344.749,166.693a.439.439,0,0,1-.878,0,.432.432,0,0,1,.443-.443A.421.421,0,0,1,344.749,166.693Zm-.789,4.99v-3.9h.708v3.9Z"
                transform="translate(-316.18 -165.969)"
                fill="#fff"
              />
              <path
                id="Path_1322"
                data-name="Path 1322"
                d="M353.934,167.866v.934h1.014v.539h-1.014v2.1c0,.483.137.756.531.756a1.326,1.326,0,0,0,.411-.048l.032.531a1.705,1.705,0,0,1-.628.1.986.986,0,0,1-.765-.306,1.444,1.444,0,0,1-.274-1.014v-2.125h-.6V168.8h.6v-.716Z"
                transform="translate(-321.67 -166.981)"
                fill="#fff"
              />
              <path
                id="Path_1323"
                data-name="Path 1323"
                d="M365.571,171.27c0-.4-.008-.733-.032-1.054h.62l.033.628h.024a1.343,1.343,0,0,1,1.224-.716,1.151,1.151,0,0,1,1.1.781h.016a1.6,1.6,0,0,1,.435-.507,1.329,1.329,0,0,1,.861-.274c.515,0,1.28.338,1.28,1.69v2.294h-.692v-2.205c0-.748-.274-1.2-.845-1.2a.917.917,0,0,0-.837.644,1.169,1.169,0,0,0-.056.354v2.406h-.692v-2.334c0-.62-.274-1.07-.813-1.07a.968.968,0,0,0-.878.708.982.982,0,0,0-.056.346v2.35h-.692Z"
                transform="translate(-329.75 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1324"
                data-name="Path 1324"
                d="M388.185,172.292a1.248,1.248,0,0,0,1.336,1.352,2.565,2.565,0,0,0,1.079-.2l.121.507a3.125,3.125,0,0,1-1.3.25,1.815,1.815,0,0,1-1.916-1.972,1.891,1.891,0,0,1,1.827-2.1,1.65,1.65,0,0,1,1.61,1.835,2.627,2.627,0,0,1-.024.33Zm2.076-.507a1.008,1.008,0,0,0-.982-1.151,1.173,1.173,0,0,0-1.086,1.151Z"
                transform="translate(-343.509 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1325"
                data-name="Path 1325"
                d="M403.674,171.27c0-.4-.008-.733-.032-1.054h.628l.04.644h.016a1.433,1.433,0,0,1,1.288-.732c.539,0,1.376.322,1.376,1.658v2.326h-.709v-2.245c0-.628-.233-1.151-.9-1.151a1.006,1.006,0,0,0-.95.724,1.02,1.02,0,0,0-.048.33v2.342h-.708Z"
                transform="translate(-353.613 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1326"
                data-name="Path 1326"
                d="M420.381,167.866v.934H421.4v.539h-1.014v2.1c0,.483.137.756.531.756a1.323,1.323,0,0,0,.41-.048l.033.531a1.707,1.707,0,0,1-.628.1.986.986,0,0,1-.765-.306,1.442,1.442,0,0,1-.274-1.014v-2.125h-.6V168.8h.6v-.716Z"
                transform="translate(-363.284 -166.981)"
                fill="#fff"
              />
              <path
                id="Path_1327"
                data-name="Path 1327"
                d="M444.167,171.548c-.153-.153-.3-.306-.507-.531a2.223,2.223,0,0,1-1.586.62,1.535,1.535,0,0,1-1.666-1.521,1.782,1.782,0,0,1,1.063-1.586v-.024a1.864,1.864,0,0,1-.451-1.135,1.316,1.316,0,0,1,1.376-1.336,1.129,1.129,0,0,1,1.2,1.151c0,.571-.33,1.022-1.191,1.449v.024c.459.531.974,1.127,1.32,1.513a3.978,3.978,0,0,0,.523-1.586h.644a4.125,4.125,0,0,1-.781,2c.29.306.571.612.893.958Zm-1.964-.443a1.511,1.511,0,0,0,1.111-.491c-.322-.354-.926-1.014-1.529-1.706a1.334,1.334,0,0,0-.7,1.1,1.07,1.07,0,0,0,1.111,1.095Zm.137-4.588a.705.705,0,0,0-.676.789,1.523,1.523,0,0,0,.41.974c.548-.314.9-.6.9-1.062a.639.639,0,0,0-.628-.7Z"
                transform="translate(-376.638 -165.834)"
                fill="#fff"
              />
              <path
                id="Path_1328"
                data-name="Path 1328"
                d="M471.574,171.371a3.445,3.445,0,0,1-1.433.266,2.541,2.541,0,0,1-2.68-2.753,2.7,2.7,0,0,1,2.833-2.849,2.912,2.912,0,0,1,1.288.241l-.169.571a2.551,2.551,0,0,0-1.094-.225,2.017,2.017,0,0,0-2.117,2.238,1.972,1.972,0,0,0,2.085,2.181,2.8,2.8,0,0,0,1.143-.225Z"
                transform="translate(-393.581 -165.834)"
                fill="#fff"
              />
              <path
                id="Path_1329"
                data-name="Path 1329"
                d="M488.241,172.131a1.9,1.9,0,0,1-1.94,2.069,1.852,1.852,0,0,1-1.867-2,1.9,1.9,0,0,1,1.932-2.069A1.844,1.844,0,0,1,488.241,172.131Zm-3.09.04c0,.853.491,1.5,1.183,1.5.676,0,1.183-.636,1.183-1.513,0-.66-.33-1.5-1.167-1.5S485.15,171.431,485.15,172.171Z"
                transform="translate(-404.211 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1330"
                data-name="Path 1330"
                d="M501.633,171.27c0-.4-.008-.733-.032-1.054h.628l.04.644h.016a1.433,1.433,0,0,1,1.288-.732c.539,0,1.376.322,1.376,1.658v2.326h-.708v-2.245c0-.628-.233-1.151-.9-1.151a1.006,1.006,0,0,0-.95.724,1.02,1.02,0,0,0-.048.33v2.342h-.708Z"
                transform="translate(-414.962 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1331"
                data-name="Path 1331"
                d="M517.759,173.387a1.857,1.857,0,0,0,.934.282c.515,0,.756-.258.756-.58,0-.338-.2-.523-.724-.716-.7-.249-1.03-.636-1.03-1.1a1.2,1.2,0,0,1,1.344-1.143,1.942,1.942,0,0,1,.958.241l-.177.515a1.517,1.517,0,0,0-.8-.225c-.418,0-.652.241-.652.531,0,.322.234.467.74.66.676.257,1.023.6,1.023,1.175,0,.684-.531,1.175-1.457,1.175a2.221,2.221,0,0,1-1.095-.274Z"
                transform="translate(-424.97 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1332"
                data-name="Path 1332"
                d="M534.738,173.2c0,.4.008.757.032,1.063h-.628l-.04-.636h-.016a1.466,1.466,0,0,1-1.288.724c-.612,0-1.344-.338-1.344-1.706v-2.277h.708v2.157c0,.741.225,1.24.869,1.24a1.024,1.024,0,0,0,.934-.644,1.04,1.04,0,0,0,.064-.362v-2.39h.708Z"
                transform="translate(-433.658 -168.545)"
                fill="#fff"
              />
              <path
                id="Path_1333"
                data-name="Path 1333"
                d="M548.06,165.5h.708v5.714h-.708Z"
                transform="translate(-444.058 -165.497)"
                fill="#fff"
              />
              <path
                id="Path_1334"
                data-name="Path 1334"
                d="M557.929,167.866v.934h1.014v.539h-1.014v2.1c0,.483.137.756.531.756a1.325,1.325,0,0,0,.411-.048l.032.531a1.705,1.705,0,0,1-.628.1.986.986,0,0,1-.765-.306,1.444,1.444,0,0,1-.274-1.014v-2.125h-.6V168.8h.6v-.716Z"
                transform="translate(-449.427 -166.981)"
                fill="#fff"
              />
              <path
                id="Path_1335"
                data-name="Path 1335"
                d="M571.844,173.177a5.452,5.452,0,0,0,.065.934h-.644l-.056-.491h-.024a1.452,1.452,0,0,1-1.191.579,1.11,1.11,0,0,1-1.191-1.119c0-.942.837-1.457,2.342-1.449v-.08a.8.8,0,0,0-.885-.9,1.942,1.942,0,0,0-1.014.29l-.161-.467a2.416,2.416,0,0,1,1.28-.346c1.191,0,1.481.813,1.481,1.594Zm-.684-1.054c-.773-.016-1.65.121-1.65.877a.627.627,0,0,0,.668.676.969.969,0,0,0,.941-.652.735.735,0,0,0,.04-.225Z"
                transform="translate(-457.048 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1336"
                data-name="Path 1336"
                d="M584.622,171.27c0-.4-.008-.733-.032-1.054h.628l.04.644h.016a1.431,1.431,0,0,1,1.287-.732c.539,0,1.376.322,1.376,1.658v2.326h-.708v-2.245c0-.628-.234-1.151-.9-1.151a1.007,1.007,0,0,0-.95.724,1.021,1.021,0,0,0-.048.33v2.342h-.708Z"
                transform="translate(-466.935 -168.397)"
                fill="#fff"
              />
              <path
                id="Path_1337"
                data-name="Path 1337"
                d="M603.609,173.979a2.587,2.587,0,0,1-1.119.233,1.857,1.857,0,0,1-1.94-2,1.979,1.979,0,0,1,2.093-2.069,2.363,2.363,0,0,1,.982.2l-.161.547a1.644,1.644,0,0,0-.821-.185,1.469,1.469,0,0,0-.024,2.93,2.012,2.012,0,0,0,.869-.193Z"
                transform="translate(-476.931 -168.41)"
                fill="#fff"
              />
              <path
                id="Path_1338"
                data-name="Path 1338"
                d="M615.409,170.364l.853,2.3c.089.257.185.564.25.8h.016c.073-.233.153-.531.249-.813l.773-2.286h.749l-1.062,2.777a5.932,5.932,0,0,1-1.336,2.439,1.921,1.921,0,0,1-.869.459l-.177-.6a1.874,1.874,0,0,0,.62-.346,2.145,2.145,0,0,0,.6-.789.506.506,0,0,0,.056-.169.618.618,0,0,0-.048-.185l-1.441-3.59Z"
                transform="translate(-485.753 -168.545)"
                fill="#fff"
              />
            </g>
            <path
              id="Path_1339"
              data-name="Path 1339"
              d="M104.175,14.732,73.105,45.723l31.07,31.069,31.07-31.069Zm-23.1,31.03,23.1-23.074,22.862,23.074L104.175,68.915Z"
              transform="translate(-23.857)"
              fill="#f47727"
            />
            <path
              id="Path_1340"
              data-name="Path 1340"
              d="M35.012,38.036V82.442H71.373l-4.365-4.365h-27.6V42.558H74.927V78.077H74.9l4.356,4.365h.165V38.036Z"
              transform="translate(0 -14.595)"
              fill="#0499d3"
            />
            <g
              id="Group_1041"
              data-name="Group 1041"
              transform="translate(122.707 23.836)"
            >
              <path
                id="Path_1341"
                data-name="Path 1341"
                d="M372.869,64.222V39.149c.139-.013.248-.031.358-.031,2.944,0,5.889-.045,8.832.013a8.133,8.133,0,0,1,4.924,1.666,6.022,6.022,0,0,1,2.066,3.01,8.791,8.791,0,0,1,.3,4.04,6.984,6.984,0,0,1-1.307,3.242.489.489,0,0,0-.032.127c.092.09.2.2.309.3a6.994,6.994,0,0,1,2.163,5.07,8.494,8.494,0,0,1-.474,3.224,6.117,6.117,0,0,1-2.235,2.986,7.966,7.966,0,0,1-4.645,1.459c-3.313.025-6.628,0-9.941,0C373.092,64.253,373,64.235,372.869,64.222Zm4.153-4.232c.152.015.262.036.372.036,1.948,0,3.9.009,5.843-.007a3.386,3.386,0,0,0,1-.167,2.71,2.71,0,0,0,1.989-2.177A3.938,3.938,0,0,0,386.1,55.7a1.933,1.933,0,0,0-.276-.523,3.281,3.281,0,0,0-2.719-1.358c-1.9-.027-3.81-.007-5.715,0a3.521,3.521,0,0,0-.37.04Zm.007-10.442c.3.017.575.045.852.046q1.9.007,3.793,0a8.2,8.2,0,0,0,.977-.062,2.91,2.91,0,0,0,2.59-2.72c0-.227.012-.455,0-.681a2.673,2.673,0,0,0-1.336-2.243,3.524,3.524,0,0,0-1.818-.535c-1.591-.022-3.182-.008-4.773,0a1.594,1.594,0,0,0-.284.054Z"
                transform="translate(-334.298 -39.097)"
                fill="#fff"
              />
              <path
                id="Path_1342"
                data-name="Path 1342"
                d="M281.564,55.185c1.111,1.493,2.221,3,3.348,4.5s2.234,2.988,3.41,4.554h-5.237l-6.2-8.332h-3.023a1.917,1.917,0,0,0-.049.3q0,3.794,0,7.588c0,.138-.016.276-.028.451-1.392.037-2.748.012-4.126.009v-25.1c.148-.013.27-.034.392-.034,2.617,0,5.236-.052,7.852.012a8.954,8.954,0,0,1,6.124,2.42,6.874,6.874,0,0,1,1.931,3.5,10.045,10.045,0,0,1-.05,5.181,7.383,7.383,0,0,1-3.569,4.482c-.234.135-.475.255-.712.385C281.609,55.1,281.6,55.134,281.564,55.185Zm-7.719-3.553c.126.01.222.024.318.024,1.251,0,2.5.008,3.753-.006a5.884,5.884,0,0,0,.928-.115,4.013,4.013,0,0,0,2.537-1.592,2.521,2.521,0,0,0,.545-1.233,10.04,10.04,0,0,0,.089-1.57A3.56,3.56,0,0,0,280.209,44a4.648,4.648,0,0,0-2.31-.657c-1.251-.021-2.5-.007-3.753,0a2.06,2.06,0,0,0-.3.046Z"
                transform="translate(-269.662 -39.092)"
                fill="#fff"
              />
              <path
                id="Path_1343"
                data-name="Path 1343"
                d="M338.873,60.04v4.207c-1.751.073-3.48.013-5.209.028s-3.471,0-5.206,0-3.464,0-5.153,0c-.055-.062-.064-.071-.073-.083a.137.137,0,0,1-.021-.037.466.466,0,0,1-.03-.123q0-12.321,0-24.641a.467.467,0,0,1,.022-.125,1.065,1.065,0,0,1,.074-.139c1.321-.006,2.677-.005,4.093,0,.016,1.784.006,3.513.007,5.242s0,3.467,0,5.2V60a11.864,11.864,0,0,0,1.455.037c.469.006.939,0,1.408,0h8.632Z"
                transform="translate(-303.179 -39.109)"
                fill="#fff"
              />
              <path
                id="Path_1344"
                data-name="Path 1344"
                d="M325.461,130.457v5.24a3.3,3.3,0,0,1-1.875.018V121.428a5.178,5.178,0,0,1,1.856-.027l.048.812a5.294,5.294,0,0,1,4.536-1.007,5.143,5.143,0,0,1,2.986,1.993,5.344,5.344,0,0,1-.314,6.717A5.288,5.288,0,0,1,325.461,130.457Zm-.031-4.1a8.147,8.147,0,0,0,.171.827,3.794,3.794,0,0,0,1.812,2.176,2.6,2.6,0,0,0,2.256.244,3.82,3.82,0,0,0,2.22-2.006,2.768,2.768,0,0,0,.1-2.239,3.709,3.709,0,0,0-1.874-2.069,2.678,2.678,0,0,0-1.859-.256,3.64,3.64,0,0,0-2.338,1.783A2.972,2.972,0,0,0,325.43,126.359Z"
                transform="translate(-303.433 -90.425)"
                fill="#fff"
              />
              <path
                id="Path_1345"
                data-name="Path 1345"
                d="M420.311,127.322a.759.759,0,0,0,.146.632,3.651,3.651,0,0,0,3.533,1.757,4.6,4.6,0,0,0,1.54-.458,1.4,1.4,0,0,0,.758-.875.392.392,0,0,1,.056-.114.646.646,0,0,1,.09-.085h1.881a1.024,1.024,0,0,1-.037.8,3.516,3.516,0,0,1-1.594,1.83,5.714,5.714,0,0,1-6.381-.265,5.2,5.2,0,0,1-1.959-3.239,5.139,5.139,0,0,1,.684-3.721,5.239,5.239,0,0,1,6.51-2.133,4.952,4.952,0,0,1,3.188,4.675,9.113,9.113,0,0,1-.033.936,1.129,1.129,0,0,1-.093.254l-4.159.007Q422.374,127.324,420.311,127.322Zm-.035-1.946c.43.046.849.021,1.265.027s.852,0,1.277,0h1.32c.426,0,.852.009,1.277,0a6.593,6.593,0,0,0,1.249-.044,3.319,3.319,0,0,0-6.39.018Z"
                transform="translate(-362.717 -90.414)"
                fill="#fff"
              />
              <path
                id="Path_1346"
                data-name="Path 1346"
                d="M574.6,131.337h-1.8l-.048-.829a5.252,5.252,0,0,1-5.163.815,5.154,5.154,0,0,1-2.631-2.208,5.268,5.268,0,0,1,.789-6.506,5.029,5.029,0,0,1,3.419-1.532,4.752,4.752,0,0,1,3.578,1.186c.018-.339.031-.593.047-.906.622-.033,1.209,0,1.76-.02.048.051.058.061.067.072a.123.123,0,0,1,.024.034.433.433,0,0,1,.032.122q.006,4.794.009,9.588a.22.22,0,0,1-.02.082A.932.932,0,0,1,574.6,131.337Zm-1.8-5.011a4.7,4.7,0,0,0-.13-.769,3.759,3.759,0,0,0-2.183-2.366,2.515,2.515,0,0,0-1.584-.159,3.736,3.736,0,0,0-2.484,1.983,2.623,2.623,0,0,0-.195,2.262,3.832,3.832,0,0,0,1.394,1.839,2.82,2.82,0,0,0,3.557.043A3.538,3.538,0,0,0,572.8,126.326Z"
                transform="translate(-454.111 -90.432)"
                fill="#fff"
              />
              <path
                id="Path_1347"
                data-name="Path 1347"
                d="M381.706,126.256a5.25,5.25,0,1,1-10.5.275,5.25,5.25,0,1,1,10.5-.275Zm-5.211-3.286a3.38,3.38,0,0,0-3.389,3.427,3.359,3.359,0,1,0,3.389-3.427Z"
                transform="translate(-333.257 -90.427)"
                fill="#fff"
              />
              <path
                id="Path_1348"
                data-name="Path 1348"
                d="M507.242,121.068a5.3,5.3,0,1,1-5.287,5.289A5.289,5.289,0,0,1,507.242,121.068Zm-3.383,5.3a3.358,3.358,0,1,0,3.361-3.4A3.384,3.384,0,0,0,503.859,126.373Z"
                transform="translate(-415.14 -90.431)"
                fill="#fff"
              />
              <path
                id="Path_1349"
                data-name="Path 1349"
                d="M535.75,131.339h-1.86c-.03-.842-.008-1.672-.012-2.5s0-1.648,0-2.472v-5h1.831c.017.213.035.425.055.678a1.967,1.967,0,0,0,.275-.122,5.631,5.631,0,0,1,3.881-.8,5.121,5.121,0,0,1,1.978.618,4.685,4.685,0,0,1,2.07,2.667,7.242,7.242,0,0,1,.39,2.427c-.007,1.378-.005,2.756-.009,4.134,0,.109-.019.218-.032.36h-1.834c-.009-.155-.023-.291-.024-.428,0-1.406,0-2.813,0-4.219a4.751,4.751,0,0,0-.19-1.472,3.124,3.124,0,0,0-3-2.238,3.076,3.076,0,0,0-3.186,1.888,4.214,4.214,0,0,0-.333,1.7q0,2.173,0,4.347Z"
                transform="translate(-435.13 -90.43)"
                fill="#fff"
              />
              <path
                id="Path_1350"
                data-name="Path 1350"
                d="M447.619,128.568h1.819a1.238,1.238,0,0,0,.623.824,3.13,3.13,0,0,0,1.567.335,2.772,2.772,0,0,0,1.23-.309,1.158,1.158,0,0,0,.611-.625.908.908,0,0,0-.363-1.017,2.454,2.454,0,0,0-1.566-.46,5,5,0,0,1-1.67-.3,3.051,3.051,0,0,1-2.037-2.923,2.984,2.984,0,0,1,2.146-2.832,4.88,4.88,0,0,1,3.1.022,2.983,2.983,0,0,1,2.054,2.542,1.6,1.6,0,0,1-.018.3c-.589.027-1.165.021-1.709.007-.051-.053-.082-.071-.088-.095-.193-.774-.823-.965-1.484-1.073a2.354,2.354,0,0,0-1.64.325.983.983,0,0,0-.135,1.623,1.988,1.988,0,0,0,1.382.467,5.547,5.547,0,0,1,1.843.294,3.07,3.07,0,0,1,2.081,2.851,2.848,2.848,0,0,1-1.594,2.593,4.888,4.888,0,0,1-2.9.48,3.537,3.537,0,0,1-2.545-1.215A3.013,3.013,0,0,1,447.619,128.568Z"
                transform="translate(-381.111 -90.404)"
                fill="#fff"
              />
              <path
                id="Path_1351"
                data-name="Path 1351"
                d="M477.554,124.136h-1.738a1.912,1.912,0,0,0-2.232-1.143,4.507,4.507,0,0,0-.994.352c-.588.264-.512,1.305-.078,1.613a2.49,2.49,0,0,0,1.352.451,9.519,9.519,0,0,1,1.227.115,3.18,3.18,0,0,1,2.72,2.784,2.539,2.539,0,0,1-.49,1.808,3.35,3.35,0,0,1-2.4,1.462,5.686,5.686,0,0,1-2.616-.16,3.15,3.15,0,0,1-2.239-2.6,1.007,1.007,0,0,1,.019-.238h1.8c.229.8.87,1,1.591,1.117a3.062,3.062,0,0,0,1.824-.265.925.925,0,0,0,.223-1.658,2.423,2.423,0,0,0-1.486-.444,5.008,5.008,0,0,1-1.753-.309,3.049,3.049,0,0,1,.536-5.859,5.2,5.2,0,0,1,2.695.131,3.049,3.049,0,0,1,2.082,2.657A.854.854,0,0,1,477.554,124.136Z"
                transform="translate(-395.164 -90.421)"
                fill="#fff"
              />
              <path
                id="Path_1352"
                data-name="Path 1352"
                d="M602.817,128.576h1.8c.2.823.863.986,1.551,1.114a2.909,2.909,0,0,0,1.9-.283.9.9,0,0,0,.593-.809.968.968,0,0,0-.554-.927,2.656,2.656,0,0,0-1.39-.342,4.679,4.679,0,0,1-1.669-.3,3.069,3.069,0,0,1-1.79-1.719,3.034,3.034,0,0,1,2.3-4.152,5.025,5.025,0,0,1,2.733.151,3.015,3.015,0,0,1,2.032,2.607.563.563,0,0,1-.02.155,5.325,5.325,0,0,1-1.816.016,1.083,1.083,0,0,0-.645-.86,2.549,2.549,0,0,0-1.491-.249,2.369,2.369,0,0,0-1.038.357,1,1,0,0,0-.121,1.554,2.155,2.155,0,0,0,1.409.513,10.322,10.322,0,0,1,1.475.179,3.068,3.068,0,0,1,2.452,2.77,2.786,2.786,0,0,1-1.308,2.614,3.879,3.879,0,0,1-2.043.659,5.391,5.391,0,0,1-2.43-.318,3.137,3.137,0,0,1-1.958-2.543A.863.863,0,0,1,602.817,128.576Z"
                transform="translate(-478.289 -90.416)"
                fill="#fff"
              />
              <path
                id="Path_1353"
                data-name="Path 1353"
                d="M406.431,109.305v1.767a2.671,2.671,0,0,0-.283.081,4.177,4.177,0,0,0-.774.339,1.435,1.435,0,0,0-.707,1.155c-.014.407,0,.814,0,1.268h1.741a10.553,10.553,0,0,1,.031,1.919h-1.761c-.016.146-.037.252-.038.359q0,3.623,0,7.246c0,.151-.013.3-.021.487h-1.87c0-.453-.01-.886-.012-1.32,0-.455,0-.909,0-1.364v-5.359c-.6-.1-1.178.01-1.784-.071a14.884,14.884,0,0,1,0-1.871h1.783c0-.369,0-.69,0-1.01a3.5,3.5,0,0,1,.542-1.943,3.581,3.581,0,0,1,2.831-1.739,1.341,1.341,0,0,1,.212,0C406.345,109.253,406.369,109.274,406.431,109.305Z"
                transform="translate(-351.867 -83.028)"
                fill="#fff"
              />
              <path
                id="Path_1354"
                data-name="Path 1354"
                d="M596.112,109.978h1.811a4.367,4.367,0,0,1,.051.469q0,6.8,0,13.595a3.121,3.121,0,0,1-.04.349h-1.788c-.107-.346-.159-10.408-.08-14.034A3.689,3.689,0,0,1,596.112,109.978Z"
                transform="translate(-474.055 -83.486)"
                fill="#fff"
              />
              <path
                id="Path_1355"
                data-name="Path 1355"
                d="M355.335,121.373h1.783a2.662,2.662,0,0,1,.056.322c.006.108-.012.217-.025.422a5.7,5.7,0,0,1,3.3-1.023,5.107,5.107,0,0,1,.038,1.853c-.235.043-.483.086-.73.133a3,3,0,0,0-2.462,2.5,7.929,7.929,0,0,0-.107,1.226c-.013,1.349,0,2.7-.007,4.046,0,.152-.016.305-.028.52-.617,0-1.2.016-1.821-.013Z"
                transform="translate(-323.317 -90.446)"
                fill="#fff"
              />
              <path
                id="Path_1356"
                data-name="Path 1356"
                d="M495.094,121.848h1.714c.113.327.131,9.584.018,9.979h-1.741C494.975,131.449,494.985,122.184,495.094,121.848Z"
                transform="translate(-410.79 -90.92)"
                fill="#fff"
              />
              <path
                id="Path_1357"
                data-name="Path 1357"
                d="M495.953,115.767c-.441.076-.973-.5-.956-.952a1.057,1.057,0,0,1,.951-.936,1.042,1.042,0,0,1,.955.974C496.9,115.243,496.434,115.834,495.953,115.767Z"
                transform="translate(-410.783 -85.929)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/vacancies" className="nav__link">
            Vacancies
          </Nav.Link>
          <Nav.Link as={Link} to="/professionals" className="nav__link">
            Professionals
          </Nav.Link>
          <Nav.Link as={Link} to="/clients" className="nav__link">
            Clients
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="nav__link">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav__link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
