import type { ReactNode } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

type SiteLayoutProps = {
  children: ReactNode;
  showDivider?: boolean;
};

export function SiteLayout({ children, showDivider = true }: SiteLayoutProps) {
  return (
    <div className="container">
      <SiteHeader />
      {showDivider && <hr className="section-separator" />}
      {children}
      <SiteFooter />
    </div>
  );
}

export default SiteLayout;

