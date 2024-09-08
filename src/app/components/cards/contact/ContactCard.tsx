'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactCard.module.css';

const ContactCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // EmailJS configuration
    emailjs
      .send(
        'service_tfixbvu', // Your EmailJS Service ID
        'template_abkn00f', // Your EmailJS Template ID
        {
          from_name: formData.name, // Maps to {{from_name}}
          email_id: formData.email,  // Maps to {{email_id}}
          message: formData.message, // Maps to {{message}}
        },
        'WK3jL84G0l_Y4uN1M' // Your EmailJS User ID
      )
      .then(
        () => {
          setStatusMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form data
        },
        (error) => {
          setStatusMessage('Failed to send the message. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };
  

  return (
    <div className={styles.contactCard}>
      <h2 className={styles.title}>Contact Me</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.button}>
          Send Message
        </button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </form>
    </div>
  );
};

export default ContactCard;
