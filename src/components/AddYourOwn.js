import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

const AddYourOwn = () => {
  return (
    <div style={{ backgroundColor: '#e9f1f7', padding: '2rem' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div className="text-center mb-4">
              <div>
                <FaPlusCircle size={25} color="skyblue" /><h3 className="mt-3">Add Your Own</h3>
              </div>
              
            </div>
            <div className="rounded p-4 bg-white">
              <p>Find a class , school, playground,auditorium,studio,shop or an event venue.Book a slotat venues that allows and enjoy your life.</p>
              <div className="d-flex justify-content-center">
    <Button variant="primary" style={{ borderColor: 'purple', color: 'purple', backgroundColor: 'white' }}>Add New</Button>
  </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddYourOwn;

