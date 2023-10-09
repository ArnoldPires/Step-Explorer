import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadedTrail from "../../components/uploadedTrail/UploadedTrail";
import './homepage.css';

const HomePage = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 5000);
    }
  }, []);

  return (
    <section className="homepage">
      <div className="slideshow">
        <div className="slide fade" id="slide1">
          <div className="slide-content">
            <h2>Adventure Awaits!</h2>
            <Link to="/viewTrail">Search for your next Adventure</Link>
          </div>
        </div>
        <div className="slide fade" id="slide2">
          <div className="slide-content">
            <h2>Create your own Hikes/Trails!</h2>
            <Link to="/viewTrail">Search for your next Adventure</Link>
          </div>
        </div>
        <div className="slide fade" id="slide3">
          <div className="slide-content">
            <h2>Check Out Our Hiking Guide!</h2>
            <Link to="/viewTrail">Search for your next Adventure</Link>
          </div>
        </div>
      </div>
      <UploadedTrail />
    </section>
  );
}

export default HomePage;