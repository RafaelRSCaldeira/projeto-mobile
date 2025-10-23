export type AdminListAction = {
  label: string;
  tone?: 'default' | 'danger';
  ariaLabel?: string;
};

export type AdminListItem = {
  content: string;
  actions?: AdminListAction[];
};

type AdminListProps = {
  items: AdminListItem[];
  header?: string[];
  ariaLabel?: string;
};

export function AdminList({ items, header, ariaLabel }: AdminListProps) {
  return (
    <ul className="list" role="list" aria-label={ariaLabel}>
      {header ? (
        <li className="list__row list__row--head" aria-hidden="true">
          <span>{header.join(' · ')}</span>
          <span className="right">Ações</span>
        </li>
      ) : null}
      {items.map(({ content, actions }) => (
        <li key={content} className="list__row" role="listitem">
          <span>{content}</span>
          {actions?.length ? (
            <span className="right">
              {actions.map(({ label, tone = 'default', ariaLabel }) => (
                <button
                  key={label}
                  type="button"
                  className={['chip', tone === 'danger' ? 'chip--danger' : ''].filter(Boolean).join(' ')}
                  aria-label={ariaLabel ?? label}
                >
                  {label}
                </button>
              ))}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default AdminList;

