import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ogdk39g', 'template_3h5xt1s', form.current, 'g7LNIRKg6wN7n-9Wp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <div> 
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div> 
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email address' />
                <button type='submit' className='btn btn-j' onClick={sendEmail}>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
