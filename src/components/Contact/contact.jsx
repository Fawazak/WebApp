import { useRef, useState, useEffect } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_26r2m9a",
        "template_ywocpvr",
        form.current,
        "TgJs47GuBZQitXmTo"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contactPage" className="contact-section" ref={ref}>
      <div className={`contact-container ${visible ? "visible" : ""}`}>

        {/* Left — info */}
        <div className="contact-left">
          <span className="contact-tag">Get in touch</span>
          <h2 className="contact-heading">
            Let's <span className="contact-accent">work</span> together
          </h2>
          <p className="contact-desc">
            Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/fawaz-al-khreisha-136128219"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Fawazak"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  required
                  type="text"
                  name="your_name"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  required
                  type="email"
                  name="your_email"
                  className="form-input"
                  placeholder="hello@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                required
                name="message"
                className="form-input form-textarea"
                rows="5"
                placeholder="Say hello, ask a question, or share an idea..."
              />
            </div>

            <button
              type="submit"
              className={`form-btn ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="form-feedback success">Message sent successfully!</div>
            )}
            {status === "error" && (
              <div className="form-feedback error">Something went wrong. Try again.</div>
            )}
          </form>
        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">
        <span>© {new Date().getFullYear()} Fawaz Al Khreisha. Built with React.</span>
      </div>
    </section>
  );
};

export default Contact;