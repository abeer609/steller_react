import { useState } from "react";
import "./assets/css/vendors/themify-icons/css/themify-icons.css";

export default function Header({ name, work }) {
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="infos">
          <h6 className="subtitle">hello,I'm</h6>
          <h6 className="title">{name}</h6>
          <p>{work}</p>

          <div className="buttons pt-3">
            <button className="btn btn-primary rounded">HIRE ME</button>
            <button className="btn btn-dark rounded">DOWNLOAD CV</button>
          </div>

          <div className="socials mt-4">
            <a className="social-item" href="">
              <i className="ti-facebook"></i>
            </a>
            <a className="social-item" href="">
              <i className="ti-google"></i>
            </a>
            <a className="social-item" href="">
              <i className="ti-github"></i>
            </a>
            <a className="social-item" href="">
              <i className="ti-twitter"></i>
            </a>
          </div>
        </div>
        <div className="img-holder"></div>
      </div>

      <div className="widget">
        <div className="widget-item">
          <h2>124</h2>
          <p>Happy Clients</p>
        </div>
        <div className="widget-item">
          <h2>456</h2>
          <p>Project Completed</p>
        </div>
        <div className="widget-item">
          <h2>789</h2>
          <p>Awards Won</p>
        </div>
      </div>
    </header>
  );
}
