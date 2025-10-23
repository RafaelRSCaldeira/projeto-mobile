export type AdminNavItem = {
  label: string;
  to: string;
};

export const adminNavItems: AdminNavItem[] = [
  { label: 'Categorias', to: '/admin/categorias' },
  { label: 'Criar Post', to: '/admin/criar-post' },
  { label: 'Escolhas do Editor', to: '/admin/escolhas-editor' },
  { label: 'Usuários', to: '/admin/usuarios' },
  { label: 'Fila de revisão', to: '/admin/fila-revisao' },
  { label: 'Fila de comentários', to: '/admin/fila-comentarios' },
];

export type Kpi = {
  label: string;
  value: string;
};

export const defaultKpis: Kpi[] = [
  { label: 'Posts', value: '128' },
  { label: 'Visualizações', value: '54k' },
  { label: 'Inscritos', value: '12k' },
  { label: 'Pendências', value: '7' },
];

export const adminQuickTags = ['Instagram', 'Work', 'Bags', 'Lamp', 'Books'];

export const adminFootnoteText = '© 2025 Meu Site · Meu site';

