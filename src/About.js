import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Pricing from './Pricing';
import Home from './Home.js';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Form from './Form';

function About() {
  

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
  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About ITARA</h2>
          <h3 className="section-subheading text-muted">Come to know more about us.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>January 2022</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">The main objective to create the ITARA is to provide the users with each and every facility all at one place if any person wants to plan a trip then the main focus of Itara is to provide him with all the things he wants in one place.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2022</h4>
                  <h4 className="subheading">We Planned our First Trip</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">The main objective to create the ITARA is to provide the users with each and every facility all at one place if any person wants to plan a trip then the main focus of Itara is to provide him with all the things he wants in one place.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2022</h4>
                  <h4 className="subheading">We Planned An International Trip.</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">The main objective to create the ITARA is to provide the users with each and every facility all at one place if any person wants to plan a trip then the main focus of Itara is to provide him with all the things he wants in one place.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2022</h4>
                  <h4 className="subheading">We Launched our Plans For Trips.</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Overall the main motive of the application is that if a user wants to plan a trip then he just opens ITARA application and there he can get all the facilities he/she can be searching for either it is related to travelling, stays, tickets, cabs, etc.

</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Tours</h2>
          <h3 className="section-subheading text-muted">Some of the tours done by ITARA .</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://free4kwallpapers.com/uploads/originals/2021/03/11/forest-mountains-with-a-blue-filter-wallpaper.jpg" alt=""/>
            <h4>Kay Glaciars</h4>
            
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg" alt=""/>
            <h4>Larry hills</h4>
            </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPq66kPmXSHQrulyMFtfdM4kdaOnqaN2Z-UQCDpyCzOV-HRxITgwCgVaqqfkjutuWlqw&usqp=CAU" alt=""/>
            <h4>Diana Beach</h4>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Overall the main motive of the application is that if a user wants to plan a trip then he just opens ITARA application and there he can get all the facilities he/she can be searching for either it is related to travelling, stays, tickets, cabs, etc.</p>
        </div>
      </div>
    </div>
  </section>

  <Form />
</>
);
}

export default About;
