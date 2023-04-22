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
            <div className="row">
            <li><a href="/"><i className="fa fa-facebook"></i></a>Facebook</li>
            <li><a href="/"><i className="fa fa-twitter"></i></a>Twitter</li>
            </div>
            <div className="row">
            <li><a href="/"><i className="fa fa-instagram"></i></a>Instagram</li>
            <li><a href="/"><i className="fa fa-youtube"></i></a>Youtube</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 GameShop. All rights reserved.</p>
        <i className="fas fa-info-circle"></i>
      </div>
    </footer>
  )
}

export default Footer
