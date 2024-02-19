import React, { useState , useEffect, useRef } from 'react';
import './css/main.css';
import './css/responsive.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigation ,Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
      <header class="header active">
          <div className="header-1">
            <div className="contact-info">
              <a href="tel:+111-222-333">
                <i className="fas fa-phone"></i>
                <span>+111-222-333</span>
              </a>
              <a href="mailto: chelseacleaners.com">
                <i className="fas fa-envelope"></i>
                <span className="gmail"> chelseacleaners.com</span>
              </a>
            </div>
            <div className="social-icons">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
      <div className="header-2">
        <a className="logo" href="/Home">
          <img src="./logo.png" alt="logo" />
        </a>
        <div className="container">
          <nav className="navbar">
            <a className="nav-btn" href="./Home  ">home</a>
            <div className="dropdown-menu">
              <button className="nav-btn">about</button>
              <div className="dropdown-content">
                <a href="./About  ">about us</a>
                <a href="./Team  ">team</a>
                <a href="./Team-Single  ">team single</a>
                <a href="./Testimonials  ">testimonials</a>
                <a href="./FAQs  ">fAQs</a>
              </div>
            </div>
            <div className="dropdown-menu">
              <button className="nav-btn">Pages</button>
              <div className="dropdown-content">
                <a href="./Pricing  ">Pricing</a>
                <a href="./Process  ">Our Process</a>
                <a href="./Partners  ">Partners</a>
               {/* <a href="./Careers  ">Careers</a>
                <a href="./Career-Single  ">Career Single</a>
                <a href="./Request-Quote  ">Request A Quote</a>
                <a href="./Cost-Calculator  ">Cost Calculator</a>
                <a href="./Login  ">login</a>
                <a href="./Register  ">register</a>
                <a href="./Reset-Password  ">forgot Password</a> */}
              </div>
            </div>
            <div className="dropdown-menu">
              <button className="nav-btn">Service</button>
              <div className="dropdown-content">
                <a href="./Services  ">Services</a>
                <a href="./Service-Single  ">Service Single</a>
              </div>
            </div>
            <div className="dropdown-menu">
              <button className="nav-btn">Project</button>
              <div className="dropdown-content">
                <a href="./Projects  ">Projects</a>
                <a href="./Project-Single  ">Project Single</a>
              </div>
            </div>
            <div className="dropdown-menu">
              <button className="nav-btn">blog</button>
              <div className="dropdown-content">
                <a href="./Blog-Grid  ">blogs grid</a>
                 
                <a href="./Blog-Single  ">blog Single</a>
              </div>
            </div>
            {/* <div className="dropdown-menu">
              <button className="nav-btn">shop</button>
              <div className="dropdown-content">
                <a href="./Shop-Grid  ">shop grid</a>
                <a href="./Shop-List  ">shop list</a>
                <a href="./Product-Single  ">product Single</a>
                <a href="./Wishlist  ">wishlist</a>
                <a href="./Cart  ">cart</a>
                <a href="./Checkout  ">checkout</a>
              </div>
            </div> */}
            <a className="nav-btn" href="./Contact  ">contact</a>
          </nav>
          <div className="icon-container">
            <div id="search-btn" className="icon fa-solid fa-magnifying-glass"></div>
            <a href="./Request-Quote  " className="btn">get a quote</a>
            <div id="menu-btn" className="icon fa-solid fa-bars-staggered"></div>
          </div>
          <form className="search-container">
            <input type="search" id="search-bar" placeholder="search here" required="" />
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>
      </header>
    );
  };



const PageTitle = () => {
    return (
      <div className="page-title">
        <div className="title">
          <h2>Process</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">Process</span>
        </div>
      </div>
    );
  };

  const Process = () => {
    return (
      <section className="process">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>Excellence in Every Step</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>our process</h2>
        </div>
  
        <div className="box-container">
          <div className="process-item">
            <div className="image">
              <img src='./Process-1.jpg' alt="Schedule Services" />
              <span>01</span>
            </div>
            <div className="content">
              <h3>Schedule Services</h3>
              <p>Initiate the process by scheduling laundry and dry cleaning services. Choose a time for pickup and delivery.</p>
            </div>
          </div>
  
          <div className="process-item">
            <div className="image">
              <img src='./Process-2.jpg' alt="Fabric Inspection" />
              <span>02</span>
            </div>
            <div className="content">
              <h3>Fabric Inspection</h3>
              <p>Our experts conduct a thorough inspection of the fabrics to determine the appropriate cleaning methods.</p>
            </div>
          </div>
  
          <div className="process-item">
            <div className="image">
              <img src='./Process-3.jpg' alt="Specialized Cleaning" />
              <span>03</span>
            </div>
            <div className="content">
              <h3>Specialized Cleaning</h3>
              <p>We employ specialized cleaning techniques for different fabrics and address specific stains or requirements.</p>
            </div>
          </div>
  
          <div className="process-item">
            <div className="image">
              <img src='./Process-4.jpg' alt="Quality Assurance" />
              <span>04</span>
            </div>
            <div className="content">
              <h3>Quality Assurance</h3>
              <p>Each item undergoes a rigorous quality check to ensure that it meets our standards of cleanliness.</p>
            </div>
          </div>
  
          <div className="process-item">
            <div className="image">
              <img src='./Process-5.jpg' alt="Delivery" />
              <span>05</span>
            </div>
            <div className="content">
              <h3>Delivery</h3>
              <p>Once the cleaning process is complete and quality is assured, we deliver your freshly cleaned and pressed items.</p>
            </div>
          </div>
  
          <div className="process-item">
            <div className="image">
              <img src='./Process-6.jpg' alt="Customer Satisfaction" />
              <span>06</span>
            </div>
            <div className="content">
              <h3>Customer Satisfaction</h3>
              <p>We value your feedback! After the delivery, let us know about your experience. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Footer = () => {
    return (
      <footer className="footer">
        <div className="box-container">
          <div className="footer-item">
            <a className="logo" href="./Home  ">
            <img src="./logo.png" alt="Laundry Logo" />
            </a>
            <p>Your Trusted Partner for Clean and Fresh Fabrics. Providing Quality Laundry and Dry Cleaning Services to Enhance Your Wardrobe.</p>
            <div className="social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
  
          <div className="footer-item">
            <h2>Contact Info</h2>
            <div className="info connect">
              <p><i className="fas fa-phone"></i><span>+123-456-789</span></p>
              <p><i className="fas fa-phone"></i><span>+111-222-333</span></p>
              <p><i className="fas fa-envelope"></i><span className="gmail"> chelseacleaners.com</span></p>
              <p><i className="fas fa-envelope"></i><span className="gmail">xyz@gmail.com</span></p>
              <p><i className="fas fa-map-marker-alt"></i><span>Boston, Massachusetts</span></p>
            </div>
          </div>
  
          <div className="footer-item">
            <h2>Quick Links</h2>
            <div className="info links">
              <p><i className="fa-solid fa-shirt"></i><a href="./About  ">About Us</a></p>
              <p><i className="fa-solid fa-shirt"></i><a href="./Pricing  ">Pricing</a></p>
              <p><i className="fa-solid fa-shirt"></i><a href="./Services  ">Services</a></p>
              <p><i className="fa-solid fa-shirt"></i><a href="./Projects  ">Projects</a></p>
              <p><i className="fa-solid fa-shirt"></i><a href="./Blog-Grid  ">Blog</a></p>
              <p><i className="fa-solid fa-shirt"></i><a href="./Contact  ">Contact</a></p>
            </div>
          </div>
  
          <div className="footer-item">
            <h2>Newsletter</h2>
            <p>Stay connected for the latest updates on special promotions and tips for maintaining your garments.</p>
            <form className="dark-form">
              <div className="input-field">
                <label htmlFor="news-email" className="fas fa-envelope"></label>
                <input type="email" id="news-email" name="email" className="box" placeholder="Your email address" required />
              </div>
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    );
  };
  

  const App = () => {
    return (
      <div>
        <Header />
        <PageTitle />
        <Process />
        <Footer />
      </div>
    );
  };
  
  export default App;