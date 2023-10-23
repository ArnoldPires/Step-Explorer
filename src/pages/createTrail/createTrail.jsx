import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TrailForm from '../../components/trailForm/TrailForm';
import './createTrail.css'; // Make sure your CSS is imported

export default class NewTrails extends Component {
  render() {
    return (
      <section className="createTrailContainer">
        <section className="createTrail"> 
          <h2>Create Your Own Hike/Trail</h2>
          <form className="submissionform" id="add-trail-form" action="/trails/createTrail" method="POST" encType="multipart/form-data">
            <TrailForm />
            <section className="gLink">
              <h3>Click the "View larger map" button below to open up a separate tab for Google Maps</h3>
              <p>Once you've set up your trail/hike, copy the iframe url and paste that into the box below</p>
              <div className="map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52813262.273787946!2d-161.4823879780771!3d36.10651017345449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1698038660573!5m2!1sen!2sus"  
                  width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="trailLink">
                <div className="hover-instructions">
                  <p>Need help adding a link?</p>
                  <div className="instructions-content">
                    <ul>
                      <li>Click on the "View larger map" button.</li>
                      <li>This will open up a new tab in the browser, select that tab.</li>
                      <li>Zoom into the area where you want to create your trail/hike.</li>
                      <li>Click on the blue "Directions" button.</li>
                      <li>Click the area where you want your starting point to be, and then click on the next area where you want the trail to lead. feel free to drag.</li>
                      <li>Once you are done, click on the three horizontal lines on the upper left and select "share or embed map".</li>
                      <li>Click on "Copy Link</li>
                      <li>Navigate back to the site and paste the link into the Google Maps link box.</li>
                      <li>After writing out your description, click "Submit" and you are done.</li>
                    </ul>
                  </div>
                </div>
                <label><span>Google Maps Link: </span><input type='text' placeholder='Paste Link Here' name='gMaps'></input></label>
              </div>
            </section>
            <div className="description">
              <h3>Description:</h3><textarea placeholder='Description' name='description'></textarea>
            </div>
            <div className="buttonWrapper">
              <button className="submitbutton">Submit</button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}