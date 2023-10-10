import React, { Component } from 'react'
import "./hikeSearch.css";

export default class HikeSearch extends Component {
  render() {
    return (
      <section className="hikingProjectWidget">
        <section className="weatherAPI">
        <h2>Figure out the Weather</h2>
        <p>Determine the weather before embarking on your journey:</p>
        </section>
        <h2>Area Map</h2>
        <p>Find an existing Hike or Trail below using this map:</p>
        <section className="areaMapWidget">
          <iframe frameBorder="0" scrolling="yes"
            src="https://hikingproject.com/widget/map?favs=1&location=fixed&x=-12333476&y=5431238&z=6.4&h=500">
          </iframe>
        </section>
      </section>
    )
  }
}