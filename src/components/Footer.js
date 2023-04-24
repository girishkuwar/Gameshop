import React from 'react'
import './footer.css'
import facebooklogo from "../img/facebook-f.svg"
import instragramlogo from "../img/instagram.svg"
import twitterlogo from "../img/twitter.svg"
import youtubelogo from "../img/youtube.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About us</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quasi quo harum animi necessitatibus omnis voluptatem suscipit quas dolores, eaque illo asperiores quis laborum cum perferendis dolorem maiores cumque natus?</p>
        </div>
        <div className="footer-column">
          <h3>Connect With us</h3>
          <ul className="social-icons">
            <div className="row">
            <li><a href="/"><img src={facebooklogo} alt="" /></a>Facebook</li>
            <li><a href="/"><img src={twitterlogo} alt="" /></a>Twitter</li>
            </div>
            <div className="row">
            <li><a href="https://instagram.com/girish.kuwar"><img src={instragramlogo} alt="" /></a>Instagram</li>
            <li><a href="/"><img src={youtubelogo} alt="" /></a>Youtube</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 GameShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
