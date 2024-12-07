import React, { useState } from "react";
import { FaCopy, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { Carousel, Card, Row, Col, Button, Tooltip, OverlayTrigger, Form } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import jazzcash from "../assets/images/jazzCash.webp";
import HBL from "../assets/images/HBL.png";
import "./Donation.css";

const topDonors = [
  { name: "Saif-Ur-Rehman", amount: "Rs:20,000" },
  { name: "Nadeem Khan", amount: "Rs:5,000" },
  { name: "Aslam Rehmani", amount: "Rs:4,000" },
];

const Donation = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpwzezol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowPopup(true);
        setFormData({ name: "", whatsapp: "" });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error. Please try again later.");
    }
  };

  const whatsappMessage = `https://wa.me/+923058880172?text=Hello, my name is ${formData.name}. I would like to donate.`;

  return (
    <div className="donation-section">
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/+923058880172"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="donation-heading">Support Hamdard Committee</h2>
        <p className="donation-description">
          "Your contributions empower us to provide welfare to the needy and improve the lives of the underprivileged."
        </p>
      </div>

      {/* Recent Donors */}
      <div className="recent-donors mb-4">
        <h3 className="text-center">Recent Donors</h3>
        <Carousel interval={3000} indicators={false}>
          {topDonors.map((donor, index) => (
            <Carousel.Item key={index}>
              <Card className="donor-card text-center mx-auto">
                <Card.Body>
                  <h5 className="donor-name">{donor.name}</h5>
                  <p className="donor-amount">{donor.amount}</p>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Hadith Section */}
        <div className="hadith-section text-center mt-4">
          <blockquote className="blockquote">
            <p>
              "بہترین صدقہ وہ ہے جو کسی ضرورت مند کو دیا جائے۔"<br />
              <cite>- صحیح بخاری</cite>
            </p>
          </blockquote>
        </div>
      </div>

      {/* Bank Details */}
      <Row className="mb-5">
        <Col md={6} className="mb-3">
          <Card className="donation-card bank-card">
            <Card.Body>
              <div className="logo-section">
                <img src={HBL} alt="HBL Bank Logo" className="bank-logo" />
              </div>
              <h4>HBL Bank</h4>
              <p>
                <strong>Account Number:</strong> 23827000583303
                <CopyToClipboard text="23827000583303" onCopy={() => setCopied(true)}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>}
                  >
                    <FaCopy className="copy-icon ms-2" />
                  </OverlayTrigger>
                </CopyToClipboard>
              </p>
              <p><strong>Account Holder:</strong> Maqbool & Muddsar</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="donation-card jazzcash-card">
            <Card.Body>
              <div className="logo-section">
                <img src={jazzcash} alt="JazzCash Logo" className="bank-logo" />
              </div>
              <h4>JazzCash</h4>
              <p><strong>Account Number:</strong> 03000000000</p>
              <p><strong>Account Holder:</strong> Maqbool & Muddsar</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Us for Donation */}
      <div className="contact-us-form mb-5">
        <Card className="p-4 shadow form-card">
          <h3 className="text-center mb-4">Contact Us for Donation</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                aria-label="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="WhatsApp Number"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleFormChange}
                required
                aria-label="Enter your WhatsApp number"
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success">Submit</Button>
            </div>
          </Form>
        </Card>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <FaCheckCircle size={50} color="green" className="mb-3" />
            <h4>Thank You!</h4>
            <p>We will get back to you soon on WhatsApp.</p>
            <Button onClick={() => setShowPopup(false)} variant="primary">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
