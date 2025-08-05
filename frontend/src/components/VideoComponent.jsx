import React from 'react';
import '../stylesheet/videoComponent.css';
import videoFile from '../assets/magicVid.mp4'; // Adjust path if needed
import teapic from "../assets/tea_back4.png"

const VideoComponent = () => {
  return (
    <div className="video-section" id="magic-video">
      <div className="video-content">
        <div className="video-text">
          <h2>The Magic Behind the Cup</h2>
          <p>
            The <strong>Magic</strong> Begins with Every Drop of Lemon Syrup
            A single drop awakens the spell —
            golden sunlight swirling into bloom,
            turning each cup into a canvas of color,
            each sip into a story.

            At Magic Cassiao, we don't just serve tea.
            We conjure wonder —
            where flavor dances,
            and nature's beauty performs before your eyes.
          </p>
        </div>
        <div className="video-wrapper">
          {/* <video controls autoPlay loop muted className="video-element">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src={teapic} alt='image' width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
