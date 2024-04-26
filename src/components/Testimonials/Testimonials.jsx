import React, {useRef} from 'react';import './Testimonials.css';
import nextBtn from '../../assets/next-icon.png';
import backBtn from '../../assets/back-icon.png';
import UserPic1 from '../../assets/user-1.png';
import UserPic2 from '../../assets/user-2.png';
import UserPic3 from '../../assets/user-3.png';
import UserPic4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; // translate x

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img
        src={nextBtn}
        className='next-btn'
        onClick={slideForward}
      />
      <img
        src={backBtn}
        className='back-btn'
        onClick={slideBackward}
      />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={UserPic1} />
                <div>
                  <h3>Spider Man</h3>
                  <span>TamilNadu India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae tenetur, perspiciatis eveniet expedita repellendus
                unde consequatur esse nulla totam. Quas commodi fugiat sint
                eveniet minus, eaque possimus omnis sequi assumenda.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={UserPic2} />
                <div>
                  <h3>Spider Man</h3>
                  <span>TamilNadu India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae tenetur, perspiciatis eveniet expedita repellendus
                unde consequatur esse nulla totam. Quas commodi fugiat sint
                eveniet minus, eaque possimus omnis sequi assumenda.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={UserPic3} />
                <div>
                  <h3>Spider Man</h3>
                  <span>TamilNadu India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae tenetur, perspiciatis eveniet expedita repellendus
                unde consequatur esse nulla totam. Quas commodi fugiat sint
                eveniet minus, eaque possimus omnis sequi assumenda.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={UserPic4} />
                <div>
                  <h3>Spider Man</h3>
                  <span>TamilNadu India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae tenetur, perspiciatis eveniet expedita repellendus
                unde consequatur esse nulla totam. Quas commodi fugiat sint
                eveniet minus, eaque possimus omnis sequi assumenda.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
