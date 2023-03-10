import React from "react";
import "./Banner.css";
export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("assets/images/Bakery.jpg")`,
      }}
    >
      <div className="banner-content">
        <h1>Welcome to food ordering app</h1>
        <p>We deliver good quality patries</p>
      </div>
    </div>
  );
}
