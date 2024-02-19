import React from 'react';
import './css/main.css';
import './css/responsive.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    navigate('/Home');
  };

  return (
    <section className="login">
      <form className="account-form" onSubmit={handleLogin}>
      <img src='./logo.png' alt="Logo" />
        <h3>login</h3>
        <input type="email" name="email" placeholder="enter your email" id="email" className="box" required />
        <input type="password" name="password" placeholder="enter your password" id="password" className="box" required />
        <div className="info">
          <div className="checkbox-label">
            <input type="checkbox" checked id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
            <div className="checkbox-indicator" />
          </div>
          <div className="forgot">
            <Link to="/forgot" className="link">forgot password</Link>
          </div>
        </div>
        <button type="submit" className="btn" id="login-btn">login</button>
        <p>don't have an account? <Link to="/register" className="link">register</Link></p>
      </form>
    </section>
  );
};

export default LoginPage;
