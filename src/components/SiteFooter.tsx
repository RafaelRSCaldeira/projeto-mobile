import { footerTags } from '../data/navigation';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-tags">
        {footerTags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>
      <div className="copyright">
        &copy; {currentYear} Meu Site · Meu site
      </div>
    </footer>
  );
}

export default SiteFooter;

