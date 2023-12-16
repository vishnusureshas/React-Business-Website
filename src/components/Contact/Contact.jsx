import React from 'react'
import './Contact.css'
import ContactImage from '../../assets/contact/contact.jpg'
    
function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
            <div className="contact_wrapper">
                <div className="contact_col">
                    <div className="contact_image">
                        <img src={ContactImage} alt="Contact" />
                    </div>
                </div>
                <div className="contact_col">
                    <h2>Contact US</h2>
                    <form action="">
                        <div className="input_wrapper">
                            <input type="text" className='form-control' placeholder='Enter Your Name' autoComplete='off'/>
                        </div>

                        <div className="input_wrapper">
                            <input type="text" className='form-control' placeholder='Enter Your Number' autoComplete='off'/>
                        </div>

                        <div className="input_wrapper">
                            <input type="email" className='form-control' placeholder='Enter Your Email' autoComplete='off'/>
                        </div>

                        <div className="input_wrapper">
                            <textarea placeholder='Write a Message...'></textarea>
                        </div>

                        <div className="btn_wrapper">
                            <button className="btn" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
