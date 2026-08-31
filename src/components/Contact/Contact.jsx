import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('sent');
    setForm(initialForm);
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div>
          <h2>Let&apos;s talk</h2>
          <p className="section-intro">
            Tell us what you want to build. We partner with teams to turn ideas
            into durable web products.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          {status === 'sent' && (
            <p className="form-note success">Message received. Thank you.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
