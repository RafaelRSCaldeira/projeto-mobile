export type NavLink = {
  label: string;
  to: string;
};

export const siteNavLinks: NavLink[] = [
  { label: 'Início', to: '/' },
  { label: 'Páginas', to: '/escolhas-do-editor' },
  { label: 'Destaques', to: '/destaques' },
  { label: 'Assinar', to: '/newsletter' },
  { label: 'Admin', to: '/admin/categorias' },
];

export const footerTags: string[] = ['Instagram', 'Work', 'Bags', 'Lamp', 'Books'];

