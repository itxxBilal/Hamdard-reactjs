import React, { useState } from "react";
import './About.css'; 
import logo from '../assets/headerlogo.png';

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    cnic: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining as a member!");
    setFormData({ name: "", whatsapp: "", cnic: "", address: "" });
  };

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* About Section */}
        <h1 className="text-center mb-4">About Hamdard Committee</h1>
        <div className="text-center mb-4">
          <img
            src= {logo} // Replace with your logo URL
            alt="Hamdard Committee Logo"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </div>
        <p className="text-center mb-5">
          Hamdard Committee Foundation is a non-profit organization dedicated
          to serving humanity without any discrimination of caste, creed, or
          color. We believe in equality, providing food, shelter, access to
          education, and healthcare facilities for everyone. Our goal is to
          create a world where equality thrives.
        </p>

        {/* Success Story */}
        <h2 className="text-center mb-4">Our Success Story</h2>
        <p className="text-center mb-5">
          Established on June 30, 2019, our journey began with our first
          project—an ambulance service supported by our community. Over the
          years, we expanded to other vital projects, including *Bartan Service*
          and *Qabarstan Maintenance*, making a meaningful impact in our
          community.
        </p>

        {/* Founder and Team Profiles */}
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row text-center">
          {[
            { role: "Founder", name: "Dr. Ali Ahmad", phone: "123-456-7890", email: "founder@example.com", img: "https://via.placeholder.com/150" },
            { role: "President", name: "Zafar Iqbal", phone: "987-654-3210", email: "president@example.com", img: "https://via.placeholder.com/150" },
            { role: "General Secretary", name: "Kamran Haroon", phone: "567-890-1234", email: "secretary@example.com", img: "https://via.placeholder.com/150" },
            { role: "Member", name: "Member 1", phone: "111-222-3333", email: "member1@example.com", img: "https://via.placeholder.com/150" },
            { role: "Member", name: "Member 2", phone: "444-555-6666", email: "member2@example.com", img: "https://via.placeholder.com/150" },
            // Add more members as needed
          ].map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={member.img}
                  className="card-img-top"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.role}
                  </h6>
                  <p className="card-text">Phone: {member.phone}</p>
                  <p className="card-text">Email: {member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Member Form */}
        <h2 className="text-center mb-4">Become a Member</h2>
        <form
          className="row g-3 bg-light p-4 shadow rounded"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="WhatsApp Number"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="CNIC No"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default About;
