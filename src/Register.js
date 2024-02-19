import React from 'react';
import './css/main.css';
import './css/responsive.css';
import { Link } from 'react-router-dom';

// Importing images - assuming you have an images folder in `src/assets`
// import '../../assets/vendors/font-awesome/css/all.min.css'; // Importing Font Awesome CSS

function App() {
  return (
    <>
      {/* Scroll-Top Area */}
      <a href="#" className="scroll-top">
        <i className="fa-solid fa-arrow-up-long"></i>
      </a>

      {/* Register Area */}
      <section className="register">
        <form className="account-form">
        <img src='./logo.png' alt="Logo" />

          <h3>register</h3>

          <input type="text" name="name" placeholder="enter your name" id="name" className="box" required />
          <input type="email" name="email" placeholder="enter your email" id="email" className="box" required />
          <input type="password" name="password" placeholder="enter your password" id="password" className="box" required />
          <input type="password" name="repeat-password" placeholder="repeat your password" id="repeat-password" className="box" required />

          <div className="checkbox-label">
            <input type="checkbox" checked={true} id="terms" />
            <label htmlFor="terms">
              i agree with the <span>&nbsp;terms &amp; conditions</span>
            </label>
            <div className="checkbox-indicator"></div>
          </div>

          <button type="submit" className="btn" name="register" id="register">register</button>

          <p>already have an account? <Link to="/" className="link">login</Link></p>
        </form>
      </section>

      {/* Scripts */}
      {/* Assuming jQuery and custom scripts are handled separately, not included in the JSX */}
    </>
  );
}

export default App;
