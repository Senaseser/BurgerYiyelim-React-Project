import React from "react";
import Banner from "../assets/banner.jpeg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="order">
        <Link to="/menu">SİPARİŞ VER</Link>
      </div>
    </div>
  );
}

export default Home;
