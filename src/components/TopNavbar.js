import React from "react";
import "../style/css/TopNavbar.css";
import "../style/css/global/common.css";

function TopNavbar() {
  return (
    <div className="topnavbar commanpadding">
      <div className="topnavbar-left">
        <span>Offers</span>
        <span>Fanbook</span>
        <span>Download App</span>
        <span>Tribe Membership</span>
      </div>
      <div className="topnavbar-right">
        <span>Contact Us</span>
        <span>Track Order</span>
      </div>
    </div>
  );
}

export default TopNavbar;
