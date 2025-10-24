import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminList from '../../components/admin/AdminList';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';
import type { AdminListItem } from '../../components/admin/AdminList';

const editorItems: AdminListItem[] = [
  {
    content: 'Post #1',
    actions: [{ label: 'Remover', tone: 'danger' }],
  },
  {
    content: 'Post #2',
    actions: [{ label: 'Agendar' }],
  },
  {
    content: 'Post #3',
    actions: [{ label: 'Agendar' }],
  },
  {
    content: 'Post #4',
    actions: [{ label: 'Remover', tone: 'danger' }],
  },
  {
    content: 'Post #5',
    actions: [{ label: 'Agendar' }],
  },
];

export function AdminEditorChoicesPage() {
  return (
    <>
      <KpiGrid />

      <section className="card" aria-labelledby="admin-editor-choices">
        <header className="section__head">
          <h2 id="admin-editor-choices">Escolhas do Editor</h2>
          <form className="section__search" role="search" aria-label="Buscar posts">
            <label className="sr-only" htmlFor="buscar-posts">
              Buscar posts
            </label>
            <input id="buscar-posts" type="search" placeholder="Buscar posts." inputMode="search" />
          </form>
        </header>
        <AdminList header={['Post']} items={editorItems} ariaLabel="Posts selecionados" />
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminEditorChoicesPage;
