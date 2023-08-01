import React from "react";
import Banner from "../assets/taksim.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftside"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightside">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          ></input>
          <label style={{ paddingBottom: "10px" }}>Mesajınız</label>
          <textarea
            rows={6}
            name="mesaj"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
