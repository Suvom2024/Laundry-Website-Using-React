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
import { FaCalendarDay, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

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
          <h2>REQUEST A QUOTE</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">Request A Quote</span>
        </div>
      </div>
    );
  };

  function RequestQuoteForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: '',
      serviceType: '',
      address: '',
      pickupDate: '',
      pickupTime: '',
      instructions: '',
      stainRemoval: true,
      expressDelivery: true,
      alterations: true,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Submit form data to the server or handle it as needed
    };
  
    return (
      <section className="request-quote linear-bg">
        <div className="box-container">
          <div className="content">
            <form className="dark-form" onSubmit={handleSubmit}>
              <div className="heading">
                <div className="sub">
                  <span>schedule your service</span>
                  <i className="fa-solid fa-shirt"></i>
                </div>
                <h2>Request Quote</h2>
              </div>
  
              <div className="input-box">
                <div className="input-field">
                  <label htmlFor="name" className="fas fa-user"></label>
                  <input
                    type="text"
                    name="name"
                    className="box"
                    id="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="input-field">
                  <label htmlFor="email" className="fa-solid fa-envelope"></label>
                  <input
                    type="email"
                    name="email"
                    className="box"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className="input-box">
                <div className="input-field">
                  <label htmlFor="number" className="fas fa-phone"></label>
                  <input
                    type="number"
                    name="number"
                    className="box"
                    id="number"
                    placeholder="Phone Number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="select">
                  <div className="select-container">
                    <label htmlFor="serviceType" className="fa-solid fa-shirt"></label>
                    <select
                      className="select-box"
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Service Type</option>
                      <option value="dryCleaning">Regular Laundry</option>
                      <option value="washFold">Dry Cleaning</option>
                      <option value="ironing">Stain Removal</option>
                      <option value="specialtyCleaning">Fabric Alterations</option>
                      <option value="specialtyCleaning">Express Service</option>
                      <option value="specialtyCleaning">Eco-Friendly Cleaning</option>
                    </select>
                    <div className="icon-container">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="input-box">
                <div className="input-field">
                  <label htmlFor="address" className="fas fa-map-marker-alt"></label>
                  <input
                    type="text"
                    name="address"
                    className="box"
                    id="address"
                    placeholder="Pickup Location"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className="input-box">
                <div className="input-field">
                  <label htmlFor="pickupDate" className="fa-regular fa-calendar-days"></label>
                  <input
                    type="text"
                    name="pickupDate"
                    placeholder="Pickup Date"
                    id="pickupDate"
                    className="box"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    required
                    value={formData.pickupDate}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="input-field">
                  <label htmlFor="pickupTime" className="fa-regular fa-clock"></label>
                  <input
                    type="text"
                    name="pickupTime"
                    placeholder="Pickup Time"
                    id="pickupTime"
                    className="box"
                    onFocus={(e) => (e.target.type = 'time')}
                    onBlur={(e) => (e.target.type = 'text')}
                    required
                    value={formData.pickupTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className="input-field text-area">
                <label htmlFor="instructions" className="fas fa-comment"></label>
                <textarea
                  cols="30"
                  rows="10"
                  name="instructions"
                  className="box"
                  id="instructions"
                  placeholder="Additional Instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                ></textarea>
              </div>
  
              <div className="extra-services">
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.stainRemoval}
                    id="stainRemovalCheckbox"
                    name="stainRemoval"
                    onChange={handleChange}
                  />
                  <label htmlFor="stainRemovalCheckbox">Stain Removal</label>
                  <div className="checkbox-indicator"></div>
                </div>
  
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.expressDelivery}
                    id="expressDeliveryCheckbox"
                    name="expressDelivery"
                    onChange={handleChange}
                  />
                  <label htmlFor="expressDeliveryCheckbox">Express Delivery</label>
                  <div className="checkbox-indicator"></div>
                </div>
  
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.alterations}
                    id="alterationsCheckbox"
                    name="alterations"
                    onChange={handleChange}
                  />
                  <label htmlFor="alterationsCheckbox">Alterations</label>
                  <div className="checkbox-indicator"></div>
                </div>
              </div>
  
              <button type="submit" className="btn" name="submit" id="submit">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  

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
        <RequestQuoteForm />
        <Footer />
      </div>
    );
  };
  
  export default App;