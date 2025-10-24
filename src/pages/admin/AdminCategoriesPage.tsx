import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminList, { type AdminListItem } from '../../components/admin/AdminList';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';


const categoryItems: AdminListItem[] = Array.from({ length: 5 }, (_, index) => {
  const position = index + 1;
  return {
    content: `Categoria #${position}`,
    actions: [
      { label: 'Editar', ariaLabel: `Editar Categoria ${position}` },
      { label: 'Excluir', tone: 'danger', ariaLabel: `Excluir Categoria ${position}` },
    ],
  };
});

export function AdminCategoriesPage() {
  return (
    <>
      <header className="page-head">
        <h2>Visão geral</h2>
      </header>

      <KpiGrid />

      <section className="card" aria-labelledby="admin-categorias">
        <header className="section__head">
          <h3 id="admin-categorias">Categorias</h3>
          <form className="section__search" role="search" aria-label="Buscar categorias">
            <label className="sr-only" htmlFor="buscar-categorias">
              Buscar categorias
            </label>
            <input id="buscar-categorias" type="search" placeholder="Buscar categorias." inputMode="search" />
          </form>
        </header>
        <AdminList header={['Categoria']} items={categoryItems} ariaLabel="Lista de categorias" />
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminCategoriesPage;
