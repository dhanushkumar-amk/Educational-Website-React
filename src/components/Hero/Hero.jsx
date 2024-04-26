import React from 'react';import './Hero.css';
import ArrowIcon from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quo voluptate dolorum. Atque minus consequatur aliquam quis voluptates
          eos molestias, rerum facere deleniti ad error!
        </p>
        <button className='btn'>
          Explore More <img src={ArrowIcon} />{' '}
        </button>
      </div>
    </div>
  );
};

export default Hero;
