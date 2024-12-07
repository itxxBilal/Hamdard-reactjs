import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donation from './components/Donation';
import Dashboard from "./components/Dashboard"
import HamdardCommittee from './components/HamdardCommittee';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<MediaGallery />} />
        <Route path="/donate" element={<Donation/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="hamdrd" element={<HamdardCommittee />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
