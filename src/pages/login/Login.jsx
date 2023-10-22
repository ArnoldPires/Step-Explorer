import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="loginContainer">
      <section className="accountContainer">
        <h2>Account Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email: <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div>
          <p>Don't have an account? Sign up <a href="/Signup">here</a></p>
        </div>
      </section>
    </section>
  );
}

export default Login;