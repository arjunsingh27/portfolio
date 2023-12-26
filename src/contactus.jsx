import React from "react";
import './contactus.css';

function ContactUs() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => alert("Thank you for your submission"))
        .catch((error) => alert(error));
    };

    return (
        <div className="contactus_container">
            <div className="contactus_inner_container">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required /><br />
                    
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows="4" required></textarea><br />
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
