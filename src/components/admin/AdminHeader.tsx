import { Link, NavLink } from 'react-router-dom';
import { siteNavLinks } from '../../data/navigation';
import { SearchForm } from '../SearchForm';

export function AdminHeader() {
  return (
    <header className="topbar" role="banner">
      <div className="topbar__inner container">
        <div className="brand">
          <Link to="/" className="brand__logo" aria-label="Página inicial HABIT">
            HABIT
          </Link>
          <nav id="nav-principal" className="nav" aria-label="Navegação principal">
            <ul>
              {siteNavLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="admin-header__actions">
          <SearchForm
            inputId="admin-search"
            placeholder="Buscar."
            buttonLabel="Buscar"
            buttonClassName="btn btn--primary"
          />
          <Link className="btn btn--outline" to="/login">
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;

