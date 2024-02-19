import React from 'react';
import { Link } from 'react-router-dom';
import './css/main.css';
import './css/responsive.css';

const ResetPassword = () => {
  return (
    <>
      {/* Scroll-Top Area */}
      <a href="#" className="scroll-top" style={{ display: 'none' }}>
        <i className="fa-solid fa-arrow-up-long"></i>
      </a>

      {/* Reset-Password Area */}
      <section className="reset-pwd">
        <form className="account-form dark-form">
          <img src='./logo.png' alt="Logo" />
          <h3>Forgot Password!</h3>
          <input type="email" name="email" placeholder="Enter your email" id="email" className="box" required />
          <button type="submit" className="btn" name="reset-link" id="reset-link">Send Reset Link</button>
          <p>Don't have an account? <Link className="link" to="/register">Register</Link></p>
        </form>
      </section>
    </>
  );
};

export default ResetPassword;
