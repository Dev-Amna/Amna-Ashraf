import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MyButton } from '../button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_4v4s31d",
      "template_6txi5km",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.msg,
      },
      "amliGqfnbMradbntO"
    ).then(
      () => {
        toast.success("Message sent successfully!", { autoClose: 3000 });
        setFormData({ name: "", email: "", msg: "" });
      },
      () => {
        toast.error("Failed to send message. Please try again.", { autoClose: 3000 });
      }
    );
  };

  return (
    <>

      {/*  Toast Container */}
      <ToastContainer position="top-right" theme="colored" />

      <section id='contact' className='contact-section'>
        <h1 className='contact-title'>🤙Contact me 😉</h1>
        <div className="contact-container">

          {/* Follow Section */}
          <div className="follow" data-aos="fade-right">
            <h1>Let's build something together</h1>
            <p>If you have any questions or would like to collaborate, feel free to contact me.</p>

            <h2 data-aos="fade-up">Follow me on:</h2>
            <ul data-aos="zoom-in" data-aos-delay="200">
              <li><a href="https://github.com/Dev-Amna" aria-label="GitHub"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/amna-ashraf1122/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.youtube.com/@Dev-Amna" aria-label="youtube"><i className="fab fa-youtube"></i></a></li>

            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} data-aos="fade-left">
            <div className='formContent'>
              <h2 className="form-title" data-aos="fade-up">Contact Me</h2>

              <div className="input-group" data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="name">Name *</label>
                <input
                  type="text" id='name' name='name'
                  placeholder='Enter your name..'
                  value={formData.name} onChange={handleChange} required
                />
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="email">Email *</label>
                <input
                  type="email" id='email' name='email'
                  placeholder='Enter your Email...'
                  value={formData.email} onChange={handleChange} required
                />
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="msg">Message *</label>
                <textarea
                  id='msg' name='msg' rows="4"
                  placeholder='Write here your Msg..'
                  value={formData.msg} onChange={handleChange} required
                ></textarea>
              </div>

              <div data-aos="zoom-in" data-aos-delay="400">
                <MyButton type="submit" className="submit-btn">Send</MyButton>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
