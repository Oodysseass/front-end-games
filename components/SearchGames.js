import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchGames({ onSearch }) {
  const [name, setName] = useState('');
  const [beforeYear, setBeforeYear] = useState('');
  const [afterYear, setAfterYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ name, beforeYear, afterYear, genre });
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

        <Col md={2}>
          <Form.Group controlId="formBeforeYear">
            <Form.Label>Before Year</Form.Label>
            <Form.Control type="number" value={beforeYear} onChange={(e) => setBeforeYear(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group controlId="formAfterYear">
            <Form.Label>After Year</Form.Label>
            <Form.Control type="number" value={afterYear} onChange={(e) => setAfterYear(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control as="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Open-World">Open-World</option>
              <option value="Adventure">Adventure</option>
              <option value="MOBA">MOBA</option>
              <option value="Sports">Sports</option>
              <option value="Fighting">Fighting</option>
              <option value="Metroidvania">Metroidvania</option>
              <option value="RPG">RPG</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={2} className="text-md-end">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
