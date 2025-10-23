import CategoryGrid from '../components/CategoryGrid';
import FeaturedHighlights from '../components/FeaturedHighlights';
import Hero from '../components/Hero';
import Section from '../components/Section';
import TagList from '../components/TagList';
import {
  categoryPills,
  editorPicks,
  featuredPosts,
  heroContent,
  popularCategories,
} from '../data/home';

export function HomePage() {
  return (
    <main className="main-content">
      <Hero data={heroContent} />
      <CategoryGrid items={popularCategories} />
      <Section title="Todas as Categorias">
        <TagList
          className="category-tags"
          items={categoryPills.map(({ label, to }) => ({ label, to }))}
        />
      </Section>
      <FeaturedHighlights posts={featuredPosts} editorTopics={editorPicks} />
    </main>
  );
}

export default HomePage;

