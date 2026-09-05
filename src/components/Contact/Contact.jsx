import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t, getTranslationObj } = useLanguage();
  const contactChannels = getTranslationObj('contact.channels') || [];

  const icons = [
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  ];

  const urls = [
    'https://wa.me/506',
    'mailto:atenixcr@gmail.com',
    'https://www.linkedin.com/in/atenix-cr-344985432?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    'https://github.com/AtenixCr',
    'https://instagram.com/atenix.cr',
    'https://www.facebook.com/share/1Qti6keqfv/'
  ];

  const colors = [
    '#25D366',
    '#3dd6c6',
    '#0A66C2',
    '#e8eef6',
    '#E4405F',
    '#1877F2'
  ];

  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div className="contact-info">
          <div className="contact-status-badge">
            <span className="status-dot"></span>
            {t('contact.statusBadge')}
          </div>
          <h2>{t('contact.title')}</h2>
          <p className="section-intro">
            {t('contact.subtitle')}
          </p>
          <p className="contact-subtext">
            {t('contact.subtext')}
          </p>
        </div>

        <div className="contact-channels-grid">
          {contactChannels.map((channel, idx) => (
            <a
              key={idx}
              href={urls[idx]}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
              style={{ '--channel-color': colors[idx] }}
            >
              <div className="channel-icon-wrapper">
                {icons[idx]}
              </div>
              <div className="channel-content">
                <span className="channel-title">{channel.title}</span>
                <span className="channel-desc">{channel.desc}</span>
                <span className="channel-action">
                  {channel.action} <span className="arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
