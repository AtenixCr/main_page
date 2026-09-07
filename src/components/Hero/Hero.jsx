import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <p className="eyebrow">Atenix</p>
        <h1>{t('hero.title')}</h1>
        <p className="lede">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">{t('hero.cta1')}</a>
          <a className="btn btn-ghost" href="#features">{t('hero.cta2')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
