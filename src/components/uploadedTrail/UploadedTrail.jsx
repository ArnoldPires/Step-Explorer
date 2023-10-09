import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./uploadedTrail.css";

export default class UploadedTrail extends Component {
  render() {
    return (
      <section className="userCreatedSection">
        <div className="userCreatedTitle">
          <h3>User Created Trails!</h3>
          <p>Select One Of The Many Hikes and Trails our users have posted below:</p>
        </div>
        <div className="userCreatedTrails">
          <ul>
            <li>
              <Link to="#">
                <img src="#" />
                <p>Name of Trail</p>
                <p>Location</p>
                <p>Difficutly</p>
                <p>Miles</p>
                <p>Length</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}