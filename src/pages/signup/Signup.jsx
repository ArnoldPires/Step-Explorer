import React, { useState } from 'react';
import "./signup.css";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Perform your signup logic here
    try {
      // Send a request to your server to handle signup
      // Example: const response = await fetch('/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) });

      // Check the response status and handle success/failure
      // Example: if (response.ok) { /* Handle successful signup */ }
      // Example: else { /* Handle signup error and set error message */ }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="signUpContainer">
      <section className="accountContainer">
        <h2>Account Creation</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>Email: <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
          <label>Confirm Password: <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label>
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <p>Already have an account? Click <a href="/pages/Login">here.</a></p>
      </section>
    </section>
  );
}

export default SignUp;