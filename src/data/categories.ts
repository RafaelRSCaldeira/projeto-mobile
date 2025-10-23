export type CategoryPost = {
  title: string;
  date: string;
};

export type CategoryContent = {
  slug: string;
  title: string;
  filters: string[];
  posts: CategoryPost[];
};

const defaultDate = '31 Jul 2025';

export const categoryContent: Record<string, CategoryContent> = {
  negocios: {
    slug: 'negocios',
    title: 'Categoria: Negócios',
    filters: ['Popular', 'Mais recentes', 'Estratégia'],
    posts: [
      { title: 'Tendências de Mercado para 2025', date: defaultDate },
      { title: 'Como Criar um Plano de Negócios', date: defaultDate },
      { title: 'Liderança em Tempos de Mudança', date: defaultDate },
      { title: 'Guia de Precificação para Iniciantes', date: defaultDate },
      { title: 'KPIs que Realmente Importam', date: defaultDate },
      { title: 'Como Validar sua Ideia Rápido', date: defaultDate },
      { title: 'Erros Comuns ao Empreender', date: defaultDate },
      { title: 'Pitch Deck: O que Incluir', date: defaultDate },
      { title: 'Vendas Consultivas na Prática', date: defaultDate },
    ],
  },
  tecnologia: {
    slug: 'tecnologia',
    title: 'Categoria: Tecnologia',
    filters: ['Popular', 'Mais recentes', 'Produtividade'],
    posts: [
      { title: 'O Renascimento do Techno de Detroit', date: defaultDate },
      { title: '10 Selos para Ficar de Olho Este Ano', date: defaultDate },
      { title: 'Como Produzir Kicks Encorpados no Techno', date: defaultDate },
      { title: 'Guia de Síntese: Baixos Hipnóticos', date: defaultDate },
      { title: 'Entrevista: Novos DJs que Você Precisa Ouvir', date: defaultDate },
      { title: 'Clubs Icônicos que Moldaram o Gênero', date: defaultDate },
      { title: 'Equipamentos de Live Set para Techno', date: defaultDate },
      { title: 'Playlists de Treino com BPM Alto', date: defaultDate },
      { title: 'O Futuro do Techno Melódico', date: defaultDate },
    ],
  },
  produtividade: {
    slug: 'produtividade',
    title: 'Categoria: Produtividade',
    filters: ['Popular', 'Mais recentes', 'Hábitos'],
    posts: [
      { title: 'Técnica Pomodoro: Guia Definitivo', date: defaultDate },
      { title: 'Organizando seu Dia com Blocos', date: defaultDate },
      { title: 'Ferramentas para Foco Profundo', date: defaultDate },
      { title: 'Rotinas Matinais que Funcionam', date: defaultDate },
      { title: 'Como Dizer Não a Interrupções', date: defaultDate },
      { title: 'Checklist Semanal Eficiente', date: defaultDate },
      { title: 'Automatize Tarefas Repetitivas', date: defaultDate },
      { title: 'Emails: Caixa de Entrada Zero', date: defaultDate },
      { title: 'Como Evitar Procrastinação', date: defaultDate },
    ],
  },
  filmes: {
    slug: 'filmes',
    title: 'Categoria: Filmes',
    filters: ['Popular', 'Mais recentes', 'Lançamentos'],
    posts: [
      { title: 'Os Melhores Suspenses de 2025', date: defaultDate },
      { title: 'Diretores que Você Deve Conhecer', date: defaultDate },
      { title: 'Sci-fi que Valem o Rewatch', date: defaultDate },
      { title: 'Trilhas Sonoras Inesquecíveis', date: defaultDate },
      { title: 'O Retorno das Franquias Clássicas', date: defaultDate },
      { title: 'Indicações de Filmes Nacionais', date: defaultDate },
      { title: 'Como o Streaming Mudou o Cinema', date: defaultDate },
      { title: 'Animações para Toda a Família', date: defaultDate },
      { title: 'Documentários Imperdíveis', date: defaultDate },
    ],
  },
  lifestyle: {
    slug: 'lifestyle',
    title: 'Categoria: Lifestyle',
    filters: ['Popular', 'Mais recentes', 'Bem-estar'],
    posts: [
      { title: 'Rotinas Minimalistas para o Dia a Dia', date: defaultDate },
      { title: 'Receitas Rápidas e Saudáveis', date: defaultDate },
      { title: 'Como Montar um Guarda-Roupa Cápsula', date: defaultDate },
      { title: 'Alongamentos para o Home Office', date: defaultDate },
      { title: 'Hobbies Criativos para Começar Hoje', date: defaultDate },
      { title: 'Design da Casa: Dicas de Conforto', date: defaultDate },
      { title: 'Mindfulness para Iniciantes', date: defaultDate },
      { title: 'Viagens Curtas de Fim de Semana', date: defaultDate },
      { title: 'Rotina Noturna de Qualidade', date: defaultDate },
    ],
  },
  educacao: {
    slug: 'educacao',
    title: 'Categoria: Educação',
    filters: ['Popular', 'Mais recentes', 'Aprendizado'],
    posts: [
      { title: 'Aprenda Rápido com Técnica Feynman', date: defaultDate },
      { title: 'Como Montar um Plano de Estudos', date: defaultDate },
      { title: 'Memorização Espaçada: O que é?', date: defaultDate },
      { title: 'Cursos Gratuitos Recomendados', date: defaultDate },
      { title: 'Estudando com Mapas Mentais', date: defaultDate },
      { title: 'Como Manter a Motivação', date: defaultDate },
      { title: 'Ferramentas para Anotações Efetivas', date: defaultDate },
      { title: 'Estudo em Grupo: Boas Práticas', date: defaultDate },
      { title: 'Leitura Ativa vs. Passiva', date: defaultDate },
    ],
  },
  mailing: {
    slug: 'mailing',
    title: 'Categoria: Mailing',
    filters: ['Popular', 'Mais recentes', 'Campanhas'],
    posts: [
      { title: 'Como Aumentar a Abertura de Emails', date: defaultDate },
      { title: 'Melhores Práticas de Assunto', date: defaultDate },
      { title: 'Segmentação que Converte', date: defaultDate },
      { title: 'Automação de Boas-Vindas', date: defaultDate },
      { title: 'Layout Responsivo para Emails', date: defaultDate },
      { title: 'Testes A/B: Por Onde Começar?', date: defaultDate },
      { title: 'Nutrição de Leads em 5 Etapas', date: defaultDate },
      { title: 'Blacklist: Como Evitar', date: defaultDate },
      { title: 'Métricas que Importam', date: defaultDate },
    ],
  },
  ecommerce: {
    slug: 'ecommerce',
    title: 'Categoria: eCommerce',
    filters: ['Popular', 'Mais recentes', 'Conversão'],
    posts: [
      { title: 'Checkout Otimizado: 7 Passos', date: defaultDate },
      { title: 'SEO para Lojas Virtuais', date: defaultDate },
      { title: 'Fotos de Produto que Vendem', date: defaultDate },
      { title: 'Abandono de Carrinho: Soluções', date: defaultDate },
      { title: 'Estratégias de Upsell', date: defaultDate },
      { title: 'Como Calcular Frete Competitivo', date: defaultDate },
      { title: 'Atendimento que Fideliza', date: defaultDate },
      { title: 'Logística para Black Friday', date: defaultDate },
      { title: 'Marketplace: Vale a Pena?', date: defaultDate },
    ],
  },
  alimentacao: {
    slug: 'alimentacao',
    title: 'Categoria: Alimentação',
    filters: ['Popular', 'Mais recentes', 'Saudável'],
    posts: [
      { title: 'Café da Manhã Proteico', date: defaultDate },
      { title: 'Snacks para o Trabalho', date: defaultDate },
      { title: 'Guia de Marmitas da Semana', date: defaultDate },
      { title: 'Hidratação: Quanto Beber?', date: defaultDate },
      { title: 'Receitas Low-Carb Preferidas', date: defaultDate },
      { title: 'Doces Sem Açúcar que Surpreendem', date: defaultDate },
      { title: 'Como Ler Rótulos Nutricionais', date: defaultDate },
      { title: 'Batch Cooking em 2 Horas', date: defaultDate },
      { title: 'Cortes de Carne e Usos', date: defaultDate },
    ],
  },
  social: {
    slug: 'social',
    title: 'Categoria: Social',
    filters: ['Popular', 'Mais recentes', 'Tendências'],
    posts: [
      { title: 'Estratégias de Conteúdo para 2025', date: defaultDate },
      { title: 'Como Crescer no Instagram', date: defaultDate },
      { title: 'Comunidades que Engajam', date: defaultDate },
      { title: 'Redes Sociais e Vendas', date: defaultDate },
      { title: 'Métricas Além de Likes', date: defaultDate },
      { title: 'Conteúdo em Vídeo: Guia', date: defaultDate },
      { title: 'Calendário Editorial Prático', date: defaultDate },
      { title: 'Parcerias com Influenciadores', date: defaultDate },
      { title: 'Atendimento nas Redes', date: defaultDate },
    ],
  },
};

export const categorySlugs = Object.keys(categoryContent);

