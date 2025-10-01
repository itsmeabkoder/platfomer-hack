import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
