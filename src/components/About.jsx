import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mb-5">
          Hamdard Committee Foundation is a non-profit organization dedicated to serving humanity without any discrimination of caste, creed, and/or color. We believe that everyone deserves support in equality: food, shelter, access to education, and healthcare facilities. Our goal is to work for creating a world where equality sustains.
        </p>

        {/* Founder and Team Profiles */}
        <div className="row text-center">
          {[
            { role: "Founder", name: "Dr. Ali Ahmad", phone: "123-456-7890", email: "founder@example.com", img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/419198712_6788803617915836_3717419480588886131_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFuH56bzRXuauG8pwB1eUWN_rJhKd2DSWX-smEp3YNJZWsosLDhFjc8bpJbTRHalO9dE0eJgwvZOQI4aSwIqTei&_nc_ohc=tMTlp6Y5Sk4Q7kNvgGQj47d&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AIZrrxwqck7U9OnnDfh18al&oh=00_AYCrYk1OuVJTEjtqvrkEQFa7TWNnAUnKGv_NnZe_4R0TKA&oe=6743F9B9" },
            { role: "President", name: "Jane Smith", phone: "987-654-3210", email: "president@example.com", img: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/424952805_122098979096209976_1657750315369508447_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGywnM-12PK_Wv0jj0V1OrFbWcQGqWHE_1tZxAapYcT_YxFKdBZCpmXkorIy9RNaZ-Q0B1Z7pnVTzkk92UO5mBQ&_nc_ohc=xIrSFr-qh34Q7kNvgFX9YcI&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AKr52WwZChaWpYD_g4cuPAL&oh=00_AYDzjwRyrHnLgiH_arJVhkegU3-LB44tX5ngRel8BCrIUQ&oe=6743CCFC" },
            { role: "Vice President", name: "Ali Khan", phone: "567-890-1234", email: "vp@example.com", img: "https://via.placeholder.com/150" },
            // Add more team members as needed
          ].map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img src={member.img} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  <p className="card-text">Phone: {member.phone}</p>
                  <p className="card-text">Email: {member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
