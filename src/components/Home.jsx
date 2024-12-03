import React, { useState } from "react";
import "./Home.css"; // For custom tweaks if needed
import "bootstrap/dist/css/bootstrap.min.css";
import Bartan from "../assets/Bartan.jpg";
import Qabarstan from "../assets/Qabarstan.jpg";
import streetlight from "../assets/streetlight.jpg";
import Ambulance from "../assets/Ambulance.jpg";
import Tent from "../assets/tent.jpg";
import Waterplant from "../assets/Waterplant.jpg";
import medical2 from "../assets/Media Gallery/2.jpeg";
import Guest from '../assets/HomePageImg/guest.jpg';
import AC from '../assets/HomePageImg/Ac.jpg'
import Plant from '../assets/HomePageImg/Plant.jpg'


const Home = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send form data to the backend.
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="home">
      {/* Image Slider */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {[
            {
              img: Guest,
              caption: "1",
            },
            {
              img: Plant,
              caption: "2",
            },
            {
              img: AC,
              caption: "3",
            },
          ].map((slide, index) => (
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {[
            {
              img: Guest,
              caption: "",
            },
            {
              img: Plant,
              caption: "",
            },
            {
              img: AC,
              caption: "",
            },
          ].map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={slide.img}
                className="d-block w-100 img-fluid"
                alt={slide.caption}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h5 className="bg-dark text-white py-1 px-3 rounded">
                  {slide.caption}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Our Projects */}
      <section className="projects py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Projects</h2>
          <div className="row g-4">
            {[
              {
                name: "Ambulance Service",
                img: Ambulance,
                contact: "Incharge: Abdul Jabbar - 03464838280",
              },
              {
                name: "Free Tent Service",
                img: Tent,
                contact: "Incharge: Shahbaz Tahiri - 03131761339",
              },
              {
                name: "Bartan Service",
                img: Bartan,
                contact: "Incharge: Shahbaz Tahiri - 03131761339",
              },
              {
                name: "Water Filter Plant",
                img: Waterplant,
                contact: "Incharge: Abdul Rasheed - 03039468271",
              },
              {
                name: "Qabarstan",
                img: Qabarstan,
                contact: "Incharge: Muhammad Yaseen - 03014977322",
              },
              {
                name: "Street Light",
                img: streetlight,
                contact: "Hamdard Committee Office",
              },
            ].map((project, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text text-muted">{project.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="projects py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Projects</h2>
          <div className="row g-4">
            {[
              {
                name: "Hamdard Committee free Community Medical Camp",
                img: medical2,
              },
              {
                name: "Marriage Hall",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TSU3EoZ3r8aVNztKddgcYe9rV8XkVTXQpA&s",
              },
              {
                name: "Sports Ground",
                img: "https://img.freepik.com/free-vector/gradient-baseball-background_23-2150742165.jpg?semt=ais_hybrid",
              },
              {
                name: "Annual Event",
                img: "https://www.lyricland.co.uk/resources/Annual-Events-Logo.png",
              },
            ].map((project, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Notifications */}
      <section className="notifications py-5">
        <div className="container">
          <h2 className="text-center mb-4">Event Notifications</h2>
          <ul className="list-group list-group-flush">
            {[
              "Meeting on Dec 1, 2024",
              "Charity Drive - Nov 25, 2024",
              "Blood Donation Camp - Jan 15, 2025",
            ].map((event, index) => (
              <li className="list-group-item" key={index}>
                <i className="bi bi-bell-fill text-success"></i> {event}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          {isSubmitted ? (
            <div className="alert alert-success" role="alert">
              Thank you for contacting us! We will get back to you soon.
            </div>
          ) : (
            <form
              className="row g-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitted(false); // Reset submission status if needed
                try {
                  const response = await fetch(
                    "https://formspree.io/f/xnnqzopd",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(formData),
                    }
                  );

                  if (response.ok) {
                    setIsSubmitted(true);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  } else {
                    alert("Error sending message. Please try again.");
                  }
                } catch (error) {
                  alert("An error occurred. Please check your connection.");
                }
              }}
            >
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
