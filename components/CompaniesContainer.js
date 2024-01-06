import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const CompaniesContainer = ({ companies }) => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {companies.map((company) => (
          <Col key={company.companyID}>
            <Card>
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Established: {company.yearEST}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CompaniesContainer
