import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '2rem 0' }}>
      <Container>
        <Row className="text-left">
          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6>Hobbycue</h6>
            <ul className="list-unstyled mt-3 " style={{ fontSize: '8px' }}>
              <li>About Us</li>
              <li>Our Service</li>
              <li>Work With Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={12} md={2} className="mb-4 mb-md-0" style={{ fontSize: '8px' }}>
            <h6>How do I</h6>
            <ul className="list-unstyled mt-3">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </Col>
          <Col xs={12} md={2} className="mb-4 mb-md-0" style={{ fontSize: '8px' }}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled mt-3">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop/Store</li>
              <li>Community</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>Social Media</h5>
            <div className="d-flex flex-wrap mt-3 mb-3">
              <FaFacebook size={24} className="me-3 mb-3" />
              <FaTwitter size={24} className="me-3 mb-3" />
              <FaInstagram size={24} className="me-3 mb-3" />
              <FaPinterest size={24} className="me-3 mb-3" />
              <FaGoogle size={24} className="me-3 mb-3" />
              <FaYoutube size={24} className="me-3 mb-3" />
              <FaTelegram size={24} className="me-3 mb-3" />
              <FaEnvelope size={24} className="me-3 mb-3" />
            </div>
            <h5>Invite Friends</h5>
            <Form className="d-flex mt-3">
              <Form.Control type="email" placeholder="Email ID" className="me-2" />
              <Button style={{ backgroundColor: 'purple', color: 'white' }}>Invite</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <div style={{ backgroundColor: '#e0e0e0', padding: '1rem' }}>
              <p style={{ color: 'purple', fontSize: '14px', margin: 0 }}>© Purple Cues Private Limited</p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Footer;
