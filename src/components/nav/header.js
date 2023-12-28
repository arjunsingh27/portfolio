import React from "react";
import "./header.css";
import Avatar from "@mui/material/Avatar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Burger from "./Burger";
import RightNav from "./RightNav";
import styled from "@emotion/styled";

const Nav = styled.nav`
  width: 90%;
  height: 80px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0px;
  }
`;
const BackSvg = styled.svg`
  width: 80vw;
  height: 600px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -20;
`;

const Header = () => {
  return (
    <>
      <BackSvg>
        <svg
          className="background_svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 952 799"
          fill="none"
        >
          <path
            d="M1337 156C1337 511.119 1037.7 799 668.5 799C299.298 799 0 511.119 0 156C0 -199.119 299.298 -487 668.5 -487C1037.7 -487 1337 -199.119 1337 156Z"
            fill="url(#paint0_radial_1_13)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_13"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-356.5 -7.00003) rotate(19.3694) scale(2026.18 2106.54)"
            >
              <stop stopColor="#52D3D8" />
              <stop offset="1" stopColor="#BBAACC" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </BackSvg>
      <Nav>
        <div className="logo">
          <Avatar alt="Arjun Singh Logo" src="./Header_logo.jpg" />
        </div>
        <Burger />
      </Nav>
    </>
  );
};
export default Header;
