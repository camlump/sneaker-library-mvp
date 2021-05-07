import React, { useState, useEffect } from "react";
import "../stylesheets/SideNav.css";
import api from "../api";
import { Link } from "react-router-dom";

import { sneakerSiteData } from "../siteData";

const SideBarNav = () => {
  // const [brands, setBrands]= useState([]);

  // useEffect(() => {
  //     const fetchData = () => {
  //         api.getBrand().then((response)=>{
  //             setBrands(response.data.results);
  //             console.log(response.data.results);
  //         });
  //     };

  //     fetchData();
  // }, [])

  return (
    <div style={sideNavStyle}>
      <div className="brand-box">
        <h3>Websites to Buy</h3>

        {sneakerSiteData.siteLinks.map((link) => {
          return (
            <div className="link-box">
              <ul>
                <li>
                  <a href={link.link} target="_blank">
                    <h3>{link.name}</h3>
                  </a>
                 {/* <a href={link.link} target="_blank"><img style={logos} src={link.icon} alt=""/></a>  */}
                  
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="brand-box">
      <h3>Sneaker News.</h3>
      {sneakerSiteData.newsLink.map((link)=>{
          return (
            <div className="link-box">
            <ul>
              <li>
                <a href={link.link} target="_blank">
                  <h3>{link.name}</h3>
                </a>
               
              </li>
            </ul>
          </div>
            
          )
      })}
    </div>
    </div>
  );
};


const logos = {
  width: "90px",
  
}

const sideNavStyle = {
  height: "100vh",
  width: "250px",
  background: "#fff",
  top: "60vh",
  position: "absolute",
  borderRight: " 1px solid #eee",
  left: 0,
  textAlign: "left",
  zIndex: 1,
};

const color = {
  color: "#111",
  fontSize: "32px",
  fontFamily: "Source Sans Pro",
};

const linkStyle = {
  color: "#111",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
  textDecoration: "none",
};

export default SideBarNav;