import React from "react";
import { Form, Col, Row, FormGroup, Label, Input, Button } from "reactstrap";
import signUp from "./signUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/login')
  }

  return (
    <>
      <div>
        <h1 className={signUp.heading}>Registration Form</h1>
        <div className={signUp.container}>
          <Form className={signUp.formContainer}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleName">First Name</Label>
                  <Input
                    id="exampleName"
                    name="text"
                    placeholder="Enter your Name"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleLastName">Last Name</Label>
                  <Input
                    id="exampleLastName"
                    name="text"
                    placeholder="Enter your Last Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleNumber">Number</Label>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="Enter your Number"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Gendar</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Male</option>
                    <option>Female</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleDate">Date of Birth</Label>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="Enter your Date of Birth"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input
                    id="exampleState"
                    placeholder=" Enter your State"
                    name="state"
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    id="exampleCity"
                    placeholder=" Enter your City"
                    name="city"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter your Password"
                    type="password"
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleConfirmPassword">Confirm Password</Label>
                  <Input
                    id="exampleConfirmPassword"
                    name="confirmPassword"
                    placeholder="Enter your Confirm Password"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Button className={signUp.formButton}>Submit</Button>
              </Col>

              <Col md={6}>
                <Button onClick={handleClick}>Login </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
