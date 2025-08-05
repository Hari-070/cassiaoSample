import React from 'react';
import '../stylesheet/videoComponent.css';
import videoFile from '../assets/magicVid.mp4'; // Adjust path if needed

const VideoComponent = () => {
  return (
    <div className="video-section" id="magic-video">
      <div className="video-content">
        <div className="video-text">
          <h2>The Magic Behind the Cup</h2>
          <p>
            At <strong>Magic Cassiao</strong>, tea is more than a drink — it's a performance of nature and science. 
            Our signature herbal blends are crafted to amaze, transforming in color and flavor as you pour. 
            This video captures the heart of what we do — creating moments that are visually stunning and tastefully unforgettable.
          </p>
        </div>
        <div className="video-wrapper">
          <video controls autoPlay loop muted className="video-element">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
