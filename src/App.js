import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Home from './Home';
import About from './About';
import Team from './Team';
import TeamSingle from './Team-Single';
import Testimonials from './Testimonials';
import FAQs from './FAQs';
import RequestQoute from './Request-Qoute';
import Contact from './Contact';
import Pricing from './Pricing';
import Process from './Process';
import Partners from './Partners';
import Service from './Service';
import ServiceSingle from './Service-Single';
import Projects from './Project';
import ProjectSingle from './Project-Single';
import BlogGrid from './Blog-Grid';
import BlogSingle from './Blog-Single';

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ResetPassword />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Team-Single" element={<TeamSingle/>} />
      <Route path="/Testimonials" element={<Testimonials/>} />
      <Route path="/FAQs" element={<FAQs/>} />
      <Route path="/Request-Quote" element={<RequestQoute/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Pricing" element={<Pricing/>} />
      <Route path="/Process" element={<Process/>} />
      <Route path="/Partners" element={<Partners/>} />
      <Route path="/Services" element={<Service/>} />
      <Route path="/Service-Single" element={<ServiceSingle/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Project-Single" element={<ProjectSingle/>} />
      <Route path="/Blog-Grid" element={<BlogGrid/>} />
      <Route path="/Blog-Single" element={<BlogSingle/>} />
    </Routes>
  );
}

export default App;
