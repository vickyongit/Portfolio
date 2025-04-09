import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import Heading from '../StyledComponents'
import './index.css'

const Contact = () => {
    const form = useRef(null)
    const [userContacted, setUserContacted] = useState()
    useEffect(() => {
        const isUserContacted = Cookies.get('Contacted') || false
        setUserContacted(isUserContacted)
    }, [])

    

    const sendEmail = (e) => {
        e.preventDefault()

        if (!userContacted) {
        emailjs.sendForm(
            'service_e5z26au',
            'template_mwmfu1e',
            form.current,
            'U-_uRoIn1tH9A-A48'
        ).then( result => {
            console.log(result.text)
            alert('Message Sent Successfully')
            Cookies.set('Contacted', true, {expires: 5})
            setUserContacted(true)
            form.current.reset()
        }).catch(error => {
            console.error(error.message)
            alert('Message Failed to Send')
        })
    } else {
        alert("Hey! You've already reached out 🙂 I'll get back to you soon!.")
form.current.reset()
    }
    }

    return (
    <div id="contact" className='contact-container'>
        <Heading>Contact</Heading> <hr className='second-line' />
        <form ref={form} onSubmit={sendEmail} className='contact-card'>
            <input autoComplete='on' className='input-element' name="name"  type="text" placeholder='Name / Company' required/>
            <input className='input-element' name="ph_number"  type="number" placeholder='Phone Number (Optional)'/>
            <input autoComplete='on' className='input-element' name="email" type="email" placeholder='Enter Your Email' required/>
            <input className='input-element' name="subject" type="text" placeholder='Subject' required/>
            <textarea className='textarea-element' name="message" placeholder='Message:' required/>
            <button type="submit" className='send-message-btn'>Send Message</button>
        </form>
    </div>
    )
}

export default Contact