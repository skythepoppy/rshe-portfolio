import React, { useState } from "react";
import emailjs from "emailjs-com";
import logo from './assets/Raphael_Evangelista.png';
import { Link } from 'react-router-dom';
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "your_service_id",   // replace with your service ID
                "your_template_id",  // replace with your template ID
                formData,
                "your_public_key"    // replace with your public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                    alert("Oops! Something went wrong.");
                }
            );
    };

    return (
        <div className="contact-container">
            <img
                src={logo}
                alt="My Logo"
                className="logo"
            />
            <nav>
                <Link to="/home">Home</Link> /
                <Link to="/my-works">My Work</Link> /
                <Link to="/contact">Contact</Link>
            </nav>
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}





