import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export default function SubmitForm() {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [income, setIncome] = useState('');
  const [employment, setEmployment] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postcode, setPostcode] = useState('');

  const api_url = 'http://localhost:8000/users';
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(api_url, {
        title: title,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        income: income,
        employment: employment,
        houseNumber: houseNumber,
        postcode: postcode,
      })
      .then((response) => {
        const currentCustomer = JSON.stringify(response.data);
        localStorage.setItem('current customer', currentCustomer);
        history.push('/detail');
      })
      .catch((error) => {
        console.log('Something went wrong!', error);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Card
          style={{ width: '30rem' }}
          className="shadow p-3 mb-5 bg-body rounded">
          <Card.Body>
            <Card.Title>Find the right credit card for you</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  required
                  placeholder="Mr"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstName"
                  required
                  placeholder="Ollie"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="lastName"
                  required
                  placeholder="Murphree"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="dob" required placeholder="01/07/1970"
                onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Employment</Form.Label>
                <Form.Control
                  type="employment"
                  required
                  placeholder="Full-time"
                  onChange={(e) => setEmployment(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Income</Form.Label>
                <Form.Control
                  type="income"
                  required
                  placeholder="34000"
                  onChange={(e) => setIncome(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>House Number</Form.Label>
                <Form.Control
                  type="houseNumber"
                  required
                  placeholder="700"
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="postcode"
                  required
                  placeholder="BS14 9PR"
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex justify-content-around">
                <Button variant="primary" type="submit" size="lg">
                  Check Eligibility
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
