import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Flip from "react-reveal";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <Flip top>
      <h1>ADVENTURE AWAITS</h1>
      </Flip>
      <p>Live Every Single Day To The Fullest!!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;