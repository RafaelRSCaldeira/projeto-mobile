import { Link } from 'react-router-dom';

export type TagItem = {
  label: string;
  to?: string;
  asButton?: boolean;
};

type TagListProps = {
  items: TagItem[];
  className?: string;
  ariaLabel?: string;
};

export function TagList({ items, className, ariaLabel }: TagListProps) {
  const wrapperClass = [className].filter(Boolean).join(' ') || undefined;

  return (
    <div className={wrapperClass} aria-label={ariaLabel}>
      {items.map(({ label, to, asButton }) => {
        if (asButton) {
          return (
            <button type="button" key={label} className="pill">
              {label}
            </button>
          );
        }

        if (to) {
          return (
            <Link key={label} className="pill" to={to}>
              {label}
            </Link>
          );
        }

        return (
          <span key={label} className="pill">
            {label}
          </span>
        );
      })}
    </div>
  );
}

export default TagList;
