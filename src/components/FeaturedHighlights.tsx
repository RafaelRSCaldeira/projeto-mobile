import type { FeaturedPost } from '../data/home';
import Section from './Section';

type FeaturedHighlightsProps = {
  posts: FeaturedPost[];
  editorTopics: string[];
};

export function FeaturedHighlights({ posts, editorTopics }: FeaturedHighlightsProps) {
  return (
    <Section className="featured-section">
      <div className="featured-grid">
        <div className="featured-posts">
          <h3>Postagens em Destaque</h3>
          {posts.map(({ image, meta, title, readingTime }) => (
            <article key={title} className="post-card">
              <div className="thumb" aria-hidden="true">
                <img src={image} alt="" />
              </div>
              <div className="post-body">
                <span className="meta">{meta}</span>
                <h4 className="post-title">{title}</h4>
                <span className="reading-time">{readingTime}</span>
              </div>
            </article>
          ))}
        </div>
        <aside className="editor-picks">
          <h3>Escolhas do Editor</h3>
          <div className="editor-card">
            <ul>
              {editorTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export default FeaturedHighlights;

