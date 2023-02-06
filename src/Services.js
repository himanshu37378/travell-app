import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
function Services() {
  

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
    <div className="container">
    <Link to={'/'}><a className="navbar-brand js-scroll-trigger" href="#page-top">ITARA</a></Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
          <Link to={'/services'}><a className="nav-link js-scroll-trigger">Services</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/Plans'}><a className="nav-link js-scroll-trigger" >Plans</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/about'}><a className="nav-link js-scroll-trigger" href="/About">About</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/trips'}><a className="nav-link js-scroll-trigger" href="#team">Trips</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/contact'}><a className="nav-link js-scroll-trigger" href="#contact">Contact Us</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">OUR Services</h2>
          <h3 className="section-subheading text-muted">Let us tell you about the services offered by ITARA.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-bus fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Planning Trips</h4>
          <p className="text-muted">The main feature of the ITARA application is for planning the trips of the users that are visiting the application.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-bed fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Comfortable stays</h4>
          <p className="text-muted">ITARA also helps the users for providing them the best stays that are possible in the nearby places where they are visiting.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-map fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Personal Guides</h4>
          <p className="text-muted">ITARA also provide the users with the facility of Personal guides which helps the users througout the trip.</p>
        </div>
      </div>
    </div>
  </section>
  <Form />

</>

);
}

export default Services;

