import { adminQuickTags } from '../../data/admin';

export function AdminQuickTags() {
  return (
    <section className="pills" aria-label="Tags rápidas">
      {adminQuickTags.map((label) => (
        <button key={label} type="button" className="pill">
          {label}
        </button>
      ))}
    </section>
  );
}

export default AdminQuickTags;
