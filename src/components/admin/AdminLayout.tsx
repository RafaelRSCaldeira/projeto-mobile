import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

export function AdminLayout() {
  return (
    <>
      <a className="skip-link" href="#admin-content">
        Pular para o conteúdo
      </a>
      <AdminHeader />
      <main id="admin-content" className="container layout" role="main">
        <AdminSidebar />
        <section className="content">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default AdminLayout;

