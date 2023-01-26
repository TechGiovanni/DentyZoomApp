import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// stylesheet
import './Register.scss';

const Register = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            defaultValue="username"
            label="Username"
            placeholder="Enter Username"
            className={``}
            onChange={() => {}}
          />
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue="email"
            label="Email"
            placeholder="Enter Email"
            className={``}
            onChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            defaultValue="my password"
            label="Password"
            placeholder="Enter Password"
            className={``}
            onChange={() => {}}
          />
          {/* password field */}
        </div>
        {/* button component */}
        <Button label={'SIGNUP'} className="auth-button button" disabled={true}></Button>
        <Link to="forgot-password">
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
