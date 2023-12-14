import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactMe.css'
import { motion } from 'framer-motion';

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, e.target, process.env.REACT_APP_USER_KEY)
        .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <motion.div className="container contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <h1>Contact Me</h1>
      <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className='half'>
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className='half'>
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input placeholder="Subject" type="text" name="subject" required />
            </li>
            <li>
              <textarea placeholder="Message" name="message" required></textarea>
            </li>
            <li>
              <input type="submit" className='flat-button' value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;