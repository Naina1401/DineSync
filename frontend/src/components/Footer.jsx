import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">DineSync</div>
          <div className="right">
            <p>123 Culinary Street, Mumbai, India</p>
            <p>Service Hours: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Crafted with ❤️ by the DineSync Team</p>
          </div>
          <div className="right">
            <p>&copy; {new Date().getFullYear()} DineSync. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
