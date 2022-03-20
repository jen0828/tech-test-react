import { Form, Button, Card } from 'react-bootstrap';

export default function SubmitForm() {
  return (
    <>
      <div>Submit Form</div>
      <div className="d-flex justify-content-center mt-5">
        <Card
          style={{ width: '30rem' }}
          className="shadow p-3 mb-5 bg-body rounded">
          <Card.Body>
            <Card.Title>Find the right credit card for you</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" required placeholder="Mr" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" required placeholder="Ollie" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" required placeholder="Murphree" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="dob" required placeholder="1970-07-01" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Employment</Form.Label>
                <Form.Control
                  type="employment"
                  required
                  placeholder="full-time"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Income</Form.Label>
                <Form.Control type="income" required placeholder="34000" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>House Number</Form.Label>
                <Form.Control type="houseNumber" required placeholder="700" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Postcode</Form.Label>
                <Form.Control type="postcode" required placeholder="BS14 9PR" />
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
