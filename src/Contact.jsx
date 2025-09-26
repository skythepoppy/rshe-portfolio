import React, { useState } from "react";
import logo from './assets/Raphael_Evangelista.png';
import {Link} from 'react-router-dom';
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
        console.log("Form submitted:", formData);
        // TODO: send this somewhere (like EmailJS, backend, etc.)
        alert("Thanks for reaching out!");
        setFormData({ name: "", email: "", message: "" });
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
            <h1>Contact Me</h1>
            <p> Feel free to reach out here, or email me directly at : <p style={{fontStyle:'bold'}}>raphaelsebastien.evangelista@gmail.com</p></p>
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
