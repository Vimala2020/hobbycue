import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: '#E6E6FA', padding: '2rem', margin:'16px' }}>
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <FaQuoteLeft size={50} className="mb-3" />
            <h2>Testimonial</h2>
            <p>Description of the testimonial goes here.</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-left">
          <audio controls className="w-100">
              <source src="audio-file-url.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
          </Col>
          <Col xs={12} md={3} className="text-center text-md-left">
          <Image
              src="profile-photo-url.jpg"
              roundedCircle
              width={100}
              height={100}
              alt="Profile Photo"
              className="mb-3 mb-md-0"
            />
          </Col>
          <Col xs={12} md={3} className="text-center text-md-left">
          <div>
              <strong>John Doe</strong>
              <div>Software Engineer</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
