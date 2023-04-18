import React from 'react'
import './footer.css'

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
            <li><a href="/"><i class="fa fa-facebook-square"></i></a></li>
            <li><a href="/"><i class="fa fa-twitter"></i></a></li>
            <li><a href="/"><i class="fa fa-instagram"></i></a></li>
            <li><a href="/"><i class="fa fa-youtube"></i></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact us</h3>
          <p>College Road Nashik 422002</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Your Company. All rights reserved.</p>
        <i className="fas fa-info-circle"></i>
      </div>
    </footer>
  )
}

export default Footer
