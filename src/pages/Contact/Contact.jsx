import React, { useState } from 'react'
import "./contact.css"
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const sendMsg = async () => {
    const { data, error } = await supabase
      .from('contactus')
      .insert([{ name, email, subject, msg }])
      .select()

      if(data){
        console.log(data);
        alert("Msg Sended");
        navigate("/");
      } 
      if (error) {
        alert("error")
        console.log(error)
      }
  }


  return (
    <section class="contacts" id="contacts">
      <div class="contact">
        <div class="contact-txt">
          <h2>GameShop</h2>
          <h1>Contact Us</h1>
        </div>

        <div class="contact-form">
          <div className='frm'>
            <input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" name="email" id="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name="" id="subject" placeholder="Write A Subject" onChange={(e) => setSubject(e.target.value)} />
            <textarea name="" id="desc" cols="30" rows="10" placeholder="Your Message" required onChange={(e) => setMsg(e.target.value)}>
            </textarea>
            <button className='btn' onClick={sendMsg}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
