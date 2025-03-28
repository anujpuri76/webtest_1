import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='foot'>
      <div class="contact">
        <a href="tel:+">1111111111</a>
        <a href="mailto:">mail@domain.com</a>
        <a href="">location</a>
      </div>
      <div class="bookmarks"><h2>QUICK LINES</h2>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Furniture</a>
        <a href="">Blog</a>
        <a href="">Contact Us</a>
      </div>
      <div class="feed">
        <h2>Instagram Feed</h2>
      </div>
      <div class="signup">
        <form>
          <label htmlFor="mail">SIGN UP TO OUR NEWSLETTER</label>
          <input id="mail" type="email" placeholder="Enter Your Email"/>
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>
  )
}

export default Footer