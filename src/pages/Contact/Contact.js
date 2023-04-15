import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section class="contacts" id="contacts">
      <div class="contact">
        <div class="contact-txt">
          <h2>GameShop</h2>
          <h1>Contact Us</h1>
        </div>

        <div class="contact-form">
          <form action="" id="contact-form" method="post">
            <input type="text" id="name" placeholder="Your Name" />
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="text" name="" id="subject" placeholder="Write A Subject" />
            <textarea name="" id="desc" cols="30" rows="10" placeholder="Your Message" required >
            </textarea>
            <input class="btn" type="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
