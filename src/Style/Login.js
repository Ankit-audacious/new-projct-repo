import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import login from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/forgotPassword')
  }

  return (
    <>
      <div>
        <h1 className={login.heading}>Login Form</h1>
        <div className={login.container}>
          <Form className={login.formContainer}>
            <FormGroup>
              <Label for="exampleEmail">Number</Label>
              <Input
                id="example_Number"
                name="number"
                placeholder="Enter your Number"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="example_Password"
                name="password"
                placeholder="Enter your Password"
                type="password"
              />
            </FormGroup>
            <Button className={login.loginButton}>Login</Button>
          </Form>
        </div>
        <Button className={login.forgotButton} onClick={handleClick}>Forgot Password</Button>
      </div>
    </>
  );
};

export default Login;
