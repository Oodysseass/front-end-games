import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const GameContainer = ({ games }) => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {games.map((game) => (
          <Col key={game.gameID}>
            <Card>
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{game.genre}</Card.Subtitle>
                <Card.Text>Year: {game.year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default GameContainer
