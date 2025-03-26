import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='cnt'>
    <div form_tbl>
    <div className="contact-container">
      <h2>CONTACT US</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
    </div>
       <div className="mapouter">
      <div className="gmap_canvas">
        <iframe 
          width="500" 
          height="555" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=Ambala+city%2C+city+plaza&t=k&z=13&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0">
        </iframe>
        <br />
        <a href="https://www.timertimer.net">Timer countdown</a>
        <br />
        <a href="https://www.alarm-clock.net">Free alarm clock online</a>
        <br />
        <a href="https://www.ongooglemaps.com">Embedding maps in website</a>
      </div>
    </div>
    </div>
   
  );
};

export default Contact;
