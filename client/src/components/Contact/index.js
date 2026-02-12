import Cookies from 'js-cookie'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { Heading } from '../StyledComponents'
import './index.css'

const Contact = () => {
  const form = useRef(null)
  const [showCinematic, setShowCinematic] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_e5z26au',
      'template_mwmfu1e',
      form.current,
      'U-_uRoIn1tH9A-A48'
    )
    .then(() => {
      Cookies.set('Contacted', true, { expires: 5 })
      form.current.reset()

      // 🎬 Trigger cinematic overlay
      setShowCinematic(true)

      // Auto close cinematic after 6s
      setTimeout(() => {
        setShowCinematic(false)
      }, 6000)
    })
    .catch((error) => {
      console.error(error.message)
    })
  }

  return (
    <>
      {/* 🎬 CINEMATIC OVERLAY */}
      {showCinematic && (
        <div className="cinematic-overlay">
          <div className="cinematic-text first">
            Thank you for connecting.
          </div>
          <div className="cinematic-text second">
            I’ll get back to you shortly.
          </div>
        </div>
      )}

      <div id="let's connect" className="contact-container">
        <Heading>Let's Connect</Heading>
        <hr className="second-line" />

        <form ref={form} onSubmit={sendEmail} className="contact-card">
          <input
            autoComplete="on"
            className="input-element"
            name="name"
            type="text"
            placeholder="Name / Company"
            required
          />

          <input
            className="input-element"
            name="ph_number"
            type="number"
            placeholder="Phone Number (Optional)"
          />

          <input
            autoComplete="on"
            className="input-element"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            className="input-element"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            className="textarea-element"
            name="message"
            placeholder="Message"
            required
          />

          <button type="submit" className="send-message-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
