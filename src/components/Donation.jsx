import React, { useState } from "react";
import { FaCopy, FaMoneyBillAlt, FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { Card, Row, Col, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Donation.css";

const topDonors = [
  { name: "Ali Khan", amount: "$500" },
  { name: "Sarah Ahmed", amount: "$400" },
  { name: "Muhammad Zaid", amount: "$350" },
];

const Donation = () => {
  const [copied, setCopied] = useState(false); // Track copy state

  const accountNumber = "123456789"; // Example account number

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
          <Card className="donation-card">
            <Card.Body>
              <h4>Bank Account Details</h4>
              <p><strong>Bank Name:</strong> XYZ Bank</p>
              <p><strong>Account Number:</strong>
                <span className="account-number">
                  {accountNumber}
                </span>
                <CopyToClipboard text={accountNumber} onCopy={() => setCopied(true)}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="copy-tooltip">{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>}
                  >
                    <FaCopy className="copy-icon" />
                  </OverlayTrigger>
                </CopyToClipboard>
              </p>
              <p><strong>IFSC Code:</strong> XYZ1234</p>
              <p><strong>Account Type:</strong> Savings</p>
              <div className="donation-action">
                <Button variant="success" className="donate-btn" href="#" target="_blank">
                  <FaMoneyBillAlt /> Send Your Donation ScreenShort
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="donation-card">
            <Card.Body>
              <h4>Quranic Verse on Charity</h4>
              <p className="quranic-ayat">
                <em>"The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven ears. In each ear, there are a hundred grains." - [Quran 2:261]</em>
              </p>
              <h4>Hadith on Charity</h4>
              <p className="hadith">
                <em>
                  "The best of people are those that bring most benefit to the rest of mankind." – [Hadith, Daraqutni]
                </em>
              </p>
              <p className="hadith">
                <em>
                  "صدقہ دینے والے کو اللہ تعالیٰ جنت میں ایسا مقام دے گا جہاں وہ دوسرے لوگوں سے بلند ہوگا۔" – [حدیث]
                </em>
              </p>
              <p className="hadith">
                <em>
                  "اللہ کی راہ میں خرچ کرنا تمہارے مال کا زیاں نہیں کرتا، بلکہ وہ اس سے تمہاری جائیداد میں اضافہ کرتا ہے۔" – [حدیث]
                </em>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="top-donors">
        <h3 className="donation-section-title">Our Top Donors</h3>
        <Row>
          {topDonors.map((donor, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="top-donor-card">
                <Card.Body>
                  <FaUsers className="donor-icon" />
                  <h5>{donor.name}</h5>
                  <p>{donor.amount}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Donation;
