import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProsContainer = ({ pros }) => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {pros.map((pro) => (
          <Col key={pro.id}>
            <Card>
              <Card.Body>
                <Card.Title>{pro.stageName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`Playing Since: ${pro.playingSince}`}</Card.Subtitle>
                <Card.Text>{`Retirement Date: ${pro.retirementDate || 'N/A'}`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProsContainer;
