// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide';
function Home() {
  return (
    <div>
      <Slide></Slide>
      <h1>Welcome to My App</h1>
      <p>Discover amazing features and content.</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <p>About Our App: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div>
        <h2>Introduction Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="Introduction Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <button>Explore Now</button>
    </div>
  );
}

export default Home;

