import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminList from '../../components/admin/AdminList';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';
import type { AdminListItem } from '../../components/admin/AdminList';

const reviewItems: AdminListItem[] = Array.from({ length: 5 }, (_, index) => {
  const position = index + 1;
  return {
    content: `Post #${position} - Autor ${position} - Em revisão`,
    actions: [
      { label: 'Aprovar' },
      { label: 'Reprovar', tone: 'danger' },
    ],
  };
});

export function AdminReviewQueuePage() {
  return (
    <>
      <KpiGrid />

      <section className="card" aria-labelledby="admin-review-queue">
        <header className="section__head">
          <h2 id="admin-review-queue">Fila de revisão</h2>
          <form className="section__search" role="search" aria-label="Buscar posts">
            <label className="sr-only" htmlFor="buscar-posts">
              Buscar posts
            </label>
            <input id="buscar-posts" type="search" placeholder="Buscar posts." inputMode="search" />
          </form>
        </header>
        <AdminList
          header={['Título', 'Autor', 'Status']}
          items={reviewItems}
          ariaLabel="Posts em revisão"
        />
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminReviewQueuePage;
