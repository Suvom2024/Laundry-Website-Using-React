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
          <h2>Project Single</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">Project Single</span>
        </div>
      </div>
    );
  };
  const imagePaths  = [
    './11.jpg',
    './12.jpg',
    './13.jpg',
    './14.jpg',
    './5.jpg',
    './6.jpg',
  ];
  
  const ProjectSingle = () => {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
  
    const openLightbox = (index) => {
      setActiveImageIndex(index);
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
  
    const goToPrevImage = () => {
      setActiveImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imagePaths.length - 1));
    };
  
    const goToNextImage = () => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    };
    return (
      <section className="project-single page-single">
        <div className="project-info page-info">
          <div className="image">
            <img src='./Project-1.jpg' alt="Curtain Dry Cleaning" />
          </div>
          <div className="content">
            <h3 className="main-heading">Curtain Dry Cleaning</h3>
            <p className="important">Overcoming challenges in curtain care demands efficient dry cleaning solutions. We address these challenges with reliable and meticulous curtain dry cleaning.</p>
            <p>Our Curtain Dry Cleaning project is designed to provide thorough and gentle cleaning that preserves the quality of your curtains while removing dust, allergens, and stains. We understand the importance of maintaining the integrity of your curtains, and our process excels at it. Partner with us for premium curtain care.</p>
            
            <div className="project-gallery page-gallery">
        {imagePaths.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Curtain Dry Cleaning Gallery Image ${index + 1}`}
            onClick={() => openLightbox(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <div className="lightbox-controls">
            <span className="lightbox-prev" onClick={goToPrevImage}>&#10094;</span>
            <img
              className="lightbox-image"
              src={imagePaths[activeImageIndex]}
              alt={`Curtain Dry Cleaning Gallery Image ${activeImageIndex + 1}`}
            />
            <span className="lightbox-next" onClick={goToNextImage}>&#10095;</span>
          </div>
          <div className="lightbox-caption">
            {`Image ${activeImageIndex + 1} of ${imagePaths.length}`}
          </div>
        </div>
      )}

            <div className="sub-section">
              <h3 className="sub-heading">Project Challenges:</h3>
              <ul>
                <li><i className="fa-solid fa-check"></i>Ensuring thorough and gentle cleaning for delicate curtains.</li>
                <li><i className="fa-solid fa-check"></i>Removing dust, allergens, and stains effectively.</li>
                <li><i className="fa-solid fa-check"></i>Preserving the quality and integrity of curtains.</li>
              </ul>
            </div>
            <div className="sub-section">
              <h3 className="sub-heading">Project Solutions:</h3>
              <p>Our Curtain Dry Cleaning project includes the following solutions:</p>
              <ul>
                <li><i className="fa-solid fa-caret-right"></i>Thorough and Meticulous Curtain Dry Cleaning.</li>
                <li><i className="fa-solid fa-caret-right"></i>Dust, Allergen, and Stain Removal.</li>
                <li><i className="fa-solid fa-caret-right"></i>Preservation of Curtain Quality.</li>
              </ul>
            </div>
            <div className="sub-section">
              <h3 className="sub-heading">Project Result:</h3>
              <p>By choosing our Curtain Dry Cleaning project, you can expect the following outcomes:</p>
              <ul>
                <li><i className="fa-solid fa-circle-notch"></i>Revitalized and Clean Curtains.</li>
                <li><i className="fa-solid fa-circle-notch"></i>Extended Lifespan of Your Curtains.</li>
                <li><i className="fa-solid fa-circle-notch"></i>Enhanced Indoor Air Quality.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sidebar page-sidebar">
          <h3 className="sub-heading">Project Info</h3>
          <div className="container">
            <div className="detail-item">
              <i className="fa-regular fa-calendar-days"></i>
              <div className="detail-content">
                <h3>Date</h3>
                <p>March 11, 2023</p>
              </div>
            </div>
            <div className="detail-item">
            <i className="fa-solid fa-user"></i>
            <div className="detail-content">
              <h3>Client</h3>
              <p>ABC Home Decor</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-solid fa-list-ul"></i>
            <div className="detail-content">
              <h3>Category</h3>
              <p>Dry Cleaning</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-regular fa-clock"></i>
            <div className="detail-content">
              <h3>Duration</h3>
              <p>Approximately 1 Week</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-regular fa-map"></i>
            <div className="detail-content">
              <h3>Location</h3>
              <p>123 Main Street, Cityville</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-solid fa-globe"></i>
            <div className="detail-content">
              <h3>Website</h3>
              <p className="website">www.chelseacleaners.com</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-solid fa-dollar-sign"></i>
            <div className="detail-content">
              <h3>Cost</h3>
              <p>$500</p>
            </div>
          </div>
          
          <div className="detail-item">
            <i className="fa-solid fa-user-gear"></i>
            <div className="detail-content">
              <h3>Provider</h3>
              <p>Elite Dry Cleaning Services</p>
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
        <ProjectSingle />
        <Footer />
      </div>
    );
  };
  
  export default App;