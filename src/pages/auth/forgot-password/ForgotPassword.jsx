import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// assets
import backgroundImage from '../../../assets/images/background.jpg';

import { authService } from '../../../services/api/auth/auth.service';

// stylesheet
import './ForgotPassword.styles.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // instead of hasError, it was renamed to showAlert
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleForgotPassword = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await authService.forgotPassword(email);
      setLoading(false);
      setEmail('');
      setShowAlert(false);
      setAlertType('alert-success');
      setResponseMessage(response?.data?.message);
    } catch (error) {
      setAlertType('alert-error');
      setLoading(false);
      setShowAlert(true);
      setResponseMessage(error?.response?.data?.message);
    }
  };

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: `${responseMessage ? '300px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}

                <form className="auth-form" onSubmit={handleForgotPassword}>
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      label="Password"
                      placeholder="Enter Password"
                      className={``}
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(e) => setEmail(e.target.value)}
                    />
                    {/* password field */}
                  </div>
                  {/* button component */}
                  <Button
                    label={`${loading ? 'FORGOT PASSWORD IN PROGRESS...' : 'FORGOT PASSWORD'}`}
                    className="auth-button button"
                    disabled={!email}
                  ></Button>
                  <Link to={'/'}>
                    <span className="login">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
