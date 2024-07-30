import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2>CryptoTreasure.</h2>
      </div>
      <div className="footer-center">
        <h2>Get To Know Us</h2>
       <div className="anchor">
       <a href="#">Terms Of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
        <a href="#">About Us</a>
       </div>
      </div>
      <div className="footer-right">
        <h2> Contact Us </h2>
        <p>Email: shubhamchavan258@gmail.com</p>
        <p>Phone: +91 9960172144</p>
        <p>Address: A/P Vadaj Tal-Junnar Dist- Pune, Maharashtra 410502 </p>
      </div>
    </div>
  );
};

export default Footer;
