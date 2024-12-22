import React from 'react';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! Thank you for reaching out.');
  };

  return (
    <div className="contact-us-page">
      <div className="container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to chat, reach out to us.</p>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" className="form-control" placeholder="Enter subject" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
