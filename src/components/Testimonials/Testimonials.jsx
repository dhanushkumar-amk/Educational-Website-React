import React from 'react';import './Testimonials.css';
import nextBtn from '../../assets/next-icon.png';
import backBtn from '../../assets/back-icon.png';
import UserPic1 from '../../assets/user-1.png';
import UserPic2 from '../../assets/user-2.png';
import UserPic3 from '../../assets/user-3.png';
import UserPic4 from '../../assets/user-4.png';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img
        src={nextBtn}
        className='next-btn'
      />
      <img
        src={backBtn}
        className='back-btn'
      />
      <div className='slider'></div>
    </div>
  );
};

export default Testimonials;
