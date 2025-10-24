import Section from '../../components/Section';
import { destaquesPosts } from '../../data/highlights';

export function DestaquesPage() {
  return (
    <main className="main-content">
      <Section title="Destaques" titleTag="h2">
        <div className="posts-grid">
          {destaquesPosts.map(({ title, date }) => (
            <article key={title} className="cat-card">
              <div className="cat-thumb" aria-hidden="true" />
              <h4 className="post-title">{title}</h4>
              <small className="meta">{date}</small>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default DestaquesPage;

