import type { CategoryCard } from '../data/home';
import Section from './Section';

type CategoryGridProps = {
  items: CategoryCard[];
};

export function CategoryGrid({ items }: CategoryGridProps) {
  return (
    <Section title="Categorias Populares">
      <div className="categories-popular">
        {items.map(({ label, image, alt }) => (
          <div key={label} className="category-card">
            <img src={image} alt={alt} />
            <span className="card-label">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default CategoryGrid;

