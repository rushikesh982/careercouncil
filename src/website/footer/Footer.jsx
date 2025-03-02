import React from "react";
import "./footer.css";
import 'remixicon/fonts/remixicon.css'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer p-3 mt-5">
        <div className="row">
          <div className="col-12 col-md-6 left">
            <div className="nav-logo">
              <div className="nav-logo-inner">
                <NavLink className={"nav-link d-inline"} to={"/"}>
                  atlas
                </NavLink>
              </div>
            </div>
            <p className="text-light mb-5 mt-4">We are revolutionizing the career management and HR market. An app that <br /> combines data, technology, and a great user experience to help people <br /> achieve fulfilling lives.</p>
            <i class="ri-facebook-line"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-tiktok-line"></i>
            <i class="ri-linkedin-box-fill"></i>
          </div>
          <div className="col-12 col-md-6 text-light mt-5 right">
            <h5 className="fw-bold">Products</h5>
            <ul>
                <li>Career Finder</li>
                <li>Career optimize</li>
                <li>Career Guidence</li>
            </ul>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
}
