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
    const response = await fetch('http://localhost:5173/signup', {
      method: 'POST', 
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }), 
    credentials: 'include',
  });

    if (response.ok) {
      //redirect the user to the login page or a profile page
      console.log("Signup successful");
    } else {
      // If the server responded with status other than 200-299, handle the error
      const errorData = await response.json();
      setErrorMessage(errorData.msg || "Signup failed due to server error");
    }
  } catch (error) {
    // Handle errors with the network call here
    console.error('Error:', error);
    setErrorMessage("There was a problem signing up. Please try again later.");
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