import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaUsers, FaMapMarkerAlt, FaShoppingCart, FaCode } from 'react-icons/fa';

const Features = () => {
  return (
    <Container fluid style={{ backgroundColor: '#f8f9fa', padding: '2rem' }}>
      <h2 className="text-center mb-4">Features</h2>
      <Row>
        <Col md={6} lg={3} className="mb-4 mb-lg-0">
          <div className="rounded p-3 bg-white text-center">
            <FaUsers size={25} className="mb-3" style={{color:"purple"}} />
            <h3>People</h3>
            <p>Find A teacher, coach,or expert for your hobby interest in your locality.Find a partner ,teammate,accompanist or collaborator.</p>
            <Button variant="primary" style={{borderColor:"purple", color:"purple",backgroundColor:'white'}} >Connect</Button>
          </div>
        </Col>
        <Col md={6} lg={3} className="mb-4 mb-lg-0">
          <div className="rounded p-3 bg-white text-center">
            <FaMapMarkerAlt size={25} className="mb-3" />
            <h3>Place</h3>
            <p>Find a class , school, playground,auditorium,studio,shop or an event venue.Book a slotat venues that allows and enjoy your life.</p>
            <Button variant="primary" style={{borderColor:"purple", color:"purple",backgroundColor:'white'}}>Meet up </Button>
          </div>
        </Col>
        <Col md={6} lg={3} className="mb-4 mb-lg-0">
          <div className="rounded p-3 bg-white text-center">
            <FaShoppingCart size={25} className="mb-3" />
            <h3>Product</h3>
            <p>Find a class , school, playground,auditorium,studio,shop or an event venue.Book a slotat venues that allows and enjoy your life</p>
            <Button variant="primary" style={{borderColor:"purple", color:"purple",backgroundColor:'white'}}>Get It </Button>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="rounded p-3 bg-white text-center">
            <FaCode size={25} className="mb-3" />
            <h3>Program</h3>
            <p>Find a class , school, playground,auditorium,studio,shop or an event venue.Book a slotat venues that allows and enjoy your life</p>
            <Button variant="primary" style={{borderColor:"purple", color:"purple",backgroundColor:'white'}}>Attend </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Features;
