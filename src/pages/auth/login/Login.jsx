import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// stylesheet
import './Login.scss';

const Login = () => {
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
            defaultValue="value"
            label="Username"
            placeholder="Enter Username"
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
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" defaultValue={false} onChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        {/* button component */}
        <Button label={'SIGNIN'} className="auth-button button" disabled={true}></Button>
        <Link to="/forgot-password">
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
