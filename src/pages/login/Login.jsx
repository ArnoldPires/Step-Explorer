import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform your login logic here
    try {
      // Send a request to your server to handle login
      // Example: const response = await fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) });

      // Check the response status and handle success/failure
      // Example: if (response.ok) { /* Handle successful login */ }
      // Example: else { /* Handle login error and set error message */ }
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
          <p>Don't have an account? Sign up <a href="/signup">here</a></p>
        </div>
      </section>
    </section>
  );
}

export default Login;