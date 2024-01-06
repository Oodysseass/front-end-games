import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'

export default function Authentication() {
  const router = useRouter()
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('./api/authentication', {
        password,
      })

      router.push(`./home/${response.data.secret}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <Container className="py-5">
      <Head>
        <title>Login</title>
      </Head>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="authContainer p-4 border rounded">
            <h2 className="text-center mb-4">Login</h2>
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              <Form.Control
                type="password"
                id="pass"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Password"
              />
            </FloatingLabel>

            <div className="text-center">
              <Button variant="dark" onClick={handleSubmit} className="authSubmit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
