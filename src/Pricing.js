import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
function Pricing() {
  

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
  <div className="container py-3">
  <main>
    <section className="page-section" >
  <div className="container">
      <div className="row">
  <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">PLANS OFFERED BY  ITARA</h2>
          <h3 className="section-subheading text-muted">Come to know the plans offered us.</h3>
        </div>
        </div>
        </div>
       
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            
            <h4 className="my-0 fw-normal">One Night Stay</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">3500<small className="text-muted fw-light">/head</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>1 Guide included</li>
              <li>2 Meals</li>
              <li>Travel support</li>
              <li>Stay and accomodity included</li>
              <br/>
            </ul>
            <Link to={'/Contact'}><button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button></Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Two days Stay</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">5500<small className="text-muted fw-light">/head</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>2 Guide included</li>
              <li>5 Meals included</li>
              <li>Travel support</li>
              <li>Stay and accomodity included</li>
              <br/>
            </ul>
            <Link to={'/Contact'}><button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button></Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">One Weak Trip</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">11500<small className="text-muted fw-light">/head</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>3 Guide included</li>
              <li>15 Meals included</li>
              <li>Special travel support</li>
              <li>Special stays included</li>
              <li>Special arrangement for every person</li>
            </ul>
            <Link to={'/Contact'}><button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button></Link>
          </div>
        </div>
      </div>
    </div>
    </section>
   

  </main>

  
</div>

<Form />
</>
);
}

export default Pricing;