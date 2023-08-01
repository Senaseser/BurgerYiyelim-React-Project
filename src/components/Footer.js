import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p>Tüm hakları saklıdır. | BurgerYiyelim</p>
    </div>
  );
}

export default Footer;
