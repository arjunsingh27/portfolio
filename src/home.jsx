import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./home.css";
import { pink } from "@mui/material/colors";
function home() {
    // const iconStyle = {
    //     fontSize: 40, // Set the desired size for the icons
    //     color: "#007bb5", // Set the desired color for the icons
    //     margin: "0 10px", // Add margin between the icons
    //   };
  return (
    <div className="home_container">
      <div className="home_container_left">
        <div className="home_container_left_heading">
          <h2>Hi!, I'm A rjun singh</h2>
          <h2>Mern Stack</h2>
          <h1>Developer</h1>
          <div className="home_container_left_heading_button">
          <a
              href="https://www.instagram.com/chaudhary____arjun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{color:"pink",fontSize:40}}/>
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-singh-27-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{color: "#007bb5",fontSize:40}} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC5KgT3y1u1BojUXn92pToww"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon style={{color: "red",fontSize:40}}/>
            </a>
          </div>
        </div>
      </div>
      <div className="home_container_rigth"></div>
    </div>
  );
}
export default home;
