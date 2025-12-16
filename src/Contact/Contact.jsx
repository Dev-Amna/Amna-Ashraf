import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MyButton } from "../button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";
import MagicButton from "../MagicButton/MagicButton";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

function Contact() {
  const [showMagic, setShowMagic] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMagicClick = () => setShowMagic(true);
  const closeMagic = () => setShowMagic(false);

  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Email to your inbox
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.msg,
    };

    emailjs
      .send("service_4v4s31d", "template_6txi5km", emailParams, "gf9OfKiAGstx0sCiv")
      .then(() => {
        toast.success("Message sent successfully!", { autoClose: 3000 });
        setFormData({ name: "", email: "", msg: "" });

        // Auto-reply to visitor
        const autoReplyParams = {
          from_name: formData.name,
          message: formData.msg,
          to_email: formData.email, // must match {{to_email}} in template_qqh7s67
        };

        emailjs
          .send("service_4v4s31d", "template_qqh7s67", autoReplyParams, "gf9OfKiAGstx0sCiv")
          .then(() => {
            toast.info("Auto-reply sent to visitor!", { autoClose: 3000 });
          })
          .catch(() => {
            toast.error("Failed to send auto-reply.", { autoClose: 3000 });
          });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", { autoClose: 3000 });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <section id="contact" className="contact-section">
        <h1 className="contact-title">🤙 Contact me 😉</h1>
        <div className="contact-container">
          {/* Follow Section */}
          <div className="follow" data-aos="fade-right">
            <h1>Let's build something together</h1>
            <p>
              If you have any questions or would like to collaborate, feel free to contact me.
            </p>

            <h2 data-aos="fade-up">Follow me on:</h2>
            <ul data-aos="zoom-in" data-aos-delay="200">
              <li>
                <a href="https://github.com/Dev-Amna" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/amna-ashraf1122/" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Dev-Amna" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>

            <div className="magic-container">
              {!showMagic && (
                <MyButton className="magic-button" onClick={handleMagicClick}>
                  See Magic
                </MyButton>
              )}
              {showMagic && <MagicButton onClose={closeMagic} />}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} data-aos="fade-left">
            <div className="formContent">
              <h2 className="form-title" data-aos="fade-up">
                Contact Me
              </h2>

              <div className="input-group" data-aos="fade-up" data-aos-delay="100">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name *</label>
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="200">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email *</label>
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="300">
                <textarea
                  id="msg"
                  name="msg"
                  rows="4"
                  placeholder=" "
                  value={formData.msg}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="msg">Message *</label>
              </div>

              <div data-aos-delay="400">
                <MyButton type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </MyButton>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
