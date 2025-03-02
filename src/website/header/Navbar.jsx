import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar()
{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><div className="nav-logo"><div className="nav-logo-inner"><NavLink className={'nav-link d-inline'} to={'/'} >atlas</NavLink></div></div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-capitalize" href="#">methodology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Team</a>
        </li>
      </ul>
    
      <span>
        <button className="btn btn-outline-primary">Check out our app</button>
      </span>
    </div>
  </div>
</nav>
        </>
    )
}