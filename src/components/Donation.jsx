import React, { useState } from "react";
import { FaCopy, FaMoneyBillAlt, FaUsers, FaWhatsapp } from "react-icons/fa";
import { Card, Row, Col, Button, Tooltip, OverlayTrigger, Form } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Donation.css";

const topDonors = [
  { name: "Muhammad Hanif", amount: "Rs:6500" },
  { name: "Muhammad Asif", amount: "Rs:1000" },
  { name: "Muhammad Anwar", amount: "Rs:1000" },
];

const Donation = () => {
  const [copied, setCopied] = useState(false); // Track copy state
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [showPopup, setShowPopup] = useState(false); // Track the popup state

  const accountNumber = "0023827000583303"; // Example account number

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Formspree submission (e.g., through an API call or Formspree)
    setShowPopup(true); // Show popup after form submission
    setFormData({ name: "", whatsapp: "" });
  };

  return (
    <div className="donation-container">
      <div className="text-center my-5">
        <h2 className="donation-heading">Your Donation Helps the Needy</h2>
        <p className="donation-subheading">
          "Your donations will be used for the welfare of the poor and underprivileged members of our community."
        </p>
      </div>

      <Row className="my-4">
        <Col md={6}>
          <Card className="donation-card mb-4">
            <Card.Body>
              <h4>Bank Account Details</h4>
              <p><strong>Bank Name:</strong> HBL Bank</p>
              <p>
                <strong>Account Number:</strong>
                <span className="account-number ms-2">{accountNumber}</span>
                <CopyToClipboard text={accountNumber} onCopy={() => setCopied(true)}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="copy-tooltip">{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>}
                    onExit={() => setCopied(false)} // Reset tooltip on exit
                  >
                    <FaCopy className="copy-icon ms-2" />
                  </OverlayTrigger>
                </CopyToClipboard>
              </p>
              <p><strong>Account Holder Name:</strong> Maqbool & Muddsar</p>
            </Card.Body>
          </Card>

          {/* JazzCash Card */}
          {/* <Card className="donation-card">
            <Card.Body>
              <h4>Bank Account Details</h4>
              <p><strong>Service:</strong> JazzCash</p>
              <p><strong>Account Number:</strong> 03000000000</p>
              <p><strong>Account Holder Name:</strong> Maqbool & Muddsar</p>
            </Card.Body>
          </Card> */}
        </Col>

        {/* Charity Quotes Section */}
        <Col md={6}>
          <Card className="donation-card">
            <Card.Body>
              <h4>Quranic Verse on Charity</h4>
              <p className="quranic-ayat">
                <em>
                  "The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven ears. In each ear, there are a hundred grains."
                  <br /> - [Quran 2:261]
                </em>
              </p>
              <p className="urdu-translation mt-3">
                <em>
                  "جو لوگ اللہ کی راہ میں اپنے مال خرچ کرتے ہیں، ان کی مثال اس دانے کی طرح ہے جو سات بالیاں نکالے اور ہر بالی میں سو دانے ہوں۔"
                </em>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form for Donations */}
      <div className="donation-form my-5">
        <h3 className="text-center mb-4">Contact Us to Donate</h3>
        <Form
          action="https://formspree.io/f/xnnqzopd"
          method="POST"
          onSubmit={handleSubmit}
          className="p-4 bg-light shadow rounded"
        >
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="WhatsApp Number"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleFormChange}
                required
              />
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" variant="success">
              Contact Us
            </Button>
          </div>
        </Form>
      </div>

      {/* WhatsApp Contact */}
      <div className="text-center mt-4">
        <a href="https://wa.me/03058880172" target="_blank" rel="noopener noreferrer">
          <Button variant="success">
            <FaWhatsapp size={24} className="me-2" /> Contact via WhatsApp
          </Button>
        </a>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4>Thank You!</h4>
            <p>Thank you, {formData.name}! We will get back to you soon on WhatsApp.</p>
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
