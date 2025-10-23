import heroImage from '../assets/hero.webp';
import workImage from '../assets/work.jpg';
import booksImage from '../assets/books.webp';
import technoImage from '../assets/techno.jpeg';
import postOneImage from '../assets/post1.jpg';
import postTwoImage from '../assets/post2.png';

export type HeroContent = {
  title: string;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  image: string;
};

export const heroContent: HeroContent = {
  title: 'Navegue por tópicos de interesse',
  description: 'Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.',
  primaryCta: { label: 'Explorar categorias', to: '/destaques' },
  secondaryCta: { label: 'Assine a newsletter', to: '/newsletter' },
  image: heroImage,
};

export type CategoryCard = {
  label: string;
  image: string;
  alt: string;
};

export const popularCategories: CategoryCard[] = [
  { label: 'Work', image: workImage, alt: 'Work' },
  { label: 'Books', image: booksImage, alt: 'Books' },
  { label: 'Techno', image: technoImage, alt: 'Tecnologia' },
];

export type PillLink = {
  label: string;
  to: string;
};

export const categoryPills: PillLink[] = [
  { label: 'Negócios', to: '/categorias/negocios' },
  { label: 'Tecnologia', to: '/categorias/tecnologia' },
  { label: 'Produtividade', to: '/categorias/produtividade' },
  { label: 'Filmes', to: '/categorias/filmes' },
  { label: 'Lifestyle', to: '/categorias/lifestyle' },
  { label: 'Educação', to: '/categorias/educacao' },
  { label: 'Mailing', to: '/categorias/mailing' },
  { label: 'eCommerce', to: '/categorias/ecommerce' },
  { label: 'Alimentação', to: '/categorias/alimentacao' },
  { label: 'Social', to: '/categorias/social' },
];

export type FeaturedPost = {
  image: string;
  meta: string;
  title: string;
  readingTime: string;
};

export const featuredPosts: FeaturedPost[] = [
  {
    image: postOneImage,
    meta: '31 Jul 2025 · Destaque',
    title: 'Erros de Design que Todos Devem Evitar',
    readingTime: '3 min de leitura',
  },
  {
    image: postTwoImage,
    meta: '31 Jul 2025 · Destaque',
    title: 'As Maiores Empresas por Receita',
    readingTime: '3 min de leitura',
  },
];

export const editorPicks: string[] = [
  'O uso negativo da internet',
  'O segredo do brainstorm',
  'Escalar para pequenos negócios',
  'O futuro do trabalho remoto',
];

