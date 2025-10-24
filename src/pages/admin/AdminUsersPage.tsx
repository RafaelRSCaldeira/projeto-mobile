import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminList from '../../components/admin/AdminList';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';
import type { AdminListItem } from '../../components/admin/AdminList';

const users: AdminListItem[] = [
  {
    content: 'Usuário #1 - email@teste.com - Ativo',
    actions: [{ label: 'Bloquear' }],
  },
  {
    content: 'Usuário #2 - email@teste.com - Ativo',
    actions: [{ label: 'Bloquear' }],
  },
  {
    content: 'Usuário #3 - email@teste.com - Bloqueado',
    actions: [{ label: 'Desbloquear' }],
  },
  {
    content: 'Usuário #4 - email@teste.com - Ativo',
    actions: [{ label: 'Bloquear' }],
  },
  {
    content: 'Usuário #5 - email@teste.com - Ativo',
    actions: [{ label: 'Bloquear' }],
  },
];

export function AdminUsersPage() {
  return (
    <>
      <KpiGrid />

      <section className="card" aria-labelledby="admin-users">
        <header className="section__head">
          <h2 id="admin-users">Usuários</h2>
          <form className="section__search" role="search" aria-label="Buscar usuários">
            <label className="sr-only" htmlFor="buscar-users">
              Buscar usuários
            </label>
            <input id="buscar-users" type="search" placeholder="Buscar." inputMode="search" />
          </form>
        </header>
        <AdminList
          header={['Usuário', 'E-mail', 'Status']}
          items={users}
          ariaLabel="Lista de usuários"
        />
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminUsersPage;
