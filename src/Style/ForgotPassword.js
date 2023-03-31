import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import forgotPassword from "./forgotPassword.module.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/newPassword')
  }
  
  return (
    <>
    <div>
    <h1 className={forgotPassword.heading}>Forgot Password</h1>
      <div className={forgotPassword.container}>
        <Form className={forgotPassword.forgotPasswordContainer}>
          <FormGroup>
            <Label for="exampleEmail">Number</Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Enter your Number"
              type="number"
            />
          </FormGroup>
          <Button className={forgotPassword.forgotPasswordButton} onClick={handleClick}>Reset Password</Button>
        </Form>
      </div>
      </div>
    </>
  );
};

export default ForgotPassword;
