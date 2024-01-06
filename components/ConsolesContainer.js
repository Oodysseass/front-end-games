import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const ConsolesContainer = ({ consoles }) => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {consoles.map((console) => (
          <Col key={console.consoleID}>
            <Card>
              <Card.Body>
                <Card.Title>{console.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{console.company_name}</Card.Subtitle>
                <Card.Text>Year: {console.year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ConsolesContainer
