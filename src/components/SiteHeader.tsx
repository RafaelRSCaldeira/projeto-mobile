import { Link, NavLink } from 'react-router-dom';
import { siteNavLinks } from '../data/navigation';
import { SearchForm } from './SearchForm';

export function SiteHeader() {
  return (
    <nav className="nav-bar">
      <span className="nav-content">
        <Link to="/" className="logo-nav" aria-label="Página inicial HABIT">
          <h3>HABIT</h3>
        </Link>
        <ul id="primary-navigation" className="nav-links">
          {siteNavLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </span>
      <span className="nav-actions">
        <SearchForm inputId="site-search" placeholder="Buscar..." />
        <Link className="button-secondary" to="/login">
          Entrar
        </Link>
      </span>
    </nav>
  );
}

export default SiteHeader;
