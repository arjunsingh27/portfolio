import React from "react";
import './contactus.css';

function ContactUs() {
    return (
        <div className="contactus_container">
            <div className="contactus_inner_container">
                <h3>Contact Us</h3>
                <form
                    name="contactus"
                    method="POST"
                    data-netlify="true"
                    action="/home" // Redirects to a success page
                >
                    <input type="hidden" name="form-name" value="contactus" /> {/* Required for Netlify */}
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />

                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows="4" required></textarea><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
