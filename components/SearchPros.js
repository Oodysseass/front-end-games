import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchPros({ onSearch }) {
  const [name, setName] = useState('');
  const [startedAfter, setStartedAfter] = useState('');
  const [startedBefore, setStartedBefore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ name, startedAfter, startedBefore });
  };

  return (
    <Form onSubmit={handleSubmit} className="bg-dark text-light p-3 mb-3 rounded" style={{ maxWidth: '1200px', margin: '30px auto' }}>
      <Row className="align-items-end">
        <Col md={3}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formStartedAfter">
            <Form.Label>Started After</Form.Label>
            <Form.Control type="number" value={startedAfter} onChange={(e) => setStartedAfter(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formStartedBefore">
            <Form.Label>Started Before</Form.Label>
            <Form.Control type="number" value={startedBefore} onChange={(e) => setStartedBefore(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3} className="text-md-end">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
