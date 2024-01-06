import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const InfoSection = () => {
  return (
    <Container className="mt-5 p-3 bg-dark text-white rounded">
      <Row>
        <Col>
          <h2>Welcome to the Database for Games</h2>
          <p>
            Explore a vast collection of games, companies, consoles, and professional players in the gaming industry.
          </p>
          <p>
            For inquiries, contact us at:
            <br />
            <strong>Kyprianidis Aris-Eftychios:</strong> akyprian@ece.auth.gr
            <br />
            <strong>Sofikitis Odysseas:</strong> sodyssea@ece.auth.gr 
            <br />
            <strong>Romanos Tompoulidis:</strong> romanost@ece.auth.gr
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default InfoSection
