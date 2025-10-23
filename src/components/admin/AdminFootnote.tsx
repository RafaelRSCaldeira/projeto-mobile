import { adminFootnoteText } from '../../data/admin';

export function AdminFootnote() {
  return (
    <footer className="footnote" role="contentinfo">
      <small>{adminFootnoteText}</small>
    </footer>
  );
}

export default AdminFootnote;

