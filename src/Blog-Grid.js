import React,{useState} from 'react';
import './css/main.css';
import './css/responsive.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
              <a href="mailto:abc@gmail.com">
                <i className="fas fa-envelope"></i>
                <span className="gmail">abc@gmail.com</span>
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
          <h2>Blog Grid</h2>
        </div>
        <div className="link">
          <Link to="/Home">Home</Link>
          <span className="page">Blog Grid</span>
        </div>
      </div>
    );
  };

  const BlogSection = () => {
    // Dummy function for handling search submit
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      // Add search logic here
    };
  
    return (
        <section className="blog grid">
          <div className="sidebar">
            {/* ... Search Area ... */}
            {/* Category Area */}
            <div className="category sidebar-item">
              <div className="sidebar-heading">
                <h2>categories</h2>
              </div>
              <div className="box-container">
                      {/* Map through categories data here */}
                      {/* Example category */}
                      <a href="#" className="item">
                        <span><i className="fa-solid fa-shirt"></i>Fabric Care</span>
                        <p>(30)</p>
                      </a>
                      <a href="#" className="item" >
                        <span><i className="fa-solid fa-shirt"></i>Laundry Hacks</span>
                        <p>(20)</p>
                      </a>
                      <a href="#" className="item" >
                        <span><i className="fa-solid fa-shirt"></i>Eco-Friendly</span>
                        <p>(15)</p>
                      </a>
                      <a href="#" className="item" >
                        <span><i className="fa-solid fa-shirt"></i>Wardrobe Maintenance</span>
                        <p>(10)</p>
                      </a>
                      <a href="#" className="item" >
                        <span><i className="fa-solid fa-shirt"></i>Dry Cleaning</span>
                        <p>(05)</p>
                      </a>
                      {/* ... other categories */}
                    </div>
            </div>
    
            {/* Recent Posts Area */}
            <div className="recent-posts sidebar-item">
              <div className="sidebar-heading">
                <h2>recent posts</h2>
              </div>
              <div className="box-container">
                {/* Map through recent posts data here */}
                {/* Example recent post */}
                <div className="post-item">
                  <img src='./Blog-1.jpg' alt="Recent Post" />
                  <a className="main-heading" href="#">Choosing the Right Laundry Detergent</a>
                </div>
                <div className="post-item">
              <img src="./Blog-2.jpg" alt="Recent Post"/>
              <a className="main-heading" href="./Blog-Single">Efficient Clothes Folding Techniques</a> 
            </div>
  
            <div className="post-item">
              <img src="./Blog-3.jpg" alt="Recent Post"/> 
              <a className="main-heading" href="./Blog-Single">Sustainable Laundry Detergent Options</a> 
            </div>
              </div>
            </div>
    
            {/* Tags Area */}
            <div className="tags sidebar-item">
              <div className="sidebar-heading">
                <h2>tags</h2>
              </div>
              <div className="box-container">
                {/* Map through tags data here */}
                {/* Example tag */}
                <a href="#" className="tag-item">DryCleaning</a>
                <a href="#" className="tag-item">EcoFriendly</a>
                <a href="#" className="tag-item">Stains</a>
                <a href="#" className="tag-item">Fabrics</a>
                <a href="#" className="tag-item">Laundry</a>
                <a href="#" className="tag-item">Cleaning</a>
                <a href="#" className="tag-item">Products</a>
                {/* ... other tags */}
              </div>
            </div>
          </div>
    
          <div className="blog-container grid">
            {/* Blog items */}
            <div className="blog-items">
              {/* Map through blog items data here */}
              {/* Example blog item */}
              <div className="blog-item">
                <div className="image">
                  <img src='./Blog-3.jpg' alt="Blog Image" />
                </div>
                <div className="content">
                  <div className="category">Fabric Care</div>
                  <a className="main-heading" href="#">Choosing the Right Laundry Detergent</a>
                  <div className="details">
                    <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                    <h3><i className="fa-regular fa-calendar-days"></i><span>Dec 30, 2023</span></h3>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image">
                  <img src='./Blog-1.jpg' alt="Blog Image" />
                </div>
                <div className="content">
                  <div className="category">Fabric Care</div>
                  <a className="main-heading" href="#">Choosing the Right Laundry Detergent</a>
                  <div className="details">
                    <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                    <h3><i className="fa-regular fa-calendar-days"></i><span>Dec 30, 2023</span></h3>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image">
                  <img src='./Blog-2.jpg' alt="Blog Image" />
                </div>
                <div className="content">
                  <div className="category">Fabric Care</div>
                  <a className="main-heading" href="#">Choosing the Right Laundry Detergent</a>
                  <div className="details">
                    <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                    <h3><i className="fa-regular fa-calendar-days"></i><span>Dec 30, 2023</span></h3>
                  </div>
                </div>
              </div>
              
              {/* ... other blog items */}
            </div>
    
            {/* Pagination */}
            <div className="pages-no">
              <div className="container">
                {/* Navigation arrows and page numbers */}
                <div className="item">
                  <i className="fas fa-arrow-left"></i>
                </div>
                {/* Map through page numbers here */}
                {/* Example page number */}
                <div className="item active">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">
                  <i className="fas fa-arrow-right"></i>
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
              <p><i className="fas fa-envelope"></i><span className="gmail">abc@gmail.com</span></p>
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
        <BlogSection />
        <Footer />
      </div>
    );
  };
  
  export default App;