// src/Components/ContactSection.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    // honeypot (simple spam protection)
    if (formRef.current.company?.value) {
      console.log("Honeypot triggered — ignoring.");
      setStatus("sent");
      formRef.current.reset();
      return;
    }

    setStatus("sending");
    console.log("Sending via EmailJS (sendForm)...");

    try {
      const result = await emailjs.sendForm(
        "service_rj73m6y",           // your service id
        "template_ok1xqhu",         // ← UPDATED template id
        formRef.current,
        "X6cuLKmOWqZsc_ZXN"         // your public key / user id
      );
      console.log("EmailJS sendForm success:", result);
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 3500);
      return;
    } catch (err) {
      console.error("EmailJS sendForm failed:", err);
      // try a REST fallback to get the raw server response (useful for 400 debugging)
    }

    // REST fallback (helps capture response body)
    try {
      const templateParams = {
        user_name: formRef.current.user_name?.value || "",
        user_email: formRef.current.user_email?.value || "",
        message: formRef.current.message?.value || "",
      };
      console.log("Trying REST fallback, payload:", templateParams);

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_rj73m6y",
          template_id: "template_ok1xqhu",
          user_id: "X6cuLKmOWqZsc_ZXN",
          template_params: templateParams,
        }),
      });

      const text = await res.text();
      console.log("REST fallback status:", res.status, "body:", text);

      if (res.ok) {
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 3500);
      } else {
        setStatus("error");
      }
    } catch (err2) {
      console.error("REST fallback error:", err2);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="cs-section" aria-labelledby="contact-heading">
      <div className="cs-inner">
        <header className="cs-head">
          <h2 id="contact-heading" className="cs-title">
            <span className="cs-grad">Let’s Work Together</span>
          </h2>
          <p className="cs-sub">Have a project or want to collaborate? Send a message and I’ll reply soon.</p>
        </header>

        <div className="cs-grid">
          <aside className="cs-info" aria-hidden={false}>
            <div className="cs-card">
              <h3>Contact</h3>
              <p className="cs-contact">📧 <a href="mailto:shagun.at.work02@gmail.com">shagun.at.work02@gmail.com</a></p>
              <p className="cs-contact">📍 India</p>
            </div>

            <div className="cs-card small">
              <h3>Availability</h3>
              <p>Open for freelance & collaboration — I usually reply within 2 business days.</p>
            </div>
          </aside>

          <form
            ref={formRef}
            className="cs-form"
            onSubmit={handleSubmit}
            noValidate
            aria-live="polite"
          >
            {/* honeypot */}
            <input type="text" name="company" className="hp" tabIndex="-1" autoComplete="off" />

            <label className="cs-field">
              <span className="cs-label">Name</span>
              <input name="user_name" type="text" required placeholder="Your name" />
            </label>

            <label className="cs-field">
              <span className="cs-label">Email</span>
              <input name="user_email" type="email" required placeholder="you@domain.com" />
            </label>

            <label className="cs-field cs-field-full">
              <span className="cs-label">Message</span>
              <textarea name="message" rows="6" required placeholder="Tell me about your project..." />
            </label>

            <div className="cs-actions">
              <button
  type="submit"
  className="cs-btn"
  disabled={status === "sending"}
  aria-disabled={status === "sending"}
  aria-live="polite"
>
  {/* animated gradient/gloss + icon */}
  <span className="cs-btn-inner">
    {/* spinner shown when sending */}
    {status === "sending" ? (
      <span className="cs-spinner" aria-hidden="true" />
    ) : (
      <svg className="cs-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
      </svg>
    )}

    <span className="cs-btn-text">
      {status === "sending" ? "Sending…" : "Send Message"}
    </span>
  </span>
</button>


              <div className={`cs-pill ${status === "sent" ? "success" : status === "error" ? "error" : "hidden"}`} role="status">
                {status === "sent" ? "✅ Message sent!" : status === "error" ? "❌ Something went wrong." : ""}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
