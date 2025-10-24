import { Navigate, useParams } from 'react-router-dom';
import Section from '../../components/Section';
import TagList from '../../components/TagList';
import { categoryContent } from '../../data/categories';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? categoryContent[slug] : undefined;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main-content">
      <Section className="category-header" title={content.title} titleTag="h2">
        <TagList
          className="filter-row"
          items={content.filters.map((filter) => ({ label: filter }))}
        />
      </Section>

      <Section>
        <div className="posts-grid">
          {content.posts.map((post) => (
            <article key={post.title} className="cat-card">
              <div className="cat-thumb" aria-hidden="true" />
              <h4 className="post-title">{post.title}</h4>
              <small className="meta">{post.date}</small>
            </article>
          ))}
        </div>
        <div className="load-more">
          <button className="button-secondary" type="button">
            Carregar mais
          </button>
        </div>
      </Section>
    </main>
  );
}

export default CategoryPage;

