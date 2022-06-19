import React from "react";
import { CityLogo } from "../Utils/tools";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
      </div>
      <div className="footer_desc1">
        Manchester city 2022. All rights reserved. This is just a React Class
        Project.
      </div>
    </footer>
  );
};

export default Footer;
