import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donation from './components/Donation';
import AdminDashboard from "./components/AdminDashboard"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<MediaGallery />} />
        <Route path="/donate" element={<Donation/>} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
