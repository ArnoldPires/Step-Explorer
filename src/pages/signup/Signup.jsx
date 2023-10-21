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

    try {
      const response = await fetch('/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Send user data to the server
      });

      if (response.ok) {
        // Redirect the user to the homepage or a login page upon successful signup
        window.location.href = '/'; // Change this URL as needed
      } else {
        // Handle signup errors
        const data = await response.json();
        setErrorMessage(data.message); // Display the error message returned from the server
      }
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
        <p>Already have an account? Click <a href="/Login">here.</a></p>
      </section>
    </section>
  );
}

export default SignUp;