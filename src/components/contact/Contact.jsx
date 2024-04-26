import React from 'react';import './Contact.css';
import MessageIcon from '../../assets/msg-icon.png';
import EmailIcon from '../../assets/mail-icon.png';
import PhoneIcon from '../../assets/phone-icon.png';
import LocationIcon from '../../assets/location-icon.png';
import whiteArrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '1c3cbdab-d1c4-4382-ae9e-ab51a3ed67e6');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={MessageIcon} />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aliquid
          tenetur quidem, exercitationem accusantium atque accusamus, ad autem
          temporibus nihil doloremque facilis, corrupti nemo necessitatibus.
        </p>
        <ul>
          <li>
            {' '}
            <img src={EmailIcon} /> Contact@visiovibe@gmail.com
          </li>
          <li>
            {' '}
            <img src={PhoneIcon} /> +9191234567
          </li>
          <li>
            <img src={LocationIcon} />
            77 Pollachi <br />
            mA 02349, India.
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your Name...'
            required
          />
          <label>Your Phone number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your phone number...'
            required
          />
          <label>Your Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            required></textarea>
          <button
            type='submit'
            className='btn dark-btn'>
            Submit <img src={whiteArrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
