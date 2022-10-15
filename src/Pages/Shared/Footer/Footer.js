import "./Footer.css";
import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-dark text-light py-5 text-center">
      <h6>
        &copy;
        <small> COPYRIGHT JUMEIRAH INTERNATIONAL LLC {year}</small>
      </h6>
    </div>
  );
};

export default Footer;
