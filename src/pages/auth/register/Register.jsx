import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';

import { authService } from '../../../services/api/auth/auth.service';
import { Utils } from '../../../services/utils/utils.service';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// stylesheet
import './Register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState(null);

  console.log(username);

  const handleRegisterUser = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      // generate the user profile photo.
      const avatarColor = Utils.avatarColor();
      const avatarImage = Utils.generateAvatar(username.charAt(0).toUpperCase(), avatarColor());
      // Post request to signup endpoint
      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });

      setUser(result.data.user);
      setHasError(false);
      setAlertType('alert-success'); // dynamically set css alert color
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error'); // css color for the error alert
      setErrorMessage(error?.response?.data.message);
    }
  };

  useEffect(() => {
    // if it's still loading and there is no user, return don't do further
    if (loading && !user) return;

    // if there is a user, signup is sucessfull redirect to main page
    if (user) {
      console.log('navigate to streams page');
      setLoading(false);
    }
  }, [setLoading, loading, user]);

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          Error message
        </div>
      )}
      <form className="auth-form" onSubmit={handleRegisterUser}>
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="Username"
            placeholder="Enter Username"
            // className={``}
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            labelText="Email"
            placeholder="Enter Email"
            // className={``}
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setEmail(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter Password"
            // className={``}
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setPassword(event.target.value)}
          />
          {/* password field */}
        </div>
        {/* button component */}

        <Button
          label={`${loading ? 'SIGNUP IN PROGRESS...' : 'SIGNUP'}`}
          className="auth-button button"
          disabled={!username || !email || !password}
        ></Button>
      </form>
    </div>
  );
};

export default Register;
