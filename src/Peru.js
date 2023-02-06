import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Pricing from './Pricing';
import Home from './Home.js';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Form from './Form';

function Peru() {
  

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
  
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Peru</h1>
        <p class="lead text-muted"> is the capital and the largest city of the northern Indian state of Himachal Pradesh. In 1864, Shimla was declared as the summer capital of British India. After independence, the city became the capital of East Punjab and was later made the capital city of Himachal Pradesh. It is the principal commercial, cultural and educational centre of the state.</p>
        <p>
          <Link to={'/plans'}><a class="btn  my-1">Explore our Plans</a></Link>
         
          
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img className="img-fluid" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/St._Michael%27s_Catholic_Church%2C_Shimla.JPG/1280px-St._Michael%27s_Catholic_Church%2C_Shimla.JPG" alt="destination" />

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img className="img-fluid" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Longwood_%28Shimla%29.jpg/1280px-Longwood_%28Shimla%29.jpg" alt="destination" />

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img className="img-fluid" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gaiety_Theater_-_Ridge_-_Shimla_2014-05-07_1169.JPG/1920px-Gaiety_Theater_-_Ridge_-_Shimla_2014-05-07_1169.JPG" alt="destination" />

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card shadow-sm">
          <img className="img-fluid" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vice_Regal_Lodge_%28Rashtrapati_Niwas%29_%28edited%29.jpg/1280px-Vice_Regal_Lodge_%28Rashtrapati_Niwas%29_%28edited%29.jpg" alt="destination" />

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        {/*
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>


  <Form />
</>
);
}

export default Peru;
