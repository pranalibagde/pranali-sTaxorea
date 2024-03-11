import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import FreelancerHub from './components/freelancerHub';
import Services from './components/services';
import Aboutus from './components/aboutus';
import Blogs from './components/blogs';
import BlogDetails from './components/blogDetails';
import Contact from './components/contact';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancerHub" element={<FreelancerHub />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs /> } />
        <Route path="/blogDetails" element={<BlogDetails/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

   </BrowserRouter>
  );
};

export default App;