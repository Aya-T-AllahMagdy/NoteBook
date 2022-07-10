import React from 'react'
import { Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <Form>
<Form.Group controlId="formBasicEmail">
    <Form.Control className="mb-3" placeholder='email address'type="email"></Form.Control>
</Form.Group>

<Form.Group controlId="formBasicPassword">
    <Form.Control className="mb-3" placeholder='password'type="password"></Form.Control>
</Form.Group>

<div className="d-grid gap-2">
  <Button variant="primary" type=" Submit">
    Log In
  </Button>
</div>

        </Form>
        <div>
  <GoogleButton className="g-btn" type="dark" />
</div>
<div className="p-4 box mt-3 text-center">
Don't have an account? <Link to="/signUp">Sign up</Link>
</div>

    </div>
  )
}
