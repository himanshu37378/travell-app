import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Pricing from './Pricing';
import Home from './Home.js';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Form from './Form';

function Trips() {
  

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
   

      <Form />
</>
);
}

export default Trips;
