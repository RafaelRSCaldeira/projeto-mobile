import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminList from '../../components/admin/AdminList';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';
import type { AdminListItem } from '../../components/admin/AdminList';

const commentItems: AdminListItem[] = Array.from({ length: 5 }, (_, index) => {
  const position = index + 1;
  return {
    content: `Comentário #${position} - Usuário ${position} - Em revisão`,
    actions: [
      { label: 'Aprovar' },
      { label: 'Reprovar', tone: 'danger' },
    ],
  };
});

export function AdminCommentsQueuePage() {
  return (
    <>
      <KpiGrid />

      <section className="card" aria-labelledby="admin-comments-queue">
        <header className="section__head">
          <h2 id="admin-comments-queue">Fila de comentários</h2>
          <form className="section__search" role="search" aria-label="Buscar comentários">
            <label className="sr-only" htmlFor="buscar-comentarios">
              Buscar comentários
            </label>
            <input
              id="buscar-comentarios"
              type="search"
              placeholder="Buscar comentários."
              inputMode="search"
            />
          </form>
        </header>
        <AdminList
          header={['Título', 'Autor', 'Status']}
          items={commentItems}
          ariaLabel="Fila de comentários"
        />
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminCommentsQueuePage;
