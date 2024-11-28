import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { loginService } from '../data/services/auth/loginService';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const fetchLoginData = await loginService(email, password);

      if (fetchLoginData) {
        navigate('/catalog');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Row className='w-75'>
        <Col xs={12} md={6} className='mx-auto'>
          <h1 className='text-center'>Login</h1>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='w-100'>
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
