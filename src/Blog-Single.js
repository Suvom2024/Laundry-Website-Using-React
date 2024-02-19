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
                {/*{/* <a href="./Careers  ">Careers</a>
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
  const SearchArea = () => {
    return (
      <div className="search sidebar-item">
        <div className="sidebar-heading">
          <h2>Search</h2>
        </div>
        <form className="blog-search-container box-container">
          <div className="input-box">
            <input type="search" id="blog-search" placeholder="Search..." required />
            <button type="submit"><i className="fas fa-search"></i></button>
          </div>
        </form>
      </div>
    );
  };
  
  const CategoryArea = ({ categories }) => (
    <div className="category sidebar-item">
      <div className="sidebar-heading">
        <h2>Categories</h2>
      </div>
      <div className="box-container">
        {categories.map((category, index) => (
          <a href="#" key={index} className="item">
            <span><i className="fa-solid fa-shirt"></i>{category.name}</span>
            <p>({category.count})</p>
          </a>
        ))}
      </div>
    </div>
  );
  
  const RecentPosts = ({ posts }) => (
    <div className="recent-posts sidebar-item">
      <div className="sidebar-heading">
        <h2>Recent Posts</h2>
      </div>
      <div className="box-container">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.imageUrl} alt="Recent Post" />
            <a className="main-heading" href={post.link}>{post.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
  const TagsArea = ({ tags }) => (
    <div className="tags sidebar-item">
      <div className="sidebar-heading">
        <h2>Tags</h2>
      </div>
      <div className="box-container">
        {tags.map((tag, index) => (
          <a href="#" key={index} className="tag-item">{tag}</a>
        ))}
      </div>
    </div>
  );
  const BlogImage = ({ src, alt, category }) => (
    <div className="image">
      <img src={src} alt={alt} />
      <div className="category">{category}</div>
    </div>
  );
  
  const BlogContent = ({ title, author, date, description, importantNote, gallery, tags, share }) => (
    <div className="content">
      <h6 className="main-heading">{title}</h6>
      <div className="details">
        <h5><i className="fa-solid fa-circle-user"></i><span>By {author}</span></h5>
        <h5><i className="fa-regular fa-calendar-days"></i><span>{date}</span></h5>
      </div>
      {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      <div className="important">
        <i className="fa-solid fa-quote-right"></i>
        <div className="box-container">{importantNote}</div>
      </div>
      <div className="blog-gallery page-gallery">
        {gallery.map((image, index) => (
          <a href={image.href} key={index}>
            <img src={image.src} alt={image.alt} />
          </a>
        ))}
      </div>
      <div className="end-details">
        <div className="tags">{tags.map((tag, index) => <a href="#" key={index}><span>{tag}</span></a>)}</div>
        <div className="share">{share.map((icon, index) => <i key={index} className={icon}></i>)}</div>
      </div>
    </div>
  );
  
  const Comments = ({ comments }) => (
    <div className="comments">
      <h4>{comments.length} Comments</h4>
      <div className="box-container">
        {comments.map((comment, index) => (
          <div className="comment-item" key={index}>
            <div className="main comment">
              <div className="comment-image">
                <img src={comment.image} alt="Comment-Author-Pic" />
              </div>
              <div className="comment-content">
                <div className="comment-intro">
                  <div className="text">
                    <h3>{comment.author}</h3>
                    <h6>{comment.date}</h6>
                  </div>
                  <div className="icon-item"><i className="fas fa-reply"></i><span>Reply</span></div>
                </div>
                <p className="text">{comment.text}</p>
              </div>
            </div>
            {comment.replies && comment.replies.map((reply, replyIndex) => (
              <div className="reply comment" key={replyIndex}>
                <div className="comment-image">
                  <img src={reply.image} alt="Comment-Author-Pic" />
                </div>
                <div className="comment-content">
                  <div className="comment-intro">
                    <div className="text">
                      <h3>{reply.author}</h3>
                      <h6>{reply.date}</h6>
                    </div>
                    <div className="icon-item"><i className="fas fa-reply"></i><span>Reply</span></div>
                  </div>
                  <p className="text">{reply.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  
  const CommentForm = () => (
    <div className="leave-reply">
      <form className="form" action="#">
        <h3>Leave a Comment</h3>
        <div className="input-box">
          <input type="text" name="name" className="box" id="name" placeholder="Name" required />
          <input type="email" name="email" className="box" id="email" placeholder="Email" required />
        </div>
        <textarea cols="30" rows="10" name="comment" className="box" id="comment" placeholder="Comment" required></textarea>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
  
  const Sidebar = ({ search, categories, recentPosts, tags }) => (
    <div className="sidebar">
      <SearchArea />
      <CategoryArea categories={categories} />
      <RecentPosts posts={recentPosts} />
      <TagsArea tags={tags} />
    </div>
  );


  const BlogSingle = () => {
    // Dummy data for components

  
    const comments = [
      {
        author: "Benjamin Alexander",
        date: "Dec 31, 2023",
        image: "./Pic-1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        replies: [
          {
            author: "Isabella Grace",
            date: "Dec 31, 2023",
            image: "./Pic-2.jpg",
            text: "Lorem ipsum reply text."
          }
        ]
      },
      // Add more comments as needed
    ];
  
    const sidebarInfo = {
      search: {},
      categories: [
        { name: 'Fabric Care', count: 30 },
        { name: 'Laundry Hacks', count: 20 },
        { name: 'Eco-Friendly', count: 15 },
        { name: 'Wardrobe Maintenance', count: 10 },
        { name: 'Dry Cleaning', count: 5 }
        // ... other categories
      ],
      recentPosts: [
        { title: 'Choosing the Right Laundry Detergent', imageUrl: './Blog-1.jpg', link: '/Blog-Single' },
        { title: 'Efficient Clothes Folding Techniques', imageUrl: './Blog-2.jpg', link: './Blog-Single' },
        { title: 'Sustainable Laundry Detergent Options', imageUrl: './Blog-3.jpg', link: './Blog-Single' }
        ],
      tags: ['DryCleaning', 'EcoFriendly', 'Stains', 'Fabrics', 'Laundry', 'Cleaning', 'Products']
    };
    const BlogInfo = () => {
        return (
          <div className="blog-info page-info">
            <div className="image">
              <img src="./Blog-1.jpg" alt="Choosing The Right Laundry Detergent" />
              <div className="category">Fabric Care</div>
            </div>
      
            <div className="content">
              <h6 className="main-heading">Choosing The Right Laundry Detergent</h6>
      
              <div className="details">
                <h5><i className="fa-solid fa-circle-user"></i><span>By Admin</span></h5>
                <h5><i className="fa-regular fa-calendar-days"></i><span>Dec 30, 2023</span></h5>
              </div>
      
              <p>Discover the key factors to consider when choosing the right laundry detergent for your clothes. From understanding different types of detergents to selecting the one that suits your fabrics, this guide will help you keep your clothes clean and fresh. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus, voluptate, dicta consequuntur quae.</p>
              <p>Learn about the significance of detergent ingredients, fragrance preferences, and eco-friendly options to make an informed decision. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus, voluptate, dicta consequuntur quae,</p>
      
              <div className="important">
                <i className="fa-solid fa-quote-right"></i>
                <div className="box-container">
                  Making the right choice in laundry detergent is crucial for preserving the longevity and quality of your clothes. Explore the options available, and ensure your laundry routine contributes to the overall well-being of your garments.
                  <div className="intro">
                    <span></span>
                    <h6>Laundry Guru</h6>
                  </div>
                </div>
              </div>
      
              <p>Learn about the significance of detergent ingredients, fragrance preferences, and eco-friendly options to make an informed decision. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus, voluptate, dicta consequuntur quae,</p>
      
              <div className="blog-gallery page-gallery">
                <a href="./Product-5.jpg">
                  <img src="./Product-5.jpg" alt="Laundry-Detergent-Gallery-Image" />
                </a>
                <a href="./Service-1.jpg">
                  <img src="./Service-1.jpg" alt="Laundry-Detergent-Gallery-Image" />
                </a>
              </div>
      
              <p>Visualize the various laundry detergent options available in the market through our gallery. Get insights into the packaging, types, and recommended usage to make an informed decision for your laundry needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus, voluptate, dicta consequuntur quae,</p>
      
              <div className="end-details">
                <div className="tags">
                  <a href="#"><span>Laundry</span></a>
                  <a href="#"><span>Detergent</span></a>
                  <a href="#"><span>Cleaning Tips</span></a>
                </div>
      
                <div className="share">
                  <h3>Share:</h3>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
    return (
      <section className="blog-single">
        <div className="blog-container">
          <BlogInfo/>
          <Comments comments={comments} />
          <CommentForm />
        </div>
        <Sidebar
          search={sidebarInfo.search}
          categories={sidebarInfo.categories}
          recentPosts={sidebarInfo.recentPosts}
          tags={sidebarInfo.tags}
        />
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
        <BlogSingle />
        <Footer />
      </div>
    );
  };
  
  export default App;