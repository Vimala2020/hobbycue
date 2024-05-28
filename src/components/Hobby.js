import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import photo from "../assests/img1.jpg"
const Hobby = () => {
      return (
        <div style={{ backgroundColor: '#d1dae6', padding: '2rem', marginTop: '30px' }}>
          <Container>
            <Row className="text-left mb-8">
              <Col>
                <h4 style={{ color: 'purple', fontStyle: 'italic' }}>
                  Your Hobby, Your <span style={{ color: 'blue', fontStyle: 'italic' }}>Community</span>
                </h4>
                <div className="d-flex justify-content-start mb-8">
                  <Button
                    style={{
                      backgroundColor: 'purple',
                      fontSize: '14px',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '4px',
                      borderColor: 'purple',
                      marginRight: '20px', // Add space between button and image
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src= {photo} alt="Landscape" className="img-fluid rounded" />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    
    export default Hobby;
