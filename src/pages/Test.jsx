import React, { Component, useState, useEffect } from 'react';

export default function Test() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ping'); // Send a GET request to the backend API test endpoint

        if (response.ok) {
          // Handle successful response (the backend is up)
          const data = await response.json();
          setMessage(data.message);
        } else {
          // Handle error response (the backend is not reachable or an error occurred)
          setMessage('Backend is not reachable.');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred.');
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      <p>Message from the backend: {message}</p>
    </div>
  );
}