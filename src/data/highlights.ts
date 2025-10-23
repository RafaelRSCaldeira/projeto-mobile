export type SimplePost = {
  title: string;
  date: string;
};

export const destaquesPosts: SimplePost[] = [
  { title: 'Destaque 1', date: '31 Jul 2025' },
  { title: 'Destaque 2', date: '31 Jul 2025' },
  { title: 'Destaque 3', date: '31 Jul 2025' },
  { title: 'Destaque 4', date: '31 Jul 2025' },
  { title: 'Destaque 5', date: '31 Jul 2025' },
  { title: 'Destaque 6', date: '31 Jul 2025' },
  { title: 'Destaque 7', date: '31 Jul 2025' },
  { title: 'Destaque 8', date: '31 Jul 2025' },
  { title: 'Destaque 9', date: '31 Jul 2025' },
];

export type EditorPost = {
  meta: string;
  title: string;
  readingTime: string;
};

export const editorChoicePosts: EditorPost[] = [
  {
    meta: '31 Jul 2025 · Tecnologia',
    title: 'Como o Design Multissensorial Está Moldando Produtos',
    readingTime: '3 min de leitura',
  },
  {
    meta: '31 Jul 2025 · Produtividade',
    title: 'As Rotinas Matinais dos Fundadores de Startups',
    readingTime: '4 min de leitura',
  },
  {
    meta: '31 Jul 2025 · Lifestyle',
    title: 'O Guia Essencial para um Escritório Minimalista',
    readingTime: '6 min de leitura',
  },
  {
    meta: '31 Jul 2025 · Negócios',
    title: 'Tendências de Assinaturas Digitais para Ficar de Olho',
    readingTime: '5 min de leitura',
  },
];

export const editorHighlightTopics: string[] = [
  'Guia prático de IA aplicada ao cotidiano',
  'Os melhores fluxos de onboarding para apps',
  'Como times remotos mantêm a cultura viva',
  'Estratégias de conteúdo evergreen',
];

export const editorMoreRecommendations: SimplePost[] = [
  { title: 'Narrativas que Conectam Marcas e Pessoas', date: '31 Jul 2025' },
  { title: 'Por Que Times Interdisciplinares Performam Melhor', date: '31 Jul 2025' },
  { title: 'Checklist de Revisão para Publicar Sem Medo', date: '31 Jul 2025' },
];

