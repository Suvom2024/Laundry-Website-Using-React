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
          <h2>FAQs</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">FAQs</span>
        </div>
      </div>
    );
  };

  const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className="faq">
        <div className="box-container">
          <div className="accordion-container">
            {/* FAQ Accordion 1 */}
            <div className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
              <div className="accordion-heading">
                <i className="fas fa-plus"></i>
                <h3>How to schedule laundry services?</h3>
              </div>
              <p className="accordion-content">
                To schedule laundry services, you can use our online platform or contact our customer service. Explore the range of services, choose your preferences, and book a convenient time for laundry pickup and delivery.
              </p>
            </div>
  
            <div className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
  <div className="accordion-heading">
    <i className="fas fa-plus"></i>
    <h3>How does the pricing and payment work?</h3>
  </div>
  <p className="accordion-content">
    Our pricing is transparent and based on the type and quantity of items. You can view the pricing details on our website. We accept various payment methods for your convenience, including online payments and cash on delivery.
  </p>
</div>

{/* FAQ Accordion 3: Specialized Cleaning */}
<div className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
  <div className="accordion-heading">
    <i className="fas fa-plus"></i>
    <h3>Do you offer specialized cleaning services?</h3>
  </div>
  <p className="accordion-content">
    Yes, we provide specialized cleaning services for delicate fabrics, stain removal, and other specific requirements. Check our service menu or contact us for details on our specialized cleaning options.
  </p>
</div>

{/* FAQ Accordion 4: Pickup and Delivery */}
<div className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
  <div className="accordion-heading">
    <i className="fas fa-plus"></i>
    <h3>How does the pickup and delivery process work?</h3>
  </div>
  <p className="accordion-content">
    Our pickup and delivery process is simple. Schedule a pickup, and our team will collect your laundry. Once cleaned, we'll deliver it back to your specified location. Track your order through our online platform for real-time updates.
  </p>
</div>

{/* FAQ Accordion 5: Environmental Practices */}
<div className={`accordion ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
  <div className="accordion-heading">
    <i className="fas fa-plus"></i>
    <h3>Are your laundry practices environmentally friendly?</h3>
  </div>
  <p className="accordion-content">
    Yes, we prioritize environmental sustainability. Our laundry processes include eco-friendly detergents, energy-efficient machines, and responsible waste disposal. Learn more about our commitment to environmental practices on our website.
  </p>
</div>
            
          </div>
          <div className="image">
            <img src='./FAQs.jpg' alt="FAQs" />
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
        <FAQSection />
        <Footer />
      </div>
    );
  };
  
  export default App;