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

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a href="#" className="scroll-top" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up-long"></i>
    </a>
  );
};

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



  const HomeSlider = () => {
    const slides = [
      {
        id: 1,
        title: 'Welcome to Sparkle Laundry',
        subtitle: 'Freshen Up, Explore Our Laundry Services',
        image: './Home-1.jpg',
      },
      {
        id: 2,
        title: 'Introducing Sparkle Laundry',
        subtitle: 'Revitalize, Unleash Our Laundry Magic',
        image: './Home-2.jpg',
      },
      {
        id: 3,
        title: 'Discover Sparkle Laundry Magic',
        subtitle: 'Embrace Freshness with Our Solutions',
        image: './Home-3.jpg',
      },
    ];
    return (
      <section className="home">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 5 seconds
        loop={true} // Enable looping of slides
        className="home-slider"
      >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="home-item">
              <img src={slide.image} alt="Home Image" />
              <div className="content">
                <div className="text">
                  <h5>{slide.title}</h5>
                  <h3>{slide.subtitle}</h3>
                  <a href="./Services  " className="btn">Our Services</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  const Features = () => {
    return (
      <section className="features">
        <div className="box-container">
          <div className="feature-item">
            <i className="fas fa-clock"></i>
            <h3>Quick Service</h3>
            <p>Fast and efficient laundry solutions</p>
          </div>
  
          <div className="feature-item">
            <i className="fas fa-hands-wash"></i>
            <h3>Careful Handling</h3>
            <p>Gentle and secure care for your garments</p>
          </div>
  
          <div className="feature-item">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Local Coverage</h3>
            <p>Service available in your neighborhood</p>
          </div>
  
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <h3>Status Updates</h3>
            <p>Receive live updates on your laundry status</p>
          </div>
        </div>
      </section>
    );
  };

  const About = () => {
    return (
      <section className="about">
        <div className="box-container">
          <div className="image">
            <img src="./About.jpg" alt="About-Image1" />
            <div className="experience"><span>20</span> years of experience</div>
          </div>
  
          <div className="content">
            <div className="heading">
              <div className="sub"><span>about us</span><i className="fa-solid fa-shirt"></i></div>
              <h2>Quality Laundry &amp; Dry Cleaning Services</h2>
            </div>
  
            <p>Experience top-notch laundry and dry cleaning services with us. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus dolores. Experience top-notch laundry and dry cleaning services with us. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus dolores.</p>
  
            <ul className="about-features">
              <li><i className="fas fa-tshirt"></i><span>Expert Handling of Delicate Fabrics</span></li>
              <li><i className="fas fa-tshirt"></i><span>Budget-Friendly Dry Cleaning Solutions</span></li>
              <li><i className="fas fa-tshirt"></i><span>Stringent Quality Checks and Assurance</span></li>
              <li><i className="fas fa-tshirt"></i><span>Efficient Services with Quick Turnaround</span></li>
            </ul>
  
            <a href="./About  " className="btn">learn more</a>
          </div>
        </div>
      </section>
    );
  };

  const Mission = () => {
    return (
      <section className="mission linear-bg">
        <div className="box-container">
          <div className="content">
            <div className="text">
              <div className="heading">
                <div className="sub"><span>our mission</span><i className="fa-solid fa-shirt"></i></div>
                <h2>Empowering Clients, Building Care Experts.</h2>
              </div>
              <p>At Laundry Care, our mission is to empower our clients, providing them with the support and resources needed to become care experts for their garments.</p>
              <ul className="mission-points">
                <li>
                  <i className="fas fa-tshirt"></i>
                  <div className="text">
                    <h5>premium care</h5>
                    <p>We strive for premium care in every service, fostering a culture of garment care excellence and quality assurance.</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-hand-holding-usd"></i>
                  <div className="text">
                    <h5>affordability</h5>
                    <p>We promote affordable laundry and dry cleaning services, making care accessible to everyone in the community.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Services = () => {
    const services = [
      {
        id: 1,
        title: 'Regular Laundry',
        description: 'Trust us with your everyday clothing items. Our regular laundry service ensures cleanliness for your daily wear.',
        icon: 'fa-solid fa-spray-can-sparkles',
        image: './Service-1.jpg', // Updated image path
      },
      {
        id: 2,
        title: 'Dry Cleaning',
        description: 'For delicate fabrics and special garments, our dry cleaning service ensures attention to detail for a spotless finish.',
        icon: 'fas fa-tshirt',
        image: './Service-2.jpg', // Updated image path
      },
      {
        id: 3,
        title: 'Stain Removal',
        description: 'We specialize in effective stain removal techniques, ensuring your clothes are free from stubborn stains and blemishes.',
        icon: 'fas fa-broom',
        image: './Service-3.jpg', // Added service with updated image path
      },
      {
        id: 4,
        title: 'Fabric Alterations',
        description: 'Our skilled tailors provide expert fabric alterations to ensure your clothes fit perfectly.',
        icon: 'fas fa-cut',
        image: './Service-4.jpg', // Added service with updated image path
      },
      {
        id: 5,
        title: 'Express Service',
        description: 'Need your laundry done quickly? Try our express service for fast and efficient turnaround.',
        icon: 'fas fa-clock',
        image: './Service-5.jpg', // Added service with updated image path
      },
      {
        id: 6,
        title: 'Eco-Friendly Cleaning',
        description: 'Our eco-friendly cleaning service ensures a sustainable and environmentally conscious approach to laundry.',
        icon: 'fas fa-leaf',
        image: './Service-6.jpg', // Added service with updated image path
      }
    ];
    return (
      <section className="services">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>what we offer</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>our services</h2>
        </div>
        <div className="swiper-container service-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{clickable: true}}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
              }}
          loop
            className="swiper-wrapper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="service-item">
                <img src={service.image} alt={service.title} />
                <div className="content">
                  <i className={service.icon}></i>
                  <a href="./Service-Single  ">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

  const Counting = () => {
    const countRefs = useRef([]);
  
    useEffect(() => {
      countRefs.current.forEach((ref, Home) => {
        const updateCount = () => {
          const target = +ref.getAttribute('data-count');
          const count = +ref.innerText.replace('+', '');
          const increment = target / 200; // Adjust the speed of the count animation
  
          if (count < target) {
            ref.innerText = `${Math.ceil(count + increment)}+`;
            setTimeout(updateCount, 10);
          } else {
            ref.innerText = `${target}+`;
          }
        };
        updateCount();
      });
    }, []);
  
    return (
      <div className="counting">
        <div className="box">
          <div className="info">
            <i className="fas fa-shopping-bag"></i>
            <div className="content">
              <h1 ref={(el) => (countRefs.current[0] = el)} className="count" data-count="5000">0+</h1>
              <h3>Orders Completed</h3>
            </div>
          </div>
        </div>
  
        <div className="box">
          <div className="info">
            <i className="fas fa-hand-sparkles"></i>
            <div className="content">
              <h1 ref={(el) => (countRefs.current[1] = el)} className="count" data-count="15">0+</h1>
              <h3>Services Offered</h3>
            </div>
          </div>
        </div>
  
        <div className="box">
          <div className="info">
            <i className="fas fa-thumbs-up"></i>
            <div className="content">
              <h1 ref={(el) => (countRefs.current[2] = el)} className="count" data-count="1000">0+</h1>
              <h3>Satisfied Customers</h3>
            </div>
          </div>
        </div>
  
        <div className="box">
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <div className="content">
              <h1 ref={(el) => (countRefs.current[3] = el)} className="count" data-count="5">0+</h1>
              <h3>Locations Served</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const ProcessSlider = () => {
    const processSteps = [
      {
        image: './Process-1.jpg',
        title: 'Schedule Services',
        description: 'Initiate the process by scheduling laundry and dry cleaning services. Choose a time for pickup and delivery.',
      },
      {
        image: './Process-2.jpg',
        title: 'Fabric Inspection',
        description: 'Our experts conduct a thorough inspection of the fabrics to determine the appropriate cleaning methods.',
      },
      {
        image: './Process-3.jpg',
        title: 'Specialized Cleaning',
        description: 'We employ specialized cleaning techniques for different fabrics and address specific stains or requirements.',
      },
      {
        image: './Process-4.jpg',
        title: 'Quality Assurance',
        description: 'Each item undergoes a rigorous quality check to ensure that it meets our standards of cleanliness.',
      },
      {
        image: './Process-5.jpg',
        title: 'Delivery',
        description: 'Once the cleaning process is complete and quality is assured, we deliver your freshly cleaned and pressed items.',
      },
      {
        image: './Process-6.jpg',
        title: 'Customer Satisfaction',
        description: 'We value your feedback! After the delivery, let us know about your experience. Your satisfaction is our priority.',
      },
    ];
  
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
  
        <Swiper
    modules={[Autoplay, Pagination]}
    pagination={{clickable: true}}
    slidesPerView={3}
    autoplay={{
      delay: 2000,
      pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
    loop
        >
          {processSteps.map((step, Home) => (
            <SwiperSlide key={Home}>
              <div className="process-item">
                <div className="image">
                  <img src={step.image} alt={step.title} />
                  <span>0{Home + 1}</span>
                </div>
                <div className="content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  const Banner = () => {
    return (
      <section className="banner">
        <div className="content">
          <h2>Experience Freshness with Our Laundry Services</h2>
          <a href="./Request-Quote  " className="btn">Get a Quote</a>
        </div>
      </section>
    );
  };

  const Projects = () => {
    // Import React and useState hook
  
    // Define an array of project categories
    const categories = ["all", "laundry", "dryCleaning", "alterations"];
  
    // Define an array of project objects with category, title, and image properties
    const projects = [
      {
        category: "dryCleaning",
        title: "Curtain Dry Cleaning",
        image: "./Project-1.jpg",
      },
      {
        category: "laundry",
        title: "Express Folding",
        image: "./Project-2.jpg",
      },
      {
        category: "alterations",
        title: "Tailoring Adjustments",
        image: "./Project-3.jpg",
      },
      {
        category: "laundry",
        title: "Color Separation",
        image: "./Project-4.jpg",
      },
      {
        category: "dryCleaning",
        title: "Professional Suit",
        image: "./Project-5.jpg",
      },
      {
        category: "alterations",
        title: "Custom Fittings",
        image: "./Project-6.jpg",
      }
    ];
  
    // Define a state variable to store the current active category
    const [activeCategory, setActiveCategory] = useState("all");
  
    // Define a function to handle tab click events
    const handleTabClick = (category) => {
      // Set the active category to the clicked category
      setActiveCategory(category);
    };
  
    // Filter the projects based on the active category
    const filteredProjects = projects.filter(
      (project) => activeCategory === "all" || project.category === activeCategory
    );
  
    return (
      <section className="projects">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>our recent work</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>Our Projects</h2>
        </div>
  
        <ul className="tab-buttons">
          {categories.map((category) => (
            <li
              key={category}
              className={`button ${category === activeCategory ? "active" : ""}`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
  
        <div className="box-container-hello">
          {filteredProjects.map((project) => (
            <div key={project.title} className="project-item">
              <div className="project-content">
                <img src={project.image} alt={project.title} />
                <div className="content">
                  <a className="view" href={project.image}>
                    <i className="fa-solid fa-camera-retro"></i>
                  </a>
                  <div className="text">
                    <p>{project.category}</p>
                    <a href="./Project-Single  ">
                      <h3>{project.title}</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };


  const Testimonials = () => {
    return (
      <section className="testimonial-bg linear-bg">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>what our customers say</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>Our Testimonials</h2>
        </div>

        <Swiper
          className="testimonial-slider"
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
           }}
      loop
        >
          <SwiperSlide className="testi-item">
            <img src="./Pic-1.jpg" alt="Author-Pic" />
            <div className="text">
              <h4>Amy Smith</h4>
              <h6>Laundry Enthusiast</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur quod quis aliquam sit excepturi totam amet minima dolore ut atque eligendi, ipsum iste earum at necessitatibus. Nihil, impedit at.</p>
            </div>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </SwiperSlide>
  
          <SwiperSlide className="testi-item">
            <img src="./Pic-2.jpg" alt="Author-Pic" />
            <div className="text">
              <h4>John Davis</h4>
              <h6>Dry Cleaning Aficionado</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur quod quis aliquam sit excepturi totam amet minima dolore ut atque eligendi, ipsum iste earum at necessitatibus. Nihil, impedit at.</p>
            </div>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </SwiperSlide>
  
          <SwiperSlide className="testi-item">
            <img src="./Pic-3.jpg" alt="Author-Pic" />
            <div className="text">
              <h4>Mia Johnson</h4>
              <h6>Stain Removal Specialist</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur quod quis aliquam sit excepturi totam amet minima dolore ut atque eligendi, ipsum iste earum at necessitatibus. Nihil, impedit at.</p>
            </div>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </SwiperSlide>
  
          <SwiperSlide className="testi-item">
            <img src="./Pic-4.jpg" alt="Author-Pic" />
            <div className="text">
              <h4>David White</h4>
              <h6>Fabric Alterations Expert</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur quod quis aliquam sit excepturi totam amet minima dolore ut atque eligendi, ipsum iste earum at necessitatibus. Nihil, impedit at.</p>
            </div>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  };

  const Team = () => {
    return (
      <section className="team">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>meet our team</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>our experts</h2>
        </div>
        <div className="box-container">
          {/* Team Member 1 */}
          <div className="team-item">
            <div className="team-image">
              <img src="./Team-1.jpg" alt="Member-Pic" />
            </div>
            <div className="team-content">
              <a href="./Team-Single  ">
                <h3>Nicholas Simmons</h3>
              </a>
              <p>Lead Cleaner</p>
              <div className="icon-container">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="team-item">
            <div className="team-image">
              <img src="./Team-2.jpg" alt="Member-Pic" />
            </div>
            <div className="team-content">
              <a href="./Team-Single  ">
                <h3>Emma White</h3>
              </a>
              <p>Service Coordinator</p>
              <div className="icon-container">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="team-item">
            <div className="team-image">
              <img src="./Team-3.jpg" alt="Member-Pic" />
            </div>
            <div className="team-content">
              <a href="./Team-Single  ">
                <h3>Jack Brown</h3>
              </a>
              <p>Stain Removal Specialist</p>
              <div className="icon-container">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="team-item">
            <div className="team-image">
              <img src="./Team-4.jpg" alt="Member-Pic" />
            </div>
            <div className="team-content">
              <a href="./Team-Single  ">
                <h3>Olivia Taylor</h3>
              </a>
              <p>Fabric Care Specialist</p>
              <div className="icon-container">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CostCalculator = () => {
    const [formData, setFormData] = useState({
      serviceType: '',
      quantity: 0,
      garmentType: '',
      membershipStatus: '',
      stainRemoval: false,
      expressDelivery: false,
      alterations: false
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
  
    const calculateTotal = () => {
      // Placeholder function for calculating total cost
      // Implement your own logic here based on your requirements
      return 0;
    };
  
    return (
      <section className="cost-calculator linear-bg">
        <div className="box-container"> 
          <div className="content"> 
            <form className="calculator-form dark-form"> 
              <div className="heading">
                <div className="sub"><span>Calculate Your Laundry Costs</span><i className="fa-solid fa-shirt"></i></div>
                <h2>Cost Calculator</h2>
              </div>
  
              <div className="input-box">
                <div className="select">
                  <div className="select-container">
                    <label htmlFor="serviceType" className="fas fa-tshirt"></label>
                    <select className="select-box" id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                      <option value="">Service Type</option>
                      <option value="dryCleaning">Regular Laundry</option>
                      <option value="washFold">Dry Cleaning</option>
                      <option value="ironing">Stain Removal</option>
                      <option value="specialtyCleaning">Fabric Alterations</option>
                      <option value="expressService">Express Service</option>
                      <option value="ecoFriendlyCleaning">Eco-Friendly Cleaning</option>
                    </select>
                    <div className="icon-container">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="input-box">
                <div className="input-field">
                  <label htmlFor="quantity" className="fa-solid fa-archive"></label>
                  <input type="number" name="quantity" className="box" id="quantity" min="0" placeholder="Items Quantity" value={formData.quantity} onChange={handleChange} required />
                </div>
              </div>
  
              <div className="input-box">
                <div className="select">
                  <div className="select-container">
                    <label htmlFor="garmentType" className="fas fa-tshirt"></label>
                    <select className="select-box" id="garmentType" name="garmentType" value={formData.garmentType} onChange={handleChange}>
                      <option value="">Garment Type</option>
                      <option value="shirt">Shirt</option>
                      <option value="dress">Dress</option>
                      <option value="suit">Suit</option>
                      <option value="pants">Pants</option>
                    </select>
                    <div className="icon-container">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="input-box">
                <div className="select">
                  <div className="select-container">
                    <label htmlFor="membershipStatus" className="fas fa-id-card"></label>
                    <select className="select-box" id="membershipStatus" name="membershipStatus" value={formData.membershipStatus} onChange={handleChange}>
                      <option value="">Membership</option>
                      <option value="regular">Regular</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="none">None</option>
                    </select>
                    <div className="icon-container">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="extra-services">
                <div className="checkbox-label">
                  <input type="checkbox" id="stainRemoval-checkbox" name="stainRemoval" checked={formData.stainRemoval} onChange={handleChange} />
                  <label htmlFor="stainRemoval-checkbox">Stain Removal</label>
                  <div className="checkbox-indicator"></div>
                </div>
  
                <div className="checkbox-label">
                  <input type="checkbox" id="expressDelivery-checkbox" name="expressDelivery" checked={formData.expressDelivery} onChange={handleChange} />
                  <label htmlFor="expressDelivery-checkbox">Express Delivery</label>
                  <div className="checkbox-indicator"></div>
                </div>
  
                <div className="checkbox-label">
                  <input type="checkbox" id="alterations-checkbox" name="alterations" checked={formData.alterations} onChange={handleChange} />
                  <label htmlFor="alterations-checkbox">Alterations</label>
                  <div className="checkbox-indicator"></div>
                </div>
              </div>
  
              <div className="cost-total">
                <h5>Total</h5>
                <span>${calculateTotal()}</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };


  const PricingPlans = () => {
    return (
      <section className="pricing">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>Select your plan</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>Pricing Plans</h2>
        </div>
  
        <div className="box-container">
          <div className="plan-item">
            <div className="intro">
              <i className="fas fa-tshirt"></i>
              <h3>Basic Plan</h3>
              <div className="price">$49</div>
            </div>
            <div className="content">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Priority Service
                </li>
                <li>
                  <i className="fas fa-check"></i> Exclusive Discounts
                </li>
                <li>
                  <i className="fas fa-check"></i> Special Offers
                </li>
                <li>
                  <i className="fas fa-check"></i> Early Access to Promotions
                </li>
                <li>
                  <i className="fas fa-check"></i> Monthly Newsletter
                </li>
              </ul>
              <a href="#" className="btn">Select Plan</a>
            </div>
          </div>
  
          <div className="plan-item">
            <div className="intro">
              <i className="fas fa-tshirt"></i>
              <h3>Premium Plan</h3>
              <div className="price">$79</div>
            </div>
            <div className="content">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Express Delivery Options
                </li>
                <li>
                  <i className="fas fa-check"></i> Stain Removal Services
                </li>
                <li>
                  <i className="fas fa-check"></i> Monthly Subscription Box
                </li>
                <li>
                  <i className="fas fa-check"></i> VIP Customer Support
                </li>
                <li>
                  <i className="fas fa-check"></i> Seasonal Promotions
                </li>
              </ul>
              <a href="#" className="btn">Select Plan</a>
            </div>
          </div>
  
          <div className="plan-item">
            <div className="intro">
              <i className="fas fa-tshirt"></i>
              <h3>Elite Plan</h3>
              <div className="price">$99</div>
            </div>
            <div className="content">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Premium Fabric Care
                </li>
                <li>
                  <i className="fas fa-check"></i> Personalized Laundry Consultation
                </li>
                <li>
                  <i className="fas fa-check"></i> Exclusive Event Invitations
                </li>
                <li>
                  <i className="fas fa-check"></i> Customized Cleaning Preferences
                </li>
                <li>
                  <i className="fas fa-check"></i> Priority Scheduling
                </li>
              </ul>
              <a href="#" className="btn">Select Plan</a>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const NewsletterSubscribe = () => {
    return (
      <section className="newsletter-subscribe">
        <div className="content">
          <h2>Subscribe To Our Newsletter</h2>
          <p>Stay updated with the latest football news, match highlights, and exclusive offers from our football community.</p>
          <form className="newsletter-form">
            <input type="email" id="sub-email" name="email" placeholder="Your email address" required="" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    );
  };


  const BlogSection = () => {
    return (
      <section className="blog main">
        <div className="heading">
          <div className="sub">
            <i className="fa-solid fa-shirt"></i>
            <span>our recent articles</span>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h2>our blogs</h2>
        </div>
  
        <div className="box-container">
          <div className="blog-item">
            <div className="image">
              <img src="./Blog-1.jpg" alt="Blog-Image" />
            </div>
            <div className="content">
              <div className="category">Fabric Care</div>
              <a className="main-heading" href="./Blog-Single  ">Choosing the Right Laundry Detergent</a>
              <div className="details">
                <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                <h3><i className="fa-regular fa-calendar-days"></i><span>dec 30, 2023</span></h3>
              </div>
            </div>
          </div>
  
          <div className="blog-item">
            <div className="image">
              <img src="./Blog-2.jpg" alt="Blog-Image" />
            </div>
            <div className="content">
              <div className="category">Laundry Hacks</div>
              <a className="main-heading" href="./Blog-Single  ">Efficient Clothes Folding Techniques</a>
              <div className="details">
                <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                <h3><i className="fa-regular fa-calendar-days"></i><span>dec 22, 2023</span></h3>
              </div>
            </div>
          </div>
  
          <div className="blog-item">
            <div className="image">
              <img src="./Blog-3.jpg" alt="Blog-Image" />
            </div>
            <div className="content">
              <div className="category">Eco-Friendly</div>
              <a className="main-heading" href="./Blog-Single  ">Sustainable Laundry Detergent Options</a>
              <div className="details">
                <h3><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
                <h3><i className="fa-regular fa-calendar-days"></i><span>dec 10, 2023</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Partners = () => {
    return (
      <section className="partners">
       <Swiper
    modules={[Autoplay, Pagination]}
    pagination={{clickable: true}}
    slidesPerView={5}
    autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
    loop
    className='swiper-container'
 >
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-1.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-2.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-3.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-4.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-5.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-6.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-7.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-8.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-9.png' alt="Partner-Logo" /></a></SwiperSlide>
          <SwiperSlide className="partner-item"><a href="#"><img src='./Partner-10.png' alt="Partner-Logo" /></a></SwiperSlide>
          </Swiper>
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
        <HomeSlider />
        <Features />
        <About />
        <Mission />
        <Services/>
        <Counting />
        <ProcessSlider/>
        <Banner />
        <Projects />
        <Testimonials />
        <Team />
        <CostCalculator />
        <PricingPlans />
        <NewsletterSubscribe />
        <BlogSection />
        <Partners />
        <Footer />
        <ScrollTop /> {/* Add the ScrollTop component */}
      </div>
    );
  };
  
  export default App;