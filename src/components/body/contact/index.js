import React from 'react'
import Separator from '../../com/separator'
import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
    <Separator/>
    <label className='section-title'>Contact</label>
    <div className='contact-container'>
        <div className='contact-left'>
            <p> Let's get in touch</p>
        </div>
        <div className='download'>
          <a download href={require('../../../assets/resume.pdf')}>
            <i class="fi-rr-download download-icon">Download Resume</i>
          </a>
        </div>
     </div>
    </div>
  )
}

export default Contact