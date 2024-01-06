import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchConsoles = ({ onSearch }) => {
  const [name, setName] = useState('')
  const [startedBefore, setStartedBefore] = useState('')
  const [startedAfter, setStartedAfter] = useState('')
  const [companyName, setCompanyName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({ name, startedAfter, startedBefore, companyName })
  }

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
          <Form.Group controlId="formAfterYear">
            <Form.Label>Started After</Form.Label>
            <Form.Control type="number" value={startedAfter} onChange={(e) => setStartedAfter(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group controlId="formAfterBefore">
            <Form.Label>Started After</Form.Label>
            <Form.Control type="number" value={startedBefore} onChange={(e) => setStartedBefore(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={2} className="text-md-end">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchConsoles
