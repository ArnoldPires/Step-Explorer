import React, { Component } from 'react';
import './newTrail.css';

export default class NewTrails extends Component {
  render() {
    return (
      <div className="container">
        
        {/* Background Image */}
        <img src="/path-to-your-image.jpg" alt="Hiker background" className="background-image" />

        {/* Form Section */}
        <div className="form-container">
          <h2>Submit Your Own Hike/Trail Here</h2>
          
          <div className="form-group">
            <label>Trail Name:</label>
            <input type="text" placeholder="Enter a name" />
          </div>
          
          <div className="map-integration">
            <h3>Click on the map below to open up a separate tab for Google Maps</h3>
            <iframe src="https://maps.google.com" title="Google Maps Integration"></iframe>
          </div>
          
          <div className="description">
            <label>Description:</label>
            <textarea></textarea>
          </div>
          
          <button>Submit</button>
        </div>
        
        {/* Your Submissions */}
        <div className="submissions">
          <h2>Your Submissions</h2>
          <p>You have not submitted any trails</p>
        </div>

      </div>
    );
  }
}