import React, { useState } from "react";
import './About.css'; 
import logo from '../assets/headerlogo.png';
import President from '../assets/Team/President.png';
import Kamran from '../assets/Team/Kamran.jpg';
import Ali from '../assets/Team/Ali.jpg';
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

    fetch("https://formspree.io/f/xnnqzopd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for joining as a member!");
          setFormData({ name: "", whatsapp: "", cnic: "", address: "" });
        } else {
          alert("There was an error. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error. Please try again later.");
      });
  };

  const departments = [
    {
      name: "Finance",
      chairman: "Zafar Iqbal",
      viceChairman: "Kamran",
      members: ["Muhammad Awais", "Muhammad Tabraiz", "Usman Gill"],
    },
    {
      name: "Ambulance",
      chairman: "Abdul Jabbar",
      viceChairman: "Dr. Ali Ahmad",
      members: ["Munair Ahmad", "Muhammad Awais", "Muhammad Javed", "Wajid Ali"],
    },
    {
      name: "Eid Gha ",
      chairman: "Muhammad Yaseen",
      viceChairman: "Abdul Rasheed",
      members: ["Muhammad Umar", "Ghulam Hussain", "Rana Waqar", "Maqbool Ahmad"],
    },
    {
      name: "School",
      chairman: "Muhammad Tabraiz",
      viceChairman: "Zafar Iqbal",
      members: ["Abdul Rasheed", "Shahbaz Tahiri", "Dr. Ali Ahmad", "Haji Saif", "Kamran Haroon"],
    },
    {
      name: "Bartan (Utensils)",
      chairman: "Shahbaz Tahiri",
      viceChairman: "Sharif Shakir",
      members: ["Muhammad Yaseen", "Abdul Jabbar", "Khalil Ahmad"],
    },
    {
      name: "Water Filter",
      chairman: "Abdul Rasheed",
      viceChairman: "Abdul Jabbar",
      members: ["Ghulam Hussain", "Muhammad Yaseen", "Khalil Ahmad", "Muhammad Umar", "Dr. Ali Ahmad"],
    },
    {
      name: "Usher",
      chairman: "Kamran Haroon",
      viceChairman: "Usman Gill",
      members: ["Maqbool Ahmad", "Munir Ahmad", "Haji Saif", "Muhammad Tabraiz"],
    },
    {
      name: "New Planning",
      chairman: "Dr. Ali Ahmad",
      viceChairman: "Zafar Iqbal",
      members: ["Usman Gul", "Muhammad Awais", "Wajid Ali", "Rana Waqar", "Muhammad Tabraiz"],
    }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* About Section */}
        <h1 className="text-center mb-4">About Hamdard Committee</h1>
        <div className="text-center mb-4">
          <img
            src= {logo} 
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
            { role: "Founder", name: "Dr. Ali Ahmad", phone: "+923007935207", email: "founder@example.com", img: Ali },
            { role: "President", name: "Zafar Iqbal", phone: "+923215716156", email: "president@example.com", img: President },
            { role: "General Secretary", name: "Kamran Haroon", phone: "+923054141548", email: "secretary@example.com", img: Kamran },
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

        {/* Departments Section */}
        <h2 className="text-center mb-4">Our Departments</h2>
        <div className="row text-center">
          {departments.map((dept, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card department-card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{dept.name} Department</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Chairman: {dept.chairman}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Vice Chairman: {dept.viceChairman}</h6>
                  <ul className="list-unstyled">
                    {dept.members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
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
