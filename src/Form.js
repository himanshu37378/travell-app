import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Pricing from './Pricing';
import Home from './Home.js';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';

function Form() {
    const [data,setData] = useState({
        name: " ",
        email: " ",
        phone: " ",
        message: " ",
          });
        
        const {name, email, phone, message} = data;
        
        const handleChange = (e) => {
          setData({ ...data, [e.target.name]: e.target.value});
        };
        
        const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
        const response = await fetch('https://v1.nocodeapi.com/himanshumahajan/google_sheets/DyGwpRLdzQceaCey?tabId=Sheet1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([[name, email, phone, message, new Date().toLocaleString()]])
        }
        );
        await response.json()
        setData({ ...data,name: "", email: "", phone: "", message: ""});
        }
        catch(err) {
          console.log(err)
        }
        
        };
    return (   
        <>

<section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Come to know the plans offered us.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" name='name' value={name} type="text" required="required" data-validation-required-message="Please enter your name." placeholder="Your Name *" onChange={handleChange}/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" name='email' value={email} type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." onChange={handleChange}/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" name='phone' value={phone} type="tel" required="required" data-validation-required-message="Please enter your phone number." placeholder="Your Phone *" onChange={handleChange}/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" value={message} name='message' required="required" data-validation-required-message="Please enter a message." placeholder="Your Message *" onChange={handleChange}></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        </>

);
}

export default Form;
