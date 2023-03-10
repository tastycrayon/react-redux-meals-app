import React from "react";
import Container from "../ui/Container";
import "./Footer.css";

export default function Footer({ onShowCart }) {
  return (
    <footer id="footer" className="site-footer">
      <Container>
        <div className="footer-text">
          &copy; {new Date().getFullYear()} All rights reserved
        </div>
      </Container>
    </footer>
  );
}
