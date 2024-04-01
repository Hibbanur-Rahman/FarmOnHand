import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import VARIABLES from "../../environmentVariables";
function Login() {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post(
          `${VARIABLES.API_URL_REMOTE}/user-Login`,
          userData
        );
        if (response.status === 200) {
          const token = response.data.data.token;
          Cookies.set("token", token, { expires: 1 });
          console.log("Login Successful and the user:", response.data);
          toast.success("Login successful!!");
          setUserData({
            password: "",
            email: "",
          });
          setTimeout(() => {
            if (response.data.data.role === "user") {
          
              window.location.href = "/FarmOnHand/#/user/";
              
            } else if (response.data.data.role === "admin") {
              window.location.href = "/FarmOnHand/#/admin/";
            }
          }, 1000);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Login failed!!");
        console.log("Failed to login:", error);
      }
    }
    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setValidated(false);
  };

  return (
    <>
      <div className="py-4 justify-content-center">
        <div className="col-lg-6 d-block m-auto border rounded p-3 login_div">
          <h4 className="fw-bolder mb-4">Login</h4>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01" className="mb-3">
              <Form.Label>Username or email address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username or email address"
                name="email"
                onChange={handleInputChange}
                value={userData.email}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid username or email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={userData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="btn_filled mb-3"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>

          <Link to="/register" className="primary_color">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
