import Section from '../../components/Section';
import {
  editorChoicePosts,
  editorHighlightTopics,
  editorMoreRecommendations,
} from '../../data/highlights';

export function EditorChoicesPage() {
  return (
    <main className="main-content">
      <Section title="Escolhas do Editor" titleTag="h2">
        <p className="meta">
          Histórias selecionadas manualmente para inspirar sua próxima leitura.
        </p>
      </Section>

      <Section className="featured-section">
        <div className="featured-grid">
          <div className="featured-posts">
            {editorChoicePosts.map(({ meta, title, readingTime }) => (
              <article key={title} className="post-card">
                <div className="thumb" aria-hidden="true" />
                <div className="post-body">
                  <span className="meta">{meta}</span>
                  <h4 className="post-title">{title}</h4>
                  <span className="reading-time">{readingTime}</span>
                </div>
              </article>
            ))}
          </div>
          <aside className="editor-picks">
            <h3>Temas em destaque</h3>
            <div className="editor-card">
              <ul>
                {editorHighlightTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section title="Mais recomendações">
        <div className="posts-grid">
          {editorMoreRecommendations.map(({ title, date }) => (
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

export default EditorChoicesPage;

