import { NavLink } from 'react-router-dom';
import { adminNavItems } from '../../data/admin';

export function AdminSidebar() {
  return (
    <aside className="sidebar card" aria-labelledby="admin-menu-title">
      <h2 id="admin-menu-title" className="sidebar__title">
        Menu
      </h2>
      <nav aria-label="Administração">
        <ul className="menu">
          {adminNavItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;

