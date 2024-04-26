import React from 'react';
import './About.css';

import AboutImg from '../../assets/about.png';
import palyIcon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img
          src={AboutImg}
          className='about-img'
        />
        <img
          src={palyIcon}
          className='play-icon'
        />
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          beatae. Fugit neque cupiditate consequatur nisi. Laudantium veniam qui
          animi porro, asperiores est deleniti illo blanditiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          beatae. Fugit neque cupiditate consequatur nisi. Laudantium veniam qui
          animi porro, asperiores est deleniti illo blanditiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          beatae. Fugit neque cupiditate consequatur nisi. Laudantium veniam qui
        </p>
      </div>
    </div>
  );
};
import './About.css';
export default About;
