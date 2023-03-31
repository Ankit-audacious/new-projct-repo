import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import newPassword from "./newPassword.module.css";

const NewPassword = () => {
  return (
    <>
      <div>
        <h1 className={newPassword.heading}>New Password</h1>
        <div className={newPassword.container}>
          <Form className={newPassword.newPasswordContainer}>
            <FormGroup>
              <Label for="exampleNewPassword">New Password</Label>
              <Input
                id="exampleNewPassword"
                name="confirmPassword"
                placeholder="Enter your New Password"
                type="password"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleNewPassword">Confirm Password</Label>
              <Input
                id="exampleNewPassword"
                name="confirmPassword"
                placeholder="Enter your Confirm Password"
                type="password"
              />
            </FormGroup>
            <Button className={newPassword.newPasswordButton}>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
