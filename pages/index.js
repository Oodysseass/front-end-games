import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'


export default function Authentication() {
  const router = useRouter()
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('./api/authentication', {
        password
      })

      router.push(`./home/${response.data.secret}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter')
      handleSubmit()
  }

  return (
    <div className='containerNotB'>
      <Head>
        <title>Login</title>
      </Head>

      <main className='authMain'>
        <div className='authContainer'>
          <div className='authInput'>
            <FloatingLabel
              controlId='floatingInput'
              label='Password'
              className='mb-3'
            >
              <Form.Control value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="pass"
                name="pass"
                onKeyPress={handleKeyPress}
                placeholder='Password'
              />
            </FloatingLabel>

            <Button variant='dark'
              onClick={handleSubmit}
              className='authSubmit'>
              Submit
            </Button>
            </div>
          </div>
      </main>
    </div>
  )
}