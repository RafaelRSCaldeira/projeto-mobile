import type { ReactNode } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type SectionProps = {
  children: ReactNode;
  title?: string;
  titleTag?: HeadingTag;
  className?: string;
  titleClassName?: string;
};

export function Section({
  children,
  title,
  titleTag: Tag = 'h3',
  className,
  titleClassName,
}: SectionProps) {
  const sectionClass = ['section', className].filter(Boolean).join(' ');

  return (
    <section className={sectionClass}>
      {title ? <Tag className={titleClassName}>{title}</Tag> : null}
      {children}
    </section>
  );
}

export default Section;

