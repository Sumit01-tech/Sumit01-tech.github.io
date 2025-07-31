import React from 'react';
import "../styles/Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Contactme = () => {
    const handleButtonClick = () => {
        const phoneNumber = '7903924034';
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:sumit.gourav280800@gmail.com';
    };

    return (
        <section className='Contact-maindiv' id='contact'>
            <div className='heading-div'>
                <button className='heading-textbtn'>
                    <h1 className='mainheading'>Contact <span style={{ color: "#0e4166" }}>Me</span></h1>
                </button>
            </div>

            <div className='contact'>
                {/* contact details */}
                <div className='contact-details'>
                    <div className="details-cards">
                        <div className="details-card red" onClick={handleButtonClick}>
                            <div>
                                <BsFillTelephoneFill className='contact-icon' />
                                <p id="contact-phone">+91 7903924034</p>
                            </div>
                        </div>

                        <div className="details-card blue">
                            <div>
                                <MdLocationOn className='contact-icon' />
                                <p>Pune, Maharashtra</p>
                            </div>
                        </div>

                        <div className="details-card green" onClick={handleEmailClick} id="contact-email">
                            <div>
                                <HiMail className='contact-icon' />
                                <p>sumit.gourav280800@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <div className='contact-form-div'>
                    <div className="contact-card">
                        <span className="contact-title">Feel Free To Contact</span>
                        <form
                            className="contact-form"
                            action="https://formsubmit.co/sumit.gourav280800@gmail.com"
                            method="POST"
                        >
                            <div className="contact-group">
                                <input placeholder="‎" type="text" name="name" required />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="contact-group">
                                <input placeholder="‎" type="email" id="email" name="email" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="contact-group">
                                <input placeholder="‎" type="text" id="subject" name="_subject" required />
                                <label htmlFor="subject">Subject</label>
                            </div>

                            <div className="contact-group">
                                <textarea placeholder="‎" id="comment" name="message" rows="5" required />
                                <label htmlFor="comment">Message</label>
                                <input type="hidden" name="_template" value="box" />
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactme;
