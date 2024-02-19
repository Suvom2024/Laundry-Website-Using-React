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
          <h2>Services Single</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">Services Single</span>
        </div>
      </div>
    );
  };

  const ServiceSingle = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    };
  
    return (
      <section className="service-single page-single">
        <div className="sidebar">
          <div className="category sidebar-item">
            <div className="sidebar-heading">
              <h2>all services</h2>
            </div>
            <div className="box-container">
            <a href="./Service-Single"><span><i className="fa-solid fa-spray-can-sparkles"></i>Regular Laundry</span></a>
            <a href="./Service-Single"><span><i className="fas fa-tshirt"></i>Dry Cleaning</span></a>
            <a href="./Service-Single"><span><i className="fas fa-broom"></i>Stain Removal</span></a>
            <a href="./Service-Single"><span><i className="fas fa-cut"></i>Fabric Alterations</span></a>
            <a href="./Service-Single"><span><i className="fas fa-clock"></i>Express Service</span></a>
            <a href="./Service-Single"><span><i className="fas fa-leaf"></i>Eco-Friendly Cleaning</span></a>
            </div>
          </div>
        </div>
  
        <div className="service-info page-info">
          <div className="image">
            <img src='./Service-1.jpg' alt="Regular Laundry" />
          </div>
          <div className="content">
            <h3 className="main-heading">Regular Laundry</h3>
            <p>Trust us with your everyday clothing items. Our regular laundry service ensures freshness and cleanliness for your daily wear.</p>
            <p>Whether you need your work shirts or casual attire cleaned, our regular laundry service provides high-quality cleaning to keep your clothes looking and feeling their best.</p>
            <div className="page-gallery">
              <a href='./Single-1.jpg'>
                <img src='./Single-1.jpg' alt="Service-Gallery-Image" />
              </a>
              <a href='./Single-2.jpg'>
                <img src='./Single-2.jpg' alt="Service-Gallery-Image" />
              </a>
            </div>
            <div className="sub-section">
              <div className="box-container">
                <h3 className="sub-heading">Key Features</h3>
                <p>Our Regular Laundry service offers a range of benefits, including:</p>
                <ul>
                  <li><i className="fa-solid fa-check"></i>Convenient Daily Wear Cleaning</li>
                  <li><i className="fa-solid fa-check"></i>Professional Stain Removal</li>
                  <li><i className="fa-solid fa-check"></i>Fresh and Fragrant Clothes</li>
                  <li><i className="fa-solid fa-check"></i>Quick Turnaround</li>
                </ul>
              </div>
            </div>
            <div className="sub-section">
              <div className="box-container">
                <h3 className="sub-heading">Laundry Process</h3>
                <p>Our laundry process ensures your clothes receive the care they deserve:</p>
                <ul>
                  <li><i className="fa-solid fa-tshirt"></i>Garment Inspection</li>
                  <li><i className="fa-solid fa-tshirt"></i>Detergent Selection</li>
                  <li><i className="fa-solid fa-tshirt"></i>Machine Washing</li>
                  <li><i className="fa-solid fa-tshirt"></i>Drying</li>
                  <li><i className="fa-solid fa-tshirt"></i>Ironing and Folding</li>
                </ul>
              </div>
            </div>
            <div className="faq sub-section">
              <h3 className="sub-heading">FAQs</h3>
              <div className="accordion-container">
                <div className={`accordion ${activeAccordion === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
                  <div className="accordion-heading">
                    <i className="fas fa-plus"></i>
                    <h3>How quickly can I get my regular laundry done?</h3>
                  </div>
                  <div className="accordion-content">Our regular laundry service offers quick turnaround, and you can typically get your clothes back within 24-48 hours.</div>
                </div>
                <div className={`accordion ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                  <div className="accordion-heading">
                    <i className="fas fa-plus"></i>
                    <h3>Do you offer pickup and delivery services?</h3>
                  </div>
                  <div className="accordion-content">Yes, we provide convenient pickup and delivery services for your regular laundry. Contact us for scheduling.</div>
                </div>
                <div className={`accordion ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                  <div className="accordion-heading">
                    <i className="fas fa-plus"></i>
                    <h3>What detergent do you use for regular laundry?</h3>
                  </div>
                  <div className="accordion-content">We use high-quality, gentle detergents suitable for everyday fabrics, ensuring your clothes are clean and well-cared-for.</div>
                </div>
                <div className={`accordion ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                  <div className="accordion-heading">
                    <i className="fas fa-plus"></i>
                    <h3>Can I customize the washing instructions for specific items?</h3>
                  </div>
                  <div className="accordion-content">Yes, we accommodate special requests for washing instructions. Let us know your preferences when submitting your laundry.</div>
                </div>
              </div>
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
        <ServiceSingle  />
        <Footer />
      </div>
    );
  };
  
  export default App;