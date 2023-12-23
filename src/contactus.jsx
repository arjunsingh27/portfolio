import React from "react";
import './contactus.css';

function ContactUs() {
    return (
        <div className="contactus_container">
            <div className="contactus_inner_container">
                <h3>Contact Us</h3>
                <form action="/submit-contact-form" method="post">
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required /><br />
                    
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows="4" required></textarea><br />
                    
                    <button type="submit" value="Submit" >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
