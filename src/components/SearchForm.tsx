import type { FormEventHandler } from 'react';

type SearchFormProps = {
  ariaLabel?: string;
  className?: string;
  inputId?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  buttonClassName?: string;
};

export function SearchForm({
  ariaLabel = 'Buscar no site',
  className,
  inputId = 'search',
  placeholder = 'Buscar...',
  buttonLabel = 'Buscar',
  buttonClassName = 'button-primary',
  onSubmit,
}: SearchFormProps) {
  const formClassName = ['search', className].filter(Boolean).join(' ');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form
      className={formClassName}
      role="search"
      aria-label={ariaLabel}
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor={inputId}>
        {buttonLabel}
      </label>
      <input id={inputId} type="search" className="search-bar" placeholder={placeholder} />
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  );
}
