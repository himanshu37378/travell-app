import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import About from './About.js';
import Pricing from './Pricing';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Form from './Form';


function App() {

  return (
    
    <div className="App">
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
          <Link to={'/trips'}><a className="nav-link js-scroll-trigger">Trips</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/Pricing'}><a className="nav-link js-scroll-trigger" >Plans</a></Link>
          </li>
          <li className="nav-item">
          <Link to={'/about'}><a className="nav-link js-scroll-trigger" >About</a></Link>
          </li>
          
          <li className="nav-item">
          <Link to={'/Contact'}><a className="nav-link js-scroll-trigger">Contact Us</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Plan Your Next Holiday</div>
        <div className="intro-heading text-uppercase">WITH US AT ITARA</div>
        <Link to={'/Pricing'}><a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Plan My Trip</a></Link>
      </div>
    </div>
  </header>

  
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

  
  <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Destinations To Visit</h2>
              <h3 className="section-subheading text-muted">Destinations to go and have fun with your friends and family.</h3>
            </div>
          </div>

          <div className="row">            
                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/peru'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-star fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://www.outlookindia.com/outlooktraveller/public/uploads/2017/06/Longsheng-1024x683.jpg" alt="destination" />
                        </a></Link>
                        <div className="portfolio-caption">
                            <h4>PERU </h4>
                            
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/shimla'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src= "https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/Shimla.jpg" alt="destination" />
                        </a></Link>
                        <div className="portfolio-caption">
                            <h4>Shimla </h4>
                            
                        </div>
                        
                    </div>


                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/egypt'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-star fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src= "https://www.outlookindia.com/outlooktraveller/public/uploads/2017/06/Al-Farafra-Desert-2-1024x683.jpg" alt="destination" />
                        </a>?</Link>
                        <div className="portfolio-caption">
                            <h4>Farafra, Egypt </h4>
                            
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/england'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src= "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ggantija_Temples%2C_Xaghra%2C_Gozo.jpg" alt="destination" />
                        </a></Link>
                        <div className="portfolio-caption">
                            <h4>Stonehenge, England </h4>
                            
                        </div>
                        
                    </div>


                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/italy'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-star fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src= "https://www.outlookindia.com/outlooktraveller/public/uploads/2017/06/venice-1024x657.jpg" alt="destination" />
                        </a></Link>
                        <div className="portfolio-caption">
                            <h4>Venice, Italy </h4>
                            
                        </div>
                        
                    </div>


                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to={'/machu'}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://www.outlookindia.com/outlooktraveller/public/uploads/2017/06/Machu-Pichu-1024x687.jpg" alt="destination" />
                        </a></Link>
                        <div className="portfolio-caption">
                            <h4>Machu Picchu</h4>
                            
                        </div>
                        
                    </div>

                    
                
          </div>
        </div>
      </section>

  
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

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  

  <Form />
  
    </div>
    
  );
}



export default App;
