import React, { useState } from 'react';
import './Home.css'; // For custom tweaks if needed
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ maxHeight: '60vh' }}>
          {[
            { img: "https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/451299449_807402014910411_6494957297024501573_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHKkAOpgIZbgjhk0_Nk4pcgpnaP8wIg1tCmdo_zAiDW0ATwtUuwaGj4DHkFhQ_JMzJyjhJ5JkeslWrubJFZ-lPJ&_nc_ohc=BifsUCLXP04Q7kNvgFbYguR&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=APhj6zu1TvPAOa1JpaGwOkc&oh=00_AYAtB8b_TSsfjgk1XNWrDfcGMVZXAL4qf9mPJFLUbi5ORQ&oe=6744006F", caption: "RO Water Filter Plant" },
            { img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/424645813_709078028076144_438974091807255429_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHYf4EQqlGQrmZH2Y9gp-JBRmxnWVcqrfhGbGdZVyqt-AlqjUwcGO3z4Us-forW2GvOVodFEaFB_QpwabEH9jji&_nc_ohc=Wd9ueNn4tNcQ7kNvgGat6XY&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=ATglsGeSQqOi-6F8Lw4aC9U&oh=00_AYA04keXBHZUULkzpn3ZRvrNCSYqW7wuo7f_W7TJWdZhQw&oe=6743DA82", caption: "Ambulance Service" },
            { img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/400908734_664127905904490_3870588051589845726_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcUlX5Fgr5eCHmYnJ4OF6garnO7K8Z_45quc7srxn_jh7OWqBT7Uu1j6cl6n-WZGHR6LzUu7VISDL12nsQRSq4&_nc_ohc=lBH2zraTvLAQ7kNvgHt12a5&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AKv4VF_npR2W3mJ9JkWKd6h&oh=00_AYAGoiZ12zXrD4yngV1eJM-dcn2gm48cwODY3y-CPtm0KQ&oe=6743FAB0", caption: "Free Bartan Service" },
          ].map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img src={slide.img} className="d-block w-100" alt={slide.caption} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.caption}</h5>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Our Projects */}
      <section className="projects py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Projects</h2>
          <div className="row g-4">
            {[
              { name: 'Ambulance Service', img: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/244366734_866528697391463_3531799277388306533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdyK5xfnYhYEYBjdw9SasP_uI3bsBYM7b-4jduwFgztqWCkZbFYk7l-jAYGCdiDet-pNaiA6ycPEw8lNYMtdMv&_nc_ohc=8shaBkSLbkEQ7kNvgF_RH0G&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=ATNwkHhDzw51ouK9rFzq19b&oh=00_AYAo2gRY8pgWzs78fwxr_yGETbYoRYoO9wr87gfbO9pGBg&oe=6743D369', contact: 'John Doe - 1234567890' },
              { name: 'Free Tent Service', img: 'https://via.placeholder.com/300', contact: 'Jane Smith - 0987654321' },
              { name: 'Bartan Service', img: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/244401068_866528877391445_3091452059413497112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2-Uig8AuUYJTQXEniB-TtamLtdxybp_pqYu13HJun-kuJRypJN7eh6uS44D-JwIF1kLBP48QJUVBTUmb7Ev-f&_nc_ohc=olMXX2UiygoQ7kNvgHCbV5e&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=Ag_FuT-s452g_ETYdabLQqh&oh=00_AYAuHQUk2mVBEnko8QOIhlc49WI0hUUDRS3rI6ugco9vHQ&oe=6743F3DC', contact: 'Ali Khan - 1122334455' },
              { name: 'Water Filter Plant', img: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/244257693_866529380724728_2376354950755541470_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFH4Ra0U1zfasDHpnAs5gQsZL5tduHrx7xkvm124evHvAej3zinQJpI-C6y54gzJrJduHCBnZP2yvuaV35tdAbk&_nc_ohc=Z1P1ZjziTe8Q7kNvgEbWpNJ&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=A4IP5WMXgZHWmIP7Ol9kXJJ&oh=00_AYDDJc4-UiIAb592mKebwqcq73-S81zWzSLg1XT48OeEDA&oe=6743EFCF', contact: 'Sara Lee - 5566778899' },
              { name: 'Qabarstan', img: 'https://via.placeholder.com/300', contact: 'Mike Ross - 2233445566' },
              { name: 'Street Light', img: 'https://via.placeholder.com/300', contact: 'Rachel Zane - 3344556677' },
            ].map((project, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={project.img} className="card-img-top" alt={project.name} />
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
              { name: 'Medical Camp', img: 'https://via.placeholder.com/300' },
              { name: 'Marriage Hall', img: 'https://via.placeholder.com/300' },
              { name: 'Sports Ground', img: 'https://via.placeholder.com/300' },
              { name: 'Others', img: 'https://via.placeholder.com/300' },
            ].map((project, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={project.img} className="card-img-top" alt={project.name} />
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
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
