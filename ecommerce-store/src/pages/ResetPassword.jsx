import React from 'react';

const ResetPassword = () => {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <div>
          <label htmlFor="password">New Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" id="confirm" name="confirm" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
