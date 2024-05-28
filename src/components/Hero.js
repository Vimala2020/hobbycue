import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  return (
    <Container fluid style={{ padding: '2rem', backgroundColor: '##C7B0E6 ' }}>
      <Row className="mb-4" >
        <Col lg={8} className="order-1 order-lg-1" style ={{padding: '2rem' }}>
          <h1 style={{ fontStyle: 'italic' }}>Explore your <span style={{ color: 'purple' ,fontStyle:"bold" }} >hobby</span> or <span style={{ color: 'skyblue ' ,fontStyle:"bold" }} >passion</span> </h1>
          <p style={{  fontSize: "14px", marginTop:'2rem'}}> Sign-in to interact with our community of fellow hobbyists and and an eco-system of expersts,teachers,suppliers,classes,workshops and practice , participate or perform.Your hobby may be about visual or performing arts, sports,games,gardening,model making,cooking, indoor or outdoor activities.
            <br></br>
            If you are an expert or a seller, you can Add your listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.

          </p>
        </Col>
        <Col lg={4} className="order-2 order-lg-2 mb-4 mb-lg-0" style={{padding:'2rem'}}>
          <div className="d-flex flex-column align-items-start p-3 bg-light rounded">
            <div className="d-flex justify-content-between w-100 mb-3" style={{ cursor: 'pointer' }}>
              <span className="text-secondary" style={{ textDecoration: 'none' }}>Sign In</span> |
              <span className="text-secondary" style={{ textDecoration: 'none' }}> Join In</span>
            </div>
            <Button variant="outline-primary" className="w-100 mb-2" style={{ backgroundColor:"white", color:'purple', border:'3px',borderStyle:'solid', borderColor:'purple', fontWeight:'bold'}}>
              <FaGoogle className="me-2" /> Connect with Google
            </Button>
            <Button variant="outline-primary" className="w-100 mb-2" style={{ backgroundColor:"white", color:'purple', border:'3px',borderStyle:'solid', borderColor:'purple', fontWeight:'bold'}}>
              <FaFacebook className="me-2" /> Connect with Facebook
            </Button>
            <Form className="w-100">
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Group controlId="formBasicCheckbox" className="mb-0">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <a href="#forgot-password" className="text-secondary" style={{ textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor:"white", color:'purple', border:'3px',borderStyle:'solid', borderColor:'purple', fontWeight:'bold'}}>
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
