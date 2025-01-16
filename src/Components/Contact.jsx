import React, { useState } from 'react';
import phone from './phone.png';
import place from './place.png';
import mail from './mail.png';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState(''); // Added state for subject

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = { Name: name, Email: email, Subject: subject, Message: message };

    try {
      const res = await axios.post(`https://portfolio-8458c-default-rtdb.firebaseio.com/user.json`, data);
      console.log(res.data);
      alert('Message sent successfully')
    } catch (error) {
      console.error("Error in sending message:", error); // Improved error handling
    }
  };

  return (
    <>
      <div className="contact">
        <h1>Contact Me</h1>
        <div className="listContact">
          <div className="list">
            <p>
              <img src={phone} alt="Phone" /> <span>+91 7023187924</span>
            </p>
            <p>
              <img src={place} alt="Place" /> <span>Bansur, Alwar, Rajasthan</span>
            </p>
            <p>
              <img src={mail} alt="Mail" /> <span>stupidboysbusiness@gmail.com</span>
            </p>
          </div>

          <form onSubmit={HandleSubmit}>
            <h3>Feel Free To Contact</h3>
            <p><input className='btn' type="text"  id="name" value={name}  placeholder="Name" onChange={(e) => setName(e.target.value)} required/></p>
            <p> <input className='btn' type="email"  id="email"  value={email} placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/></p>
           <p><input className='btn' type="text"  id="subject"  value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)}  required/></p>
           <p><textarea className='btn' id="message" value={message}  placeholder="Message" onChange={(e) => setMessage(e.target.value)} required/></p>
            <p><button className='btn' type="submit">Send Message</button></p>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 All rights reserved | This portfolio is made with <strong>Jitendra</strong> </p>
      </footer>
    </>
  );
}

export default Contact;
