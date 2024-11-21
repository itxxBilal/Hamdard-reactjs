import React, { useState } from "react";
import './About.css'; 
import logo from '../assets/headerlogo.png';
import President from '../assets/Team/President.png';

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
            { role: "Founder", name: "Dr. Ali Ahmad", phone: "+923007935207", email: "founder@example.com", img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/419198712_6788803617915836_3717419480588886131_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFuH56bzRXuauG8pwB1eUWN_rJhKd2DSWX-smEp3YNJZWsosLDhFjc8bpJbTRHalO9dE0eJgwvZOQI4aSwIqTei&_nc_ohc=oeK3-vh--1UQ7kNvgH4v_kB&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AfRItO0bS9T0UOioDoUlmyQ&oh=00_AYBtScJ5hbEZQ_N6AxuFrHq3SpbvdWZTX7oPbu_mjE0_EA&oe=6744A279" },
            { role: "President", name: "Zafar Iqbal", phone: "+923215716156", email: "president@example.com", img: President },
            { role: "General Secretary", name: "Kamran Haroon", phone: "+923054141548", email: "secretary@example.com", img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/395621068_3725662627666493_7954102251536744491_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHvSwN8MZ6gim18Ocdq0vTjlOD85OzglXWU4Pzk7OCVdbgfCyW3HAxP2hovOdcALqiqbN5ZFEiuWcBALy9qNO57&_nc_ohc=coZBqlJfrUEQ7kNvgEzPYYG&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AUlJIYZf2_0v1UOtsvvp0lf&oh=00_AYAHUsLh4Q6QateHG_D1nM9U_Rd6F21fvWkVFdnXDl3iLA&oe=6744A255" },
            // { role: "Member", name: "Member 1", phone: "111-222-3333", email: "member1@example.com", img: "https://via.placeholder.com/150" },
            // { role: "Member", name: "Member 2", phone: "444-555-6666", email: "member2@example.com", img: "https://via.placeholder.com/150" },
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
