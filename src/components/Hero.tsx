import { Link } from 'react-router-dom';
import type { HeroContent } from '../data/home';

type HeroProps = {
  data: HeroContent;
};

export function Hero({ data }: HeroProps) {
  const { title, description, primaryCta, secondaryCta, image } = data;

  return (
    <section className="hero section">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button-primary" to={primaryCta.to}>
            {primaryCta.label}
          </Link>
          <Link className="button-secondary" to={secondaryCta.to}>
            {secondaryCta.label}
          </Link>
        </div>
      </div>
      <aside className="hero-aside" aria-hidden="true">
        <img src={image} alt="Imagem de destaque" />
      </aside>
    </section>
  );
}

export default Hero;

